"use client";

import Button from "./button";
import { containerClasses } from "./layout-classes";

import Heading from "@/components/typography/heading";

import Arrow from "./arrow";

export default function FinalCtaSection({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  return (
    <section className={`${containerClasses} text-center border-t border-t-line bg-transparent bg-[radial-gradient(ellipse_at_50%_55%,_#30213b35,_transparent_70%)] min-[641px]:pt-24 min-[641px]:pb-32 py-16 px-0`}>
      <Heading as="h2" variant="cta">
        Meet you
        <br />
        <span className="text-highlight">under the stars.</span>
      </Heading>
      <Button  onClick={onAddToCart}>
        Bring the galaxy home <Arrow />
      </Button>
    </section>
  );
}
