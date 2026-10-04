import type { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  fullWidth?: boolean;
};

/** Shared storefront CTA. Styling stays in Tailwind, including responsive sizing. */
export default function Button({
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-12 items-center gap-8 rounded-[5px] border border-transparent bg-[#eee8fc] px-4 py-0 font-serif text-[calc(1rem+1px)] leading-normal font-medium text-[#171121] hover:bg-white min-[641px]:min-h-12.25 min-[641px]:px-6 [&>svg]:text-lg [&>svg]:leading-normal [&>svg]:font-medium [&_span]:text-lg [&_span]:leading-normal [&_span]:font-medium ${fullWidth ? "w-full justify-between" : "justify-center"} ${className}`}
      {...props}
    />
  );
}
