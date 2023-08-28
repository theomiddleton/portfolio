import { authMiddleware } from "@clerk/nextjs/server"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/404(.*)",
    "/500(.*)",

  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
