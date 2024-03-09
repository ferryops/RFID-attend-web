// app/api/attendance/save.ts
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { isLate } from "@/utils/timeAttendance";

export async function POST(req: NextRequest) {
  const { employee_id, check_in } = await req.json();
  const connection = await connectDB();

  try {
    // Check if employee is late
    const late = isLate(new Date(check_in));

    // Check if employee has already checked in today
    const [existingAttendanceResult] = await connection.query(
      "SELECT id FROM attendance_logs WHERE employee_id =? AND DATE(check_in) = CURDATE()",
      [employee_id] as const // Change the type of the employee_id parameter to const
    );
    // Check if existingAttendanceResult is an array
    if (Array.isArray(existingAttendanceResult)) {
      if (existingAttendanceResult.length > 0) {
        return NextResponse.json({ message: "Karyawan sudah absen hari ini" }, { status: 400 });
      }
    } else {
      // Handle non-array result
      console.error("Unexpected result:", existingAttendanceResult);
      return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }

    // Get employee name from database
    const [employeeResult] = await connection.query("SELECT name FROM employees WHERE id = ?", [employee_id]);
    const employeeName = (employeeResult as { name: string }[])[0].name;

    let message;
    if (late) {
      message = {
        employeeName,
        status: "terlambat",
      };
    } else {
      message = {
        employeeName,
        status: "tidak terlambat",
      };
    }

    // Insert attendance record into attendance_logs table
    await connection.query("INSERT INTO attendance_logs (employee_id, check_in, is_late) VALUES (?, ?, ?)", [
      employee_id,
      check_in,
      late ? 1 : 0,
    ]);

    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    console.error("Error saving attendance record:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    connection.end();
  }
}
