"use client";
import { ChangeEvent, useEffect, useState } from "react";

export default function Home() {
  const [employeeId, setEmployeeId] = useState("");
  const [isCheckInTime, setIsCheckInTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
      const hours = new Date(currentTime).getHours();
      const isCheckInHour = hours >= 4 && hours < 16;

      setIsCheckInTime(isCheckInHour);
    }, 60000); // Periksa setiap menit

    return () => clearInterval(interval);
  }, []);

  const handleAction = async () => {
    if (isCheckInTime) {
      await handleCheckIn();
    } else {
      await handleCheckout();
    }
  };

  const handleCheckIn = async () => {
    const checkInData = {
      employee_id: employeeId,
      check_in: new Date().toISOString(),
    };

    try {
      const response = await fetch("api/checkin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkInData),
      });

      if (response.ok) {
        console.log("Check-in successful!");
      } else {
        console.error("Failed to check-in:", response.statusText);
        alert(response.statusText);
        console.log({ response });
      }
    } catch (error) {
      console.error("Error checking in:", error);
    }
  };

  const handleCheckout = async () => {
    const checkoutData = {
      employee_id: employeeId,
      check_out: new Date().toISOString(),
    };

    try {
      const response = await fetch("api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Check-out successful!");
        alert(responseData.message);
      } else {
        const responseData = await response.json();
        console.error("Failed to check-out:", response.statusText);
        alert(responseData.message);
      }
    } catch (error) {
      console.error("Error checking out:", error);
      alert(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-2">
      <input type="text" placeholder="Input your ID" className="border p-2" value={employeeId} onChange={handleChange} />
      <button
        onClick={handleAction}
        className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br ${isCheckInTime ? "" : "bg-red-500"}`}
      >
        {isCheckInTime ? "Check In" : "Checkout"}
      </button>
    </main>
  );
}
