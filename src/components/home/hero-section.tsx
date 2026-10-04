"use client";

import { ButtonLink } from "./button";
import { containerClasses } from "./layout-classes";

import Heading from "@/components/typography/heading";

import { ArrowDownIcon } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { SparkleIcon } from "@phosphor-icons/react/dist/csr/Sparkle";
import { MusicNotesIcon } from "@phosphor-icons/react/dist/csr/MusicNotes";
import { MoonStarsIcon } from "@phosphor-icons/react/dist/csr/MoonStars";
import Image from "next/image";

const featureClasses = "hero-feature flex flex-row items-center text-left absolute w-36 rounded-lg bg-[#13121dee] shadow-[0_8px_24px_#00000018] lg:w-44 [&_>_svg]:text-[#b4a4cd] [&_>_svg]:shrink-0 [&_>_svg]:w-4 [&_>_svg]:h-4 min-[641px]:[&_>_svg]:w-5 min-[641px]:[&_>_svg]:h-5 [&:nth-child(1)]:left-0 [&:nth-child(1)]:top-[8%] lg:[&:nth-child(1)]:top-[16%] [&:nth-child(2)]:right-0 [&:nth-child(2)]:top-[72%] min-[641px]:[&:nth-child(2)]:top-[64%] lg:[&:nth-child(2)]:top-[58%] [&:nth-child(3)]:left-4 [&:nth-child(3)]:bottom-8 min-[641px]:[&:nth-child(3)]:left-0 min-[641px]:[&:nth-child(3)]:bottom-0 lg:[&:nth-child(3)]:left-8 lg:[&:nth-child(3)]:bottom-16 p-2 gap-2 border-[#c6b3f018] border lg:p-4";

export default function HeroSection() {
  return (
    <section className="text-left bg-[radial-gradient(ellipse_at_54%_44%,#30204735,transparent_62%)]" aria-labelledby="hero-title">
      <div className={`${containerClasses} grid grid-cols-1 items-center min-h-auto py-8 min-[641px]:grid-cols-[minmax(0,_1.35fr)_minmax(0,_1.15fr)] lg:gap-x-12 lg:min-h-147.5 gap-0 min-[641px]:gap-4`}>
        <div className="hero-copy relative z-2 col-start-1 row-auto self-auto min-[641px]:row-start-1 min-[641px]:self-center">
          <Heading as="h1" variant="hero" id="hero-title" className="max-w-6xl">
            Turn Your Room Into a <span className="text-highlight">Calming Escape</span>
          </Heading>
          <p className="text-base leading-normal text-muted max-w-87.5 font-serif font-normal tracking-normal min-[641px]:max-w-120 m-0">
           Star Galaxy Night Light is a compact projector that fills your room with 16 celestial scenes
            and soothing sound, for a calmer evening.
          </p>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-start gap-4 min-[641px]:mt-10 min-[641px]:gap-6 [&_svg]:shrink-0">
            <ButtonLink className="min-w-[12.1875rem]" href="#shop-add-to-cart" scrollAlign="end">
              Order Now
            </ButtonLink>
            <a className="inline-flex items-center text-[calc(0.6875rem_+_1px)] text-muted font-serif leading-normal min-[641px]:text-[calc(1rem_+_1px)] hover:text-white py-2 px-0 gap-2 min-[641px]:gap-6" href="#scenes">
              Explore the scenes{" "}
              <ArrowDownIcon aria-hidden="true" size={20} weight="bold" />
            </a>
          </div>
        </div>
        <figure className="min-w-0 mt-8 mb-4 relative col-start-1 row-auto min-[641px]:my-0 min-[641px]:col-start-2 min-[641px]:row-start-1">
          <div className="hero-product-visual relative w-full aspect-[1] overflow-visible ml-0 min-[641px]:ml-0 [&:hover_.hero-product-photo]:transform-[scale(1)] min-[641px]:[&:hover_.hero-product-photo]:transform-[scale(1.14)] min-[641px]:motion-reduce:[&:hover_.hero-product-photo]:transform-[scale(1.12)]">
            <Image
              src="/images/projector-on.png"
              alt="White Star Galaxy projector turned on, casting a luminous violet-blue beam upward from its illuminated lens"
              fill
              preload
              sizes="(max-width: 640px) 100vw, 50vw"
              className="hero-product-photo object-contain transform-[scale(1)] origin-[center] [transition:transform_.7s_ease] pointer-events-none [--beam-edge-fade:linear-gradient(to_bottom,_transparent,_#0003_4%,_#0009_8%,_#000_13%),_linear-gradient(to_right,_#000_76%,_#000c_82%,_#0006_90%,_#0001_97%,_transparent)] [-webkit-mask-image:var(--beam-edge-fade)] [mask-image:var(--beam-edge-fade)] [mask-composite:intersect] min-[641px]:transform-[scale(1.12)] min-[641px]:origin-[left_center] motion-reduce:transition-none"
            />
            <div
              className="pointer-events-none absolute inset-0 z-2"
              aria-label="Main product features"
            >
              <div className={featureClasses}>
                <SparkleIcon aria-hidden="true" size={24} weight="duotone" />
                <Heading as="h2" variant="feature">16 celestial scenes</Heading>
              </div>
              <div className={featureClasses}>
                <MusicNotesIcon aria-hidden="true" size={24} weight="duotone" />
                <Heading as="h2" variant="feature">Your own soundtrack</Heading>
              </div>
              <div className={featureClasses}>
                <MoonStarsIcon aria-hidden="true" size={24} weight="duotone" />
                <Heading as="h2" variant="feature">Auto-off sleep timer</Heading>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
