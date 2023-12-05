import { parseCookies } from "nookies"

export const checkIsAuthenticated = () => {
  const user = parseCookies()?.user
  return user ? true : false
 }