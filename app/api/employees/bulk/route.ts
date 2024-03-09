// app/api/employees/bulk.ts
import { connectDB } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const employees = await req.json();
  const connection = await connectDB();

  try {
    // Begin a transaction
    await connection.beginTransaction();

    // Loop through the array of employees and insert each one into the database
    for (const employee of employees) {
      const { name, position, department, rfid_tag } = employee;
      await connection.query("INSERT INTO employees (name, position, department, rfid_tag) VALUES (?, ?, ?, ?)", [
        name,
        position,
        department,
        rfid_tag,
      ]);
    }

    // Commit the transaction if all insertions are successful
    await connection.commit();

    return NextResponse.json({ message: "Employees created successfully" }, { status: 201 });
  } catch (error) {
    // Rollback the transaction if any error occurs
    await connection.rollback();

    console.error("Error creating employees:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    connection.end();
  }
}
