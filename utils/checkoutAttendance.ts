export function isAfterCheckoutTime(checkoutTime: Date): boolean {
  const now = new Date();

  // Memecah tanggal checkout dan tanggal saat ini
  const checkoutDate = checkoutTime.getDate();
  const checkoutMonth = checkoutTime.getMonth();
  const checkoutYear = checkoutTime.getFullYear();

  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  if (checkoutDate === currentDate && checkoutMonth === currentMonth && checkoutYear === currentYear) {
    const checkoutHour = checkoutTime.getHours();
    const checkoutMinute = checkoutTime.getMinutes();
    return checkoutHour > 16 || (checkoutHour === 16 && checkoutMinute >= 30);
  }

  return false;
}
