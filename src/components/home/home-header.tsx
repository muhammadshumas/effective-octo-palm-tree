"use client";

import { containerClasses } from "./layout-classes";

import { useState } from "react";
import { ShoppingBagIcon } from "@phosphor-icons/react/dist/csr/ShoppingBag";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";

export default function HomeHeader({
  quantity,
  onOpenCart,
}: {
  quantity: number;
  onOpenCart: () => void;
}) {
  const [menu, setMenu] = useState(false);
  return (
    <header className={`${containerClasses} h-18.75 flex items-center justify-between relative z-10 min-[641px]:h-23.5`}>
      <a href="#" className="flex items-center text-xl font-[650] tracking-[-1px] whitespace-nowrap leading-normal min-[641px]:text-[1.4375rem]" aria-label="Star Galaxy home">
        <span className="text-[1.75rem] text-[#c5adf7] mr-2 font-normal leading-normal min-[641px]:text-[2.1875rem]">✳</span> star galaxy
        <span className="text-[#c5adf7]">.</span>
      </a>
      <nav
        className={`flex gap-4 [&_a]:font-sans text-base leading-normal text-[#c4c2d1] lg:gap-8 [&_a:hover]:text-white max-[641px]:absolute max-[641px]:inset-x-0 max-[641px]:top-16 max-[641px]:flex-col max-[641px]:rounded-md max-[641px]:border max-[641px]:border-line max-[641px]:bg-[#161321] max-[641px]:p-6 ${menu ? "max-[641px]:flex" : "max-[641px]:hidden"}`}
        aria-label="Main navigation"
      >
        <a onClick={() => setMenu(false)} href="#experience">
          The experience
        </a>
        <a onClick={() => setMenu(false)} href="#scenes">
          Explore the galaxies
        </a>
        <a onClick={() => setMenu(false)} href="#faq">
          FAQs
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button
          className="relative flex size-11 items-center justify-center border-0 bg-transparent text-base leading-normal focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-highlight focus-visible:outline-offset-4 [&>svg]:shrink-0"
          onClick={onOpenCart}
          aria-label={`Open bag, ${quantity} items`}
        >
          <ShoppingBagIcon aria-hidden="true" size={28} weight="regular" />
          <span className="absolute top-0 -right-0.5 grid h-5 min-w-5 place-items-center rounded-full border-2 border-background bg-highlight px-1 py-0 font-sans text-[0.625rem] leading-none font-[650] text-background" aria-hidden="true">{quantity}</span>
        </button>
        <button
          className="block bg-transparent min-[641px]:hidden border-0"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <ListIcon aria-hidden="true" size="1em" />
        </button>
      </div>
    </header>
  );
}
