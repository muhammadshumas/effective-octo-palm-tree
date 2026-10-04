"use client";

import Button from "./button";
import { containerClasses, sectionClasses } from "./layout-classes";

import Heading from "@/components/typography/heading";

import Image from "next/image";
import { product } from "@/lib/product";

const features = [
  { title: ["16 scenes, swapped by card"], description: "From moonlight to distant nebulae, explore 16 interchangeable scenes. Swap a card and see your room in a whole new light.", image: product.images.galaxy, alt: "Violet and blue nebula filled with stars, illustrating the celestial projection scenes" },
  { title: ["Play your music.", "or built-in sounds"], description: "Pair your phone over Bluetooth to play your own playlist, or choose built-in soundscapes like rain, ocean waves, and gentle ambient sounds.", image: product.images.sound, alt: "Galaxy projector beside a cozy lounge chair, creating a relaxed setting for an evening playlist" },
  { title: ["Set a sleep timer"], description: "Choose 1, 2, or 4 hours. The projector turns off the lights and sound automatically, so you can fall asleep without getting up.", image: product.images.hero, alt: "Bed beneath a star-filled ceiling with the projector on the nightstand, illustrating the bedtime timer feature" },
];

const benefitClasses = "flex items-center text-sm text-[#c6b4ec] mt-6 mb-0 w-fit underline underline-offset-[5px] leading-normal md:mt-8 hover:text-foreground focus-visible:[outline:2px_solid_#c6b4ec] focus-visible:outline-offset-4 py-2 px-0 mx-0 gap-4";

export default function ExperienceSection({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  return (
    <section id="experience" className={`${containerClasses} ${sectionClasses}`} aria-labelledby="experience-title">

      <div className="grid gap-16 md:gap-24">
        {features.map((feature) => (
          <article className="group grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12 lg:gap-24" key={feature.image}>
            <div className="col-start-1 row-start-2 max-w-none p-0 md:col-auto md:row-auto md:max-w-105 md:py-6 md:group-even:col-start-2 md:group-even:row-start-1">
              <Heading as="h3" variant="experience">{feature.title[0]}<br />{feature.title[1]}</Heading>
              <p className="font-serif text-base leading-[1.75] text-muted max-w-[36ch] m-0">{feature.description}</p>
              {feature.image === product.images.galaxy && (
                <a className={benefitClasses} href="#scenes">Explore all 16 scenes <span aria-hidden="true">↗</span></a>
              )}
              {feature.image === product.images.sound && (
                <a className={benefitClasses} href="#setup">See how to get started <span aria-hidden="true">↗</span></a>
              )}
              {feature.image === product.images.hero && (
                <Button className="mt-8" onClick={onAddToCart}>
                  Order Now
                </Button>
              )}
            </div>
            <div className="relative col-start-1 row-start-1 aspect-[1.2] overflow-hidden bg-[#151422] [clip-path:polygon(0_0,88%_0,100%_12%,100%_100%,12%_100%,0_88%)] md:col-auto md:row-auto md:aspect-[1.1] md:group-even:col-start-1 md:group-even:row-start-1">
              <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

