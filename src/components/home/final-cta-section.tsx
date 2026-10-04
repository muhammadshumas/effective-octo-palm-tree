"use client";

import Button from "./button";
import { containerClasses, sectionClasses } from "./layout-classes";

import Heading from "@/components/typography/heading";

import Arrow from "./arrow";

export default function FinalCtaSection({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  return (
    <section className={`${containerClasses} ${sectionClasses} text-center border-t border-t-line bg-transparent bg-[radial-gradient(ellipse_at_50%_55%,_#30213b35,_transparent_70%)] px-0`}>
      <Heading data-scroll-reveal as="h2" variant="cta">
        Meet you
        <br />
        <span className="text-highlight">under the stars.</span>
      </Heading>
      <Button data-scroll-reveal onClick={onAddToCart}>
        Bring the galaxy home
      </Button>
    </section>
  );
}
