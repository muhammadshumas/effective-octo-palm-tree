import type { ComponentPropsWithRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  fullWidth?: boolean;
};

function buttonClasses(fullWidth: boolean, className: string) {
  return `inline-flex min-h-12 items-center gap-8 rounded-[5px] border border-transparent bg-[#eee8fc] px-4 py-0 font-serif text-[calc(1rem+1px)] leading-normal font-medium text-[#171121] hover:bg-white min-[641px]:min-h-12.25 min-[641px]:px-6 [&>svg]:text-lg [&>svg]:leading-normal [&>svg]:font-medium [&_span]:text-lg [&_span]:leading-normal [&_span]:font-medium ${fullWidth ? "w-full justify-between" : "justify-center"} ${className}`;
}

/** Navigation CTA with the same appearance as the storefront buttons. */
export function ButtonLink({
  className = "",
  scrollAlign,
  href,
  onClick,
  ...props
}: ComponentPropsWithRef<"a"> & { scrollAlign?: ScrollLogicalPosition }) {
  return (
    <a
      className={buttonClasses(false, className)}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !scrollAlign || !href?.startsWith("#") || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        target.focus({ preventScroll: true });
        // Global scroll-behavior supplies smooth scrolling and reduced-motion handling.
        target.scrollIntoView({ block: scrollAlign, behavior: "auto" });
      }}
      {...props}
    />
  );
}

/** Shared storefront CTA. Styling stays in Tailwind, including responsive sizing. */
export default function Button({
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(fullWidth, className)}
      {...props}
    />
  );
}
