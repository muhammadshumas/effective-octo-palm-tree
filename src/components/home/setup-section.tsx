import { containerClasses, sectionClasses } from "./layout-classes";
import Heading from "@/components/typography/heading";
import Image from "next/image";

export default function SetupSection() {
  return (
    <section id="setup" className={`scroll-mt-24 ${containerClasses} ${sectionClasses} grid grid-cols-1 gap-8 min-[641px]:gap-12`} aria-labelledby="setup-heading">
      <div className="self-start text-center [&_>_p]:mt-4 [&_>_p]:mb-0 [&_>_p]:max-w-155 [&_>_p]:text-muted [&_>_p]:text-base [&_>_p]:leading-[1.6] [&_>_p]:mx-auto">
        <Heading as="h2" variant="section" id="setup-heading">How it works</Heading>
        <p>Three easy steps and you are a thousand miles away suddenly</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 [&_article]:min-w-0 [&_p]:text-muted [&_p]:text-base [&_p]:leading-normal [&_p]:max-w-95 [&_p]:font-serif [&_p]:font-normal [&_p]:tracking-normal gap-8 [&_article]:p-0">
        {[
          [
            "Plug in. Settle in.",
            "USB power makes it easy to find its place on a bedside table, shelf, or wherever you unwind.",
            "/images/projector.png",
            "White projector with its adjustable cradle and base",
          ],
          [
            "Pick your little universe.",
            "Insert a projection card, aim the adjustable projector, and turn the top focus knob for a sharper image.",
            "/images/nebula.png",
            "A violet and blue nebula scene to explore with your projector",
          ],
          [
            "Make the evening yours.",
            "Use the remote to adjust the lights, control your audio, and choose an auto-off timer. Let the rotating projection set the scene.",
            "/images/listening.png",
            "A cozy listening room with a projector beside the seating area",
          ],
        ].map(([title, text, image, alt], i) => (
          <article key={title}>
            <div className="relative w-full aspect-[16_/_10] overflow-hidden rounded-xl mb-6 bg-[#14121f]">
              <Image src={image} alt={alt} fill sizes="(max-width: 1023px) 100vw, 33vw" className="object-cover" />
            </div>
            <Heading as="h3" variant="step">{i + 1}. {title}</Heading>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
