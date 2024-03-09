import { useEffect, useRef } from "react";
import Chart, { ChartOptions } from "chart.js/auto";

interface AttendanceLog {
  id: number;
  employee_id: number;
  check_in: string;
  check_out: string | null;
  is_late: number;
  employee_name: string;
}

interface Props {
  attendanceLogs: AttendanceLog[];
}

const AttendancePieChart: React.FC<Props> = ({ attendanceLogs }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current;
    const data = {
      labels: ["Tepat Waktu", "Terlambat"],
      datasets: [
        {
          label: "Karyawan",
          data: [
            attendanceLogs.filter((log) => log.is_late === 0).length,
            attendanceLogs.filter((log) => log.is_late === 1).length,
          ],
          backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const options: ChartOptions<"pie"> = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Kehadiran Karyawan",
        },
      },
    };

    chartInstance.current = new Chart(ctx, {
      type: "pie",
      data: data,
      options: options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current!.destroy();
      }
    };
  }, [attendanceLogs]);

  return (
    <div className="max-h-[50vh] flex justify-center w-full">
      <canvas ref={chartRef} id="attendancePieChart"></canvas>
    </div>
  );
};

export default AttendancePieChart;
