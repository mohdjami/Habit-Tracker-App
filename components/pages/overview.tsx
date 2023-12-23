import Image from "next/image"

import HeadingText from "@/components/heading-text"
import { ImageFrame } from "@/components/image-frame"

export default function Overview(props) {
  return (
    <section className="container py-12 lg:py-20" id="overview">
      <div className="flex flex-col gap-8 text-center">
        <HeadingText subtext="Get started with the app">
          Discover what you can do
        </HeadingText>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/activities.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/logging.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/dashboard.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/activity-stats.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/log-history.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
          <ImageFrame>
            <Image
              className="rounded-lg"
              src="/images/personalize.png"
              width="1280"
              height="720"
              alt="Showcase image"
            />
          </ImageFrame>
        </div>
      </div>
    </section>
  )
}
