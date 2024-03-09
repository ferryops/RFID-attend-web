// utils/checkoutAttendance.ts
export function isAfterCheckoutTime(checkoutTime: Date): boolean {
  const checkoutHourUTC8 = 16;
  const checkoutMinutesUTC8 = 30;
  const checkoutTimeLocal = new Date(checkoutTime);
  const checkoutTimeUTC8 = new Date(
    checkoutTimeLocal.getTime() + checkoutTimeLocal.getTimezoneOffset() * 60000 // Konversi ke waktu UTC
  );
  checkoutTimeUTC8.setUTCHours(checkoutHourUTC8);
  checkoutTimeUTC8.setUTCMinutes(checkoutMinutesUTC8);
  checkoutTimeUTC8.setUTCSeconds(0);
  checkoutTimeUTC8.setUTCMilliseconds(0);

  return checkoutTime.getTime() >= checkoutTimeUTC8.getTime();
}
