import { containerClasses, sectionClasses, sectionContentGapClasses } from "./layout-classes";
import Heading from "@/components/typography/heading";
import Image from "next/image";
import { StarIcon } from "@phosphor-icons/react/dist/csr/Star";
import { stories } from "@/lib/product";

export default function StoriesSection() {
  return (
    <section className={`${sectionClasses} bg-transparent`} aria-labelledby="stories-title">
      <div className={`${containerClasses} ${sectionContentGapClasses} grid`}>
        <div data-scroll-reveal className="[&_>_p]:mt-4 [&_>_p]:mb-0 [&_>_p]:max-w-155 [&_>_p]:text-muted [&_>_p]:text-base [&_>_p]:leading-[1.6] text-center [&_>_p]:mx-auto">
          <Heading as="h2" variant="section" id="stories-title">Loved by stargazers</Heading>
          <p>Don’t just take our word for it. Hear from our 500+ happy customers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div data-scroll-reveal className="pt-16 pb-12" key={story.person}>
              <article className="relative flex h-full flex-col items-center pt-20 pb-10 bg-white text-[#18171c] rounded-lg shadow-[0_12px_32px_#0000001a] [&_blockquote]:mt-6 [&_blockquote]:mb-8 [&_blockquote]:w-full [&_blockquote]:text-[#625f68] [&_blockquote]:text-[0.9375rem] [&_blockquote]:leading-[1.65] [&_blockquote]:tracking-[-.015em] px-6 md:px-8 [&_blockquote]:mx-0">
                <Image className="absolute -top-16 left-[50%] transform-[translateX(-50%)] w-32 h-32 rounded-full object-cover border-[8px] border-white" src={story.image} alt={`${story.person} portrait`} width={112} height={112} unoptimized />
                <div className="flex text-[#f0cc32] gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon key={index} weight="fill" size={22} aria-hidden="true" />
                  ))}
                </div>
                <Heading as="h3" variant="testimonial">{story.title}</Heading>
                <blockquote>{story.quote}</blockquote>
                <div className="flex flex-col self-start mt-auto pr-11 [&_strong]:text-sm [&_strong]:font-bold [&_strong]:leading-normal [&_>_span]:text-xs [&_>_span]:text-[#625f68] [&_>_span]:leading-normal gap-1">
                  <strong>{story.person}</strong>
                  <span>{story.detail}</span>
                </div>
                <span className="absolute right-5 -bottom-12 [font-family:Georgia,_serif] text-[112px] leading-none text-[#18171c] pointer-events-none" aria-hidden="true">”</span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
