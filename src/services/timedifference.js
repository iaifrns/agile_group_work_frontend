export const timeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);

  const seconds = Math.floor((now - past) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;

  // fallback (date format)
  return past.toLocaleDateString();
};