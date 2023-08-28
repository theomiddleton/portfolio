import { authMiddleware } from "@clerk/nextjs/server"

export default authMiddleware({
  publicRoutes: [
    "/",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/404(.*)",
    "/500(.*)",
    "/admin(.*)",
    "/admin/new(.*)",

  ],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
