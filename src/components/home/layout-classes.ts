// Keep the original inclusive 640px breakpoint and base eight-point spacing scale.
// Tailwind scans these complete strings, so all utilities are emitted at build time.
export const containerClasses =
  "m-auto w-[calc(100%-2rem)] min-[641px]:w-[calc(100%-3rem)] lg:w-[min(1280px,calc(100%-6rem))]";

// Content sections use 80% of the original 64 / 96 / 128px padding per edge:
// 51.2 / 76.8 / 102.4px (3.2 / 4.8 / 6.4rem at the default root size).
// Adjacent sections contribute equally; do not add outer vertical margins.
// Hero, compact benefits strip, and full-bleed scenes have their own framing.
export const sectionClasses = "py-[3.2rem] min-[641px]:py-[4.8rem] lg:py-[6.4rem]";
export const sectionContentGapClasses = "gap-8 min-[641px]:gap-12";
export const sectionRowGapClasses = "gap-16 min-[641px]:gap-24 lg:gap-32";
