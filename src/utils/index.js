export function createPageUrl(page) {
  const map = {
    Home: "/",
    BookCall: "/bookcall",
    Connect: "/connect",
    Projects: "/projects",
    Links: "/links",
    Uses: "/uses",
    Attribution: "/attribution",
  };
  return map[page] || "/";
}
