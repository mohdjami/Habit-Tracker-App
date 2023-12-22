import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Habit-Tracker",
  author: "mohdjami",
  description:
    "Track daily habits and monitor your progress with little effort.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Habits",
    "Activity",
    "Track",
    "Monitor",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://github.com/mohdjami",
  },
  links: {
    github: "https://github.com/mohdjami/Habit-Tracker",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
