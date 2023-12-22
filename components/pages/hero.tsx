import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ImageFrame } from "@/components/image-frame"

interface HeroHeaderProps {
  title: string
}
export default function HeroHeader(props: HeroHeaderProps) {
  return (
    <>
      <section className="space-y-8 pb-12 pt-4 md:space-y-16 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.github}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            View Codebase On my Github
          </Link>
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
            Build your habits.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Monitor your activities, streaks, and progress with little effort.
            Integrate statistics to your life!
          </p>
          <div className="space-x-4">
            <Link href="/signin" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/hero-img.png"
              width={1364}
              height={866}
              quality={100}
              alt="Header image"
            />
          </ImageFrame>
        </div>
      </section>
    </>
  )
}
