import { containerClasses, sectionClasses } from "./layout-classes";

export default function ManifestoSection() {
  return (
    <section className={`${containerClasses} ${sectionClasses} manifesto text-center max-w-250 [&_>_p]:text-4xl [&_>_p]:tracking-normal [&_>_p]:leading-normal [&_>_p]:font-normal [&_>_p]:font-serif min-[641px]:[&_>_p]:text-[clamp(2.1875rem,_4.5vw,_3.875rem)] [&_>_p]:m-0`}>
      <p>
        {'"Some nights, the best place to go is nowhere at all."'
          .split(" ")
          .map((word, i) => (
            <span className="reveal-word motion-reduce:opacity-100!" key={i}>
              {word}{" "}
            </span>
          ))}

      </p>
    </section>
  );
}
