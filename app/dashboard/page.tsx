"use client";
import { useEffect, useState } from "react";
import DashboardMenu from "./components/dashboardMenu";
import AttendanceMenu from "./components/table";
import About from "./components/about";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [attendanceLogs, setAttendanceLogs] = useState([]);

  const menuItems = ["Dashboard", "Attendance", "About"];

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setIsMenuOpen(false);
  };

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
    <main className="flex h-screen">
      {/* Left Menu (Hidden by default on mobile) */}
      <div className={`w-1/4 md:w-1/6 bg-gray-200 ${isMenuOpen ? "block" : "hidden md:block"}`}>
        <h2 className="text-lg font-semibold p-2">Menu</h2>
        <ul>
          {menuItems.map((menuItem) => (
            <li
              key={menuItem}
              className={`cursor-pointer p-2 ${selectedMenu === menuItem ? "bg-blue-500 text-white" : ""}`}
              onClick={() => handleMenuClick(menuItem)}
            >
              {menuItem}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="md:w-5/6 w-full p-4 max-h-screen bg-gray-300 overflow-y-auto">
        <div className="flex items-center gap-2">
          {isMenuOpen ? null : (
            <button className="border p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ▶️
            </button>
          )}
          <h1 className="text-2xl font-semibold">{selectedMenu}</h1>
        </div>
        {selectedMenu === "Dashboard" ? <DashboardMenu /> : null}
        {selectedMenu === "Attendance" ? <AttendanceMenu attendanceLogs={attendanceLogs} /> : null}
        {selectedMenu === "About" ? <About /> : null}
      </div>
    </main>
  );
};

export default Dashboard;
