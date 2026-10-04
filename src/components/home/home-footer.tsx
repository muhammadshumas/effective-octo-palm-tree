"use client";

import { containerClasses } from "./layout-classes";

export default function HomeFooter({
  onOpenPolicy,
}: {
  onOpenPolicy: (policy: string) => void;
}) {
  return (
    <footer className={`${containerClasses} `}>
      <div className="border-t border-t-line flex items-center justify-between flex-wrap min-[641px]:flex-nowrap [&_p]:text-[0.6875rem] [&_p]:text-muted [&_p]:leading-normal min-[641px]:[&_p]:text-base [&_>_div]:flex [&_>_div]:w-full min-[641px]:[&>div]:w-auto [&_button]:text-[calc(0.6875rem_+_1px)] [&_button]:bg-transparent [&_button]:text-[#c2b9ce] [&_button]:leading-normal py-8 px-0 gap-4 min-[641px]:gap-0 [&_>_div]:gap-6 [&_button]:border-0">
        <a href="#" className="flex items-center text-xl font-[650] tracking-[-1px] whitespace-nowrap leading-normal min-[641px]:text-[1.4375rem]">
          <span className="text-[1.75rem] text-[#c5adf7] mr-2 font-normal leading-normal min-[641px]:text-[2.1875rem]">✳</span> star galaxy.
        </a>
        <p>A little wonder goes a long way.</p>
        <div>
          {["Shipping", "Returns", "Privacy"].map((p) => (
            <button key={p} onClick={() => onOpenPolicy(p)}>
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-4 pb-8 flex justify-between border-t border-t-line text-[0.6875rem] text-muted flex-col flex-wrap leading-normal min-[641px]:flex-row min-[641px]:flex-nowrap px-0 gap-2 min-[641px]:gap-0">
        <span>© {new Date().getFullYear()} Star Galaxy</span>
        <span>Concept storefront · Generated imagery · Sample stories</span>
      </div>
    </footer>
  );
}
