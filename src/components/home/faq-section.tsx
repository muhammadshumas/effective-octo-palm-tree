import { containerClasses } from "./layout-classes";
import Heading from "@/components/typography/heading";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";

const faqs = [
  [
    "What comes with the projection cards?",
    "You get 16 projection cards, with one already installed. Each includes an introduction to its scene, from distant nebulae to dinosaur worlds.",
  ],
  [
    "How do I get a clear projection?",
    "Dim the room, aim at a wall or ceiling, and turn the top focus knob until the image looks sharp. Around 9.84 feet is the suggested projection distance.",
  ],
  [
    "Can I play my own music?",
    "Yes. Pair your phone with the Bluetooth device named WH-E32. You can also use the built-in soothing sounds.",
  ],
  [
    "Does it turn off automatically?",
    "Choose a 1, 2, or 4-hour timer with the remote, which also controls lighting and audio.",
  ],
  [
    "How is it powered?",
    "The projector is USB powered. Power-adapter and accessory contents will be confirmed before real orders are accepted.",
  ],
  [
    "Can I order from this website?",
    "This is a demo with a provisional $79 USD price. No payment is collected and no order is placed.",
  ],
];
export default function FaqSection() {
  return (
    <section id="faq" className={`scroll-mt-24 ${containerClasses} pt-0 min-[641px]:pt-24 lg:pt-0 grid grid-cols-1 pb-16 min-[641px]:pb-24 lg:pb-32 gap-8 min-[641px]:gap-12 lg:gap-24`}>
      <div>
        <Heading as="h2" variant="section">
          Good questions.
          <br />
          <span className="text-highlight">Simple answers.</span>
        </Heading>
      </div>
      <div>
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-line first:border-t">
            <summary className="flex cursor-pointer list-none justify-between gap-4 py-6 text-base [&::-webkit-details-marker]:hidden">
              {q}
              <span aria-hidden="true" className="text-[1.1875rem] leading-none text-[#b9a6d7] group-open:rotate-45"><PlusIcon size="1em" /></span>
            </summary>
            <p className="mt-0 max-w-110 pb-4 text-base leading-normal text-muted">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
