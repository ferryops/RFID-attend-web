// utils/timeAttendance.ts
export function isLate(checkInTime: Date): boolean {
  const workStartTime = new Date(checkInTime);
  workStartTime.setUTCHours(1); // Jam 8 pagi UTC+8
  workStartTime.setUTCMinutes(0);
  workStartTime.setUTCSeconds(0);

  return checkInTime > workStartTime ? true : false;
}
