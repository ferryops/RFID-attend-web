// app/api/employees/route.ts
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, position, department, rfid_tag } = await req.json();
  const connection = await connectDB();

  try {
    const [result] = await connection.query("INSERT INTO employees (name, position, department, rfid_tag) VALUES (?, ?, ?, ?)", [
      name,
      position,
      department,
      rfid_tag,
    ]);

    if (result && "affectedRows" in result && result.affectedRows === 1) {
      return NextResponse.json({ message: "Employee created successfully" }, { status: 201 });
    } else {
      return NextResponse.json({ message: "Failed to create employee" }, { status: 500 });
    }
  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    connection.end();
  }
}
