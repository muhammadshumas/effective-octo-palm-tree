"use client";

import { useId, useState } from "react";
import { containerClasses, sectionClasses, sectionContentGapClasses } from "./layout-classes";
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-line first:border-t">
      <button
        id={`${id}-question`}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 border-0 bg-transparent py-6 text-left text-base font-normal hover:text-highlight"
      >
        {question}
        <span aria-hidden="true" className={`shrink-0 text-[1.1875rem] leading-none text-[#b9a6d7] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${open ? "rotate-45" : "rotate-0"}`}><PlusIcon size="1em" /></span>
      </button>
      <div
        id={`${id}-answer`}
        aria-labelledby={`${id}-question`}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="m-0 pb-4 text-base leading-normal text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className={`scroll-mt-24 ${containerClasses} ${sectionClasses} ${sectionContentGapClasses} grid max-w-200 grid-cols-1`}>
      <div data-scroll-reveal className="text-center">
        <Heading as="h2" variant="section">
          Good questions.
          <br />
          <span className="text-highlight">Simple answers.</span>
        </Heading>
      </div>
      <div data-scroll-reveal>
        {faqs.map(([q, a]) => (
          <FaqItem key={q} question={q} answer={a} />
        ))}
      </div>
    </section>
  );
}
