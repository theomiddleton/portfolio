import type { MainNavItem } from "@/types"


export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "tm-portfolio-23",
  description:
    "My Portfolio Website",
  url: "https://portfolio-theomiddleton.vercel.app/",
  ogImage: "https://https://portfolio-theomiddleton.vercel.app/opengraph-image.png",
  mainNav: [
    {
      title: "Main",
    },
  ] satisfies MainNavItem[],
  links: {
    twitter: "https://twitter.com/thisistheom_",
    github: "https://github.com/theomiddleton/portfolio",
  },
}
