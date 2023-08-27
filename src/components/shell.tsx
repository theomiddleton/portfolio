import * as React from "react"

import { cn } from "@/lib/utils"

interface ShellProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode
  layout?: "default" | "dashboard" | "auth"
}

export function Shell({
  children,
  layout = "default",
  className,
  ...props
}: ShellProps) {
  return (
    <section
      className={cn(
        "grid items-center justify-center min-h-screen bg-background",
        {/*gap-6 pb-8 pt-6 md:py-8*/},
        layout === "default" && "container",
        layout === "auth" && "container  ",
        {/*max-w-lg*/},
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
