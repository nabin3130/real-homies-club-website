const seoulDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
});

// Pass a server-verified confirmation timestamp for future real orders.
// Preview callers use the server's current timestamp; never browser/query time.
export function getPublicationDate(confirmedAt: Date): string {
  const parts = seoulDate.formatToParts(confirmedAt);
  const value = (type: string) => Number(parts.find(part => part.type === type)?.value);
  const date = new Date(Date.UTC(value("year"), value("month") - 1, value("day")));
  const daysSinceMonday = (date.getUTCDay() + 6) % 7;
  date.setUTCDate(date.getUTCDate() - daysSinceMonday + 9);
  return date.toISOString().slice(0, 10);
}

export function formatPublicationDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul", weekday: "long", year: "numeric", month: "long", day: "numeric",
  }).format(new Date(`${date}T00:00:00+09:00`));
}
