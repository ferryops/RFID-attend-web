"use client";
import { useState } from "react";
import Attendance from "./components/attendance";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const menuItems = ["Dashboard", "Attendance", "Reports", "Settings"];

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    setIsMenuOpen(false);
  };

  return (
    <main className="flex h-screen">
      {/* Mobile Menu */}
      <div className="md:hidden">
        <button className="bg-gray-200 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

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
      <div className="md:w-5/6 p-4 max-h-screen">
        <h1 className="text-2xl font-semibold mb-4">{selectedMenu}</h1>
        {selectedMenu === "Attendance" ? <Attendance /> : null}
      </div>
    </main>
  );
};

export default Dashboard;
