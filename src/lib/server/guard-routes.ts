
const guardRoutes = [
  "/users"
];

export function isGuarded(urlObj: URL): boolean {
  return guardRoutes.some(url => urlObj.pathname.endsWith(url));
}

export default guardRoutes;
