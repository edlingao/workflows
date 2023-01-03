
const guardRoutes = [
  "/users",
  "/",
];

export function isGuarded(urlObj: URL): boolean {
  return guardRoutes.some(url => urlObj.pathname === url);
}

export default guardRoutes;
