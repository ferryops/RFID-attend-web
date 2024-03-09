// app/api/attendance/checkout.ts
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { isAfterCheckoutTime } from "@/utils/checkoutAttendance";

export async function POST(req: NextRequest) {
  const { employee_id, check_out } = await req.json();
  const connection = await connectDB();

  try {
    // Check if employee can checkout
    const afterCheckoutTime = isAfterCheckoutTime(new Date(check_out));
    console.log(afterCheckoutTime);

    if (!afterCheckoutTime) {
      return NextResponse.json({ message: "Karyawan tidak dapat checkout pada saat ini" }, { status: 400 });
    }

    // Check if employee has already checked out today
    const [existingCheckoutResult] = await connection.query(
      "SELECT id FROM attendance_logs WHERE employee_id = ? AND DATE(check_out) = CURDATE()",
      [employee_id] as const // Change the type of the employee_id parameter to const
    );
    // Check if existingCheckoutResult is an array
    if (Array.isArray(existingCheckoutResult)) {
      if (existingCheckoutResult.length > 0) {
        return NextResponse.json({ message: "Karyawan sudah checkout hari ini" }, { status: 400 });
      }
    } else {
      // Handle non-array result
      console.error("Unexpected result:", existingCheckoutResult);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

    // Get employee name from database
    const [employeeResult] = await connection.query("SELECT name FROM employees WHERE id = ?", [employee_id]);
    const employeeName = (employeeResult as { name: string }[])[0].name;

    // Insert checkout record into attendance_logs table
    await connection.query("INSERT INTO attendance_logs (employee_id, check_out) VALUES (?, ?)", [employee_id, check_out]);

    return NextResponse.json({ message: `Karyawan ${employeeName} berhasil checkout` }, { status: 201 });
  } catch (error) {
    console.error("Error saving checkout record:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    connection.end();
  }
}
