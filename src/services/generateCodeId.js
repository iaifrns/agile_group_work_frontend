export function stringTo6Code(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }

  return hash.toString(36).substring(0, 6).padStart(6, '0');
}