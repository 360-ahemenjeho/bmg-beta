/**
 * Formats a due date string into a human-readable label relative to the current date.
 *
 * @param {string} dateStr - An ISO 8601 datetime string (e.g. "2025-02-19T09:00:00").
 * @returns {string} A formatted string:
 *  - `"No date"` if `dateStr` is empty or falsy
 *  - `"Today"` if the date falls on the current calendar day
 *  - `"This Week"` if the date falls within the current Mon–Sun week
 *  - `"This Month"` if the date falls within the current calendar month
 *  - A formatted string like `"12 June 25 2pm"` for all other dates
 *
 * @example
 * formatDueDate("2025-02-19T09:00:00") // → "Today"
 * formatDueDate("2025-02-21T14:00:00") // → "This Week"
 * formatDueDate("2025-03-03T09:00:00") // → "This Month"
 * formatDueDate("2025-09-10T14:00:00") // → "10 September 25 2pm"
 * formatDueDate("")                     // → "No date"
 */
export function formatDueDate(dateStr) {
  if (!dateStr) return "No date";
  const now = new Date();
  const target = new Date(dateStr);
  const todayMs = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const targetMs = new Date(target.getFullYear(), target.getMonth(), target.getDate()).getTime();
  const diffDays = Math.round((targetMs - todayMs) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  startOfWeek.setDate(startOfWeek.getDate() - ((startOfWeek.getDay() + 6) % 7));
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  const targetDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  if (targetDate >= startOfWeek && targetDate <= endOfWeek) return "This Week";
  if (target.getFullYear() === now.getFullYear() && target.getMonth() === now.getMonth())
    return "This Month";
  const day = target.getDate();
  const month = target.toLocaleString("en-GB", { month: "long" });
  const year = String(target.getFullYear()).slice(2);
  const hours = target.getHours();
  const period = hours >= 12 ? "pm" : "am";
  const hour12 = hours % 12 || 12;
  return `${day} ${month} ${year} ${hour12}${period}`;
}
