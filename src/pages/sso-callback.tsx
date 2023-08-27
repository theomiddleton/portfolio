import type { HandleOAuthCallbackParams } from "@clerk/types"

import SSOCallback from "@/components/auth/sso-callback"
import { Shell } from "@/components/shell"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"

//export const runtime = "edge"

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <Shell layout="auth">
        <Link
          href="/?sso=true"
          className="absolute left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight"
        >
          {/*<Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />*/}
          <span>{siteConfig.name}</span>
        </Link>
      <SSOCallback searchParams={searchParams} />
    </Shell>
  )
}
