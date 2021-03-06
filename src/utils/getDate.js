/**
 * Helper that gets the current date and time to format them as string.
 * @returns A string with the date and current time in format DDMMAA-HH-MM
 */
function getDate() {
  const now = new Date();
  const year = now
    .getFullYear()
    .toString()
    .slice(2);
  const month = (now.getMonth() + 1).toString().padStart(2, 0);
  const day = now
    .getDate()
    .toString()
    .padStart(2, 0);
  const hours = now
    .getHours()
    .toString()
    .padStart(2, 0);
  const minutes = now
    .getMinutes()
    .toString()
    .padStart(2, 0);

  return `${day}${month}${year}-${hours}-${minutes}`;
}

module.exports = getDate;
