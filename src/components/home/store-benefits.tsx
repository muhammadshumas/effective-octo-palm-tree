"use client";

import { containerClasses } from "./layout-classes";

import { TruckIcon } from "@phosphor-icons/react/dist/csr/Truck";
import { CreditCardIcon } from "@phosphor-icons/react/dist/csr/CreditCard";
import { ArrowsClockwiseIcon } from "@phosphor-icons/react/dist/csr/ArrowsClockwise";
import { HeadsetIcon } from "@phosphor-icons/react/dist/csr/Headset";

const benefitClasses = "flex items-start w-full bg-transparent text-foreground [font:inherit] text-left no-underline flex-col min-[480px]:items-center min-[480px]:flex-row [&:is(button)]:cursor-pointer [&:is(a)]:cursor-pointer [&:is(button):hover_strong]:text-highlight [&:is(a):hover_strong]:text-highlight focus-visible:[outline:2px_solid_var(--color-highlight)] focus-visible:outline-offset-6 focus-visible:rounded p-0 gap-2 border-0 min-[480px]:gap-4";

export default function StoreBenefits({
  onOpenPolicy,
}: {
  onOpenPolicy: (policy: string) => void;
}) {
  return (
    <section className={`${containerClasses}`} aria-label="Shopping information">
      <ul className="grid grid-cols-2 gap-y-6 gap-x-4 list-none border-t border-t-line border-b border-b-line lg:grid-cols-4 [&_li]:min-w-0 m-0 py-6 px-0 min-[480px]:py-8 min-[480px]:gap-8 lg:gap-6">
        <li>
          <button type="button" className={benefitClasses} onClick={() => onOpenPolicy("Shipping")}>
            <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#c6b3f00d] text-highlight min-[480px]:w-14 min-[480px]:h-14 border-[#c6b3f020] border"><TruckIcon size={26} weight="duotone" aria-hidden="true" /></span>
            <span className="grid [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:leading-[1.35] [&_>_span]:text-xs [&_>_span]:leading-normal [&_>_span]:text-muted gap-2"><strong>Free Shipping</strong><span>On orders over $50</span></span>
          </button>
        </li>
        <li>
          <div className={benefitClasses}>
            <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#c6b3f00d] text-highlight min-[480px]:w-14 min-[480px]:h-14 border-[#c6b3f020] border"><CreditCardIcon size={26} weight="duotone" aria-hidden="true" /></span>
            <span className="grid [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:leading-[1.35] [&_>_span]:text-xs [&_>_span]:leading-normal [&_>_span]:text-muted gap-2"><strong>Secure Payment</strong><span>100% secure payment</span></span>
          </div>
        </li>
        <li>
          <button type="button" className={benefitClasses} onClick={() => onOpenPolicy("Returns")}>
            <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#c6b3f00d] text-highlight min-[480px]:w-14 min-[480px]:h-14 border-[#c6b3f020] border"><ArrowsClockwiseIcon size={26} weight="duotone" aria-hidden="true" /></span>
            <span className="grid [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:leading-[1.35] [&_>_span]:text-xs [&_>_span]:leading-normal [&_>_span]:text-muted gap-2"><strong>Easy Returns</strong><span>30-day return policy</span></span>
          </button>
        </li>
        <li>
          <a className={benefitClasses} href="#faq">
            <span className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#c6b3f00d] text-highlight min-[480px]:w-14 min-[480px]:h-14 border-[#c6b3f020] border"><HeadsetIcon size={26} weight="duotone" aria-hidden="true" /></span>
            <span className="grid [&_strong]:text-sm [&_strong]:font-semibold [&_strong]:leading-[1.35] [&_>_span]:text-xs [&_>_span]:leading-normal [&_>_span]:text-muted gap-2"><strong>24/7 Support</strong><span>Dedicated support</span></span>
          </a>
        </li>
      </ul>
    </section>
  );
}

