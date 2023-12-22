import Link from "next/link"

import { navLinks } from "@/config/links"
import { siteConfig } from "@/config/site"

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <h1 className="mb-2 text-2xl font-bold sm:mb-0">
              {siteConfig.name}
            </h1>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center opacity-60 sm:mb-0">
            {navLinks.data.map((item, index) => {
              return (
                item.href && (
                  <li key={index}>
                    <Link
                      href={item.disabled ? "/" : item.href}
                      className="mr-4 hover:underline md:mr-6"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              )
            })}
          </ul>
        </div>
        <hr className="my-6 text-muted-foreground sm:mx-auto" />
        <div className="flex items-center justify-center">
          <div className="block text-sm text-muted-foreground sm:text-center">
            <a
              target="_blank"
              href="https://github.com/mohdjami/Habit-Tracker"
              className="hover:underline"
            >
              Habit Tracker App
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
