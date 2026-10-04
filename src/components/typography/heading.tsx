import type { ComponentPropsWithRef } from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingVariant =
  | "hero"
  | "section"
  | "feature"
  | "experience"
  | "scene"
  | "step"
  | "product"
  | "testimonial"
  | "dialog"
  | "cart"
  | "empty"
  | "cta";

export type HeadingProps = ComponentPropsWithRef<"h2"> & {
  /** Semantic heading level, independent of its visual style. */
  as?: HeadingTag;
  variant?: HeadingVariant;
};

const variantClasses: Record<HeadingVariant, string> = {
  "section": "text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.05em] min-[641px]:text-[clamp(2.375rem,_4.6vw,_4rem)]",
  "dialog": "text-3xl font-semibold leading-[1.1] tracking-[-0.05em]",
  "cta": "text-[3.0625rem] font-semibold leading-[1.1] tracking-[-0.05em] mb-8 min-[641px]:text-[clamp(2.8125rem,_6vw,_5.3125rem)]",
  "hero": "text-[clamp(2.6875rem,_10.8vw,_4rem)] font-[650] leading-none tracking-[-0.02em] mb-8 min-[641px]:text-[clamp(2.625rem,_5.5vw,_3.625rem)] lg:text-[clamp(2.625rem,_4.4vw,_4.125rem)]",
  "feature": "text-[0.6875rem] font-medium leading-[1.1] tracking-normal lg:text-[0.8125rem]",
  "experience": "text-[clamp(2rem,_3.5vw,_3.25rem)] font-semibold leading-[1.12] tracking-[-0.035em] mb-4 md:mb-6",
  "scene": "text-white text-[clamp(1.75rem,_6vw,_2.5rem)] font-semibold leading-[1.15] tracking-[-0.035em] max-w-[22ch] md:text-[clamp(2rem,_4vw,_3.75rem)] md:leading-[1.1]",
  "step": "tracking-[-0.015em] text-2xl font-semibold mt-6 mb-4 leading-[1.5] min-[641px]:text-[1.6875rem] mx-0",
  "product": "tracking-[-0.015em] text-base font-semibold mt-8 mb-4 leading-[1.5] mx-0",
  "cart": "tracking-[-0.015em] text-base mb-2 leading-[1.5]",
  "empty": "tracking-[-0.015em] text-[1.375rem] font-normal leading-[1.5]",
  "testimonial": "tracking-[-0.015em] text-lg font-bold leading-[1.4] text-center mt-4"
};

export default function Heading({
  as: Tag = "h2",
  variant = "section",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={["font-sans text-inherit m-0", variantClasses[variant], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}

