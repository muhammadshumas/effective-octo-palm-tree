"use client";

import Button from "./button";
import { containerClasses, sectionClasses } from "./layout-classes";

import Heading from "@/components/typography/heading";

import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import Photo from "./photo";
import { product, money } from "@/lib/product";

export default function ShopSection({
  onAddToCart,
}: {
  onAddToCart: () => void;
}) {
  return (
    <section id="shop" className={`${containerClasses} ${sectionClasses} grid grid-cols-1 items-center min-[641px]:grid-cols-[1fr_1fr] gap-8 lg:gap-24`}>
      <div data-scroll-reveal className="relative h-100 rounded-[9px] overflow-hidden min-[641px]:h-142.5 lg:h-165 group">
        <Photo
          src={product.images.studio}
          alt="Illustrative white spherical projector with black lens and adjustable cradle"
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div data-scroll-reveal="fade">
        <Heading as="h2" variant="section" className="mb-6 text-[2.125rem]! min-[641px]:text-[clamp(2.01875rem,_3.91vw,_3.4rem)]!">
          {product.name}
        </Heading>
        <div className="flex items-baseline gap-3 text-[1.9375rem] tracking-[-0.04em] leading-normal">
          <span className="sr-only">Original price</span>
          <s className="text-2xl text-muted">{money(99)}</s>
          <span className="sr-only">Sale price</span>
          <span>{money(product.price)}</span>
        </div>
        <p className="my-6 text-base leading-normal text-muted">{product.description}</p>
        <ul className="mt-6 mb-8 list-none p-0">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-4 py-2 text-base leading-normal text-muted">
              <span aria-hidden="true" className="mt-1 shrink-0 text-[#c5a9f3]"><CheckIcon size="1em" /></span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button id="shop-add-to-cart" fullWidth onClick={onAddToCart} className="justify-center! scroll-mb-8">
          Add to cart 
        </Button>
      </div>
    </section>
  );
}
