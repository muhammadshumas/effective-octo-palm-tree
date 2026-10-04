// Keep the original inclusive 640px breakpoint and eight-point spacing scale.
// Tailwind scans these complete strings, so all utilities are emitted at build time.
export const containerClasses =
  "m-auto w-[calc(100%-2rem)] min-[641px]:w-[calc(100%-3rem)] lg:w-[min(1280px,calc(100%-6rem))]";

export const sectionClasses = "py-16 min-[641px]:py-24 lg:py-32";
