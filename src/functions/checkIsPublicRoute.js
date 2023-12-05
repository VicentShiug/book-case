import { APP_ROUTES } from "@/constants/app-routes"

export const checkIsPublicRoute = (pathname) => {
  const isPublicRoute = Object.values(APP_ROUTES.public)
  return isPublicRoute.includes(pathname)
 }