import React, { useState } from "react";

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
const AttendanceMenu: React.FC<Props> = ({ attendanceLogs }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee ID
            </th>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employee Name
            </th>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Check In
            </th>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Check Out
            </th>
            <th scope="col" className="p-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Is Late
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {attendanceLogs.map((log) => (
            <tr key={log.id}>
              <td className="p-2 whitespace-nowrap">{log.id}</td>
              <td className="p-2 whitespace-nowrap">{log.employee_id}</td>
              <td className="p-2 whitespace-nowrap">{log.employee_name}</td>
              <td className="p-2 whitespace-nowrap">{new Date(log.check_in).toLocaleString()}</td>
              <td className="p-2 whitespace-nowrap">{log.check_out ? new Date(log.check_out).toLocaleString() : "-"}</td>
              <td className="p-2 whitespace-nowrap">{log.is_late === 1 ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex gap-2 items-center py-2 justify-end">
        <label className="text-sm">Rows per page:</label>
        <select
          className="px-2 py-1 border rounded-md text-xs"
          value={rowsPerPage}
          onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default AttendanceMenu;
