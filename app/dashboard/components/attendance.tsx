import AttendancePieChart from "@/components/attendancePieChart";
import { useState, useEffect } from "react";

const Attendance = () => {
  const [attendanceLogs, setAttendanceLogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/attendance");
        const data = await response.json();
        setAttendanceLogs(data.attendanceLogs);
      } catch (error) {
        console.error("Error fetching attendance logs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AttendancePieChart attendanceLogs={attendanceLogs} />
    </>
  );
};

export default Attendance;
