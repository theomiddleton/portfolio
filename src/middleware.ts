import { authMiddleware } from "@clerk/nextjs/server"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
