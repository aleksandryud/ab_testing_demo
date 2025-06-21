// Simple cookie utility functions
export function setCookie(name, value, days) {
  const expires = days
    ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
    : "";
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

export function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}
