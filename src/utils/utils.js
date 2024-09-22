export function getCompleteCalendar(year, month) {
  // Get the first day of the current month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Get the total number of days in the previous month
  const prevMonthLastDate = new Date(year, month, 0).getDate(); // 0th day gives the last day of the previous month

  // Get the total number of days in the current month
  const currentMonthLastDate = new Date(year, month + 1, 0).getDate(); // Last day of the current month

  // Get the last day of the current month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const lastDayOfMonth = new Date(year, month, currentMonthLastDate).getDay();

  let days = [];

  // Add the last few days of the previous month to the array
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push(prevMonthLastDate - i);
  }

  // Add all the days of the current month to the array
  for (let i = 1; i <= currentMonthLastDate; i++) {
    days.push(i);
  }

  // Add the first few days of the next month to complete the rows of 7
  const nextMonthStartDayCount = 6 - lastDayOfMonth; // Number of days needed to complete the last row
  for (let i = 1; i <= nextMonthStartDayCount; i++) {
    days.push(i);
  }

  return days;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const products = [
  "Netflix",
  "Amazon",
  "ChatGPT",
  "Paramount+",
  "Disney+",
  "Spotify",
  "X",
];

export function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export function getRandomDateInMonth(year, month) {
  // Get the last day of the month by creating a date for the 0th day of the next month
  const lastDay = new Date(year, month + 1, 0).getDate(); // 0th day gives the last day of the previous month

  // Generate a random day between 1 and the last day of the month
  const randomDay = Math.floor(Math.random() * lastDay) + 1;

  // Return the random date
  return new Date(year, month, randomDay);
}

export function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return day + "th"; // Special case for 11th, 12th, 13th
  }
  switch (day % 10) {
    case 1:
      return day + "st";
    case 2:
      return day + "nd";
    case 3:
      return day + "rd";
    default:
      return day + "th";
  }
}
