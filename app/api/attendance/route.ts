import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { interval, start, end } = Object.fromEntries(request.nextUrl.searchParams);
  const connection = await connectDB();

  try {
    let query = `
      SELECT attendance_logs.*, employees.name AS employee_name
      FROM attendance_logs
      INNER JOIN employees ON attendance_logs.employee_id = employees.id
    `;

    if (interval) {
      const currentDate = new Date();
      const startDate = new Date(currentDate);

      switch (interval) {
        case "1": // 1 Days
          startDate.setDate(startDate.getDate() - 1);
          break;
        case "3": // 3 Days
          startDate.setDate(startDate.getDate() - 3);
          break;
        case "7": // 7 Days
          startDate.setDate(startDate.getDate() - 7);
          break;
        case "30": // 30 Days
          startDate.setDate(startDate.getDate() - 30);
          break;
      }

      query += ` WHERE attendance_logs.check_in >= '${startDate.toISOString()}'`;
    }

    // Filter by custom date range
    if (start && end) {
      query += ` WHERE attendance_logs.check_in >= '${start}' AND attendance_logs.check_in <= '${end}'`;
    }

    const [attendanceLogsResult] = await connection.query(query);

    return NextResponse.json({ attendanceLogs: attendanceLogsResult }, { status: 200 });
  } catch (error) {
    console.error("Error fetching attendance logs:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    connection.end();
  }
};
