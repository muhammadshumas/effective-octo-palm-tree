"use client";

import Heading from "@/components/typography/heading";

import { useEffect, useEffectEvent, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sceneArtworks } from "@/lib/product";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Transition = { index: number; slot: number; direction: -1 | 1; automatic: boolean };
const initialIndex = 4;

export default function ScenesSection() {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const locked = useRef(false);
  const decoded = useRef(new Map<string, Promise<void>>());
  const activeRef = useRef({ index: initialIndex, slot: 0 });
  const [active, setActive] = useState({ index: initialIndex, slot: 0 });
  const [layers, setLayers] = useState<(number | null)[]>([initialIndex, null]);
  const [transition, setTransition] = useState<Transition | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const [autoplay, setAutoplay] = useState(true);

  const advance = useEffectEvent(() => { void navigate(1, true); });

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => advance(), 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  function prepare(index: number) {
    const src = sceneArtworks[index].image;
    const existing = decoded.current.get(src);
    if (existing) return existing;
    const image = new window.Image();
    let timer: ReturnType<typeof setTimeout>;
    const promise = new Promise<void>((resolve, reject) => {
      timer = setTimeout(() => reject(new Error("Image loading timed out")), 15000);
      image.src = src;
      image.decode().then(resolve, reject);
    }).finally(() => clearTimeout(timer)).catch((reason) => {
      decoded.current.delete(src);
      throw reason;
    });
    decoded.current.set(src, promise);
    return promise;
  }

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);

  useEffect(() => {
    const count = sceneArtworks.length;
    void prepare((active.index + 1) % count).catch(() => {});
    void prepare((active.index + count - 1) % count).catch(() => {});
    // The decoder cache is stable; preload only when the settled scene changes.
  }, [active.index]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(".scenes-heading > *", {
        y: 16, opacity: 0, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });
    });
    return () => mm.revert();
  }, { scope: root });

  async function navigate(direction: -1 | 1, automatic = false) {
    if (locked.current) return;
    locked.current = true;
    setBusy(true);
    setError("");
    const index = (activeRef.current.index + direction + sceneArtworks.length) % sceneArtworks.length;
    try {
      await prepare(index);
      if (!mounted.current) return;
      const slot = 1 - activeRef.current.slot;
      setLayers((current) => current.map((value, i) => i === slot ? index : value));
      setTransition({ index, slot, direction, automatic });
    } catch {
      if (!mounted.current) return;
      locked.current = false;
      setBusy(false);
      setError("That scene couldn’t load. Use the arrow to try again.");
    }
  }

  useLayoutEffect(() => {
    if (!transition || !stage.current) return;
    const outgoing = stage.current.querySelector(`[data-scene-slot="${activeRef.current.slot}"]`);
    const incoming = stage.current.querySelector(`[data-scene-slot="${transition.slot}"]`);
    if (!outgoing || !incoming) return;
    const finish = () => {
      if (!mounted.current) return;
      const next = { index: transition.index, slot: transition.slot };
      activeRef.current = next;
      setActive(next);
      setLayers((current) => current.map((value, i) => i === next.slot ? value : null));
      setTransition(null);
      if (!transition.automatic) {
        setAnnouncement(`${sceneArtworks[next.index].name}, scene ${next.index + 1} of ${sceneArtworks.length}`);
      }
      locked.current = false;
      setBusy(false);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(incoming, { opacity: 1 });
      finish();
      return;
    }
    const offset = 24 * transition.direction;
    const timeline = gsap.timeline({ defaults: { duration: 0.8, ease: "power2.inOut" }, onComplete: finish });
    timeline.set(incoming, { opacity: 1 })
      .fromTo(incoming.querySelector(".scene-image-plane"), { opacity: 0, x: offset }, { opacity: 1, x: 0 }, 0)
      .fromTo(outgoing.querySelector(".scene-image-plane"), { opacity: 1, x: 0 }, { opacity: 0, x: -offset }, 0)
      .fromTo(incoming.querySelector(".scene-name"), { opacity: 0 }, { opacity: 1 }, 0)
      .to(outgoing.querySelector(".scene-name"), { opacity: 0 }, 0);
    return () => { timeline.kill(); };
  }, [transition]);

  return (
    <section ref={root} id="scenes" className="scroll-mt-24" aria-label="Celestial scenes">
      <div ref={stage} className="relative isolate w-full h-105 overflow-hidden bg-[#0e0e18] md:h-[clamp(480px,_65vh,_760px)] lg:h-[clamp(640px,_85svh,_1100px)] focus-visible:[outline:2px_solid_#e2d1ff] focus-visible:-outline-offset-5" role="region" aria-roledescription="carousel" aria-label="Explore the sixteen scenes" aria-busy={busy} tabIndex={0}
        onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          void navigate(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
        {layers.map((index, slot) => index === null ? null : (
          <div key={slot} data-scene-slot={slot} className="absolute top-0 right-0 bottom-0 left-0" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${sceneArtworks.length}`} aria-hidden={slot !== active.slot} style={{ opacity: slot === active.slot ? 1 : 0 }}>
            <div className="scene-image-plane absolute top-0 -right-6 bottom-0 -left-6">
              <Image src={sceneArtworks[index].image} alt={sceneArtworks[index].alt} fill unoptimized sizes="100vw" loading="eager" className="object-cover object-center" />
            </div>
            <div className="scene-name absolute z-2 left-6 right-6 bottom-18 md:left-[max(24px,_calc((100%_-_1280px)_/_2))] md:right-35 md:bottom-24 [&_>_p]:mt-3 [&_>_p]:mb-0 [&_>_p]:max-w-140 [&_>_p]:text-[#e0d5ef] [&_>_p]:text-sm [&_>_p]:leading-[1.6] md:[&_>_p]:mt-4 md:[&_>_p]:text-base [&_>_p]:mx-0">
              <Heading as="h3" variant="scene">{sceneArtworks[index].name}</Heading>
              <p>{sceneArtworks[index].description}</p>
            </div>
          </div>
        ))}
        <div className="absolute top-0 right-0 bottom-0 left-0 z-1 pointer-events-none bg-transparent bg-[linear-gradient(180deg,_#08091412_25%,_transparent_45%,_#080914d9_100%)]" />
        <button className="absolute z-3 top-4 right-3 grid place-items-center w-11 h-11 rounded-full bg-[#08091470] backdrop-filter-[blur(12px)] text-white cursor-pointer md:top-6 md:right-8 hover:bg-[#080914b5] focus-visible:[outline:2px_solid_#e2d1ff] focus-visible:outline-offset-3 p-0 border-[#ffffff40] border" type="button" aria-label={autoplay ? "Pause autoplay" : "Resume autoplay"} onClick={() => setAutoplay((playing) => !playing)}>
          {autoplay ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
        </button>
        <button className="absolute z-3 top-[50%] transform-[translateY(-50%)] grid place-items-center w-12 h-12 rounded-full bg-[#08091470] backdrop-filter-[blur(12px)] text-white cursor-pointer [transition:background_.2s,_border-color_.2s] md:w-16 md:h-16 motion-reduce:transition-none hover:bg-[#080914b5] aria-disabled:cursor-progress focus-visible:[outline:2px_solid_#e2d1ff] focus-visible:-outline-offset-5 [&_svg]:w-7 [&_svg]:h-7 md:[&_svg]:size-8 left-3 md:left-8 p-0 border-[#ffffff40] border hover:border-[#ffffffa6]" type="button" aria-label="Previous scene" aria-disabled={busy} onClick={() => void navigate(-1)}><ArrowLeft size={32} weight="light" aria-hidden="true" /></button>
        <button className="absolute z-3 top-[50%] transform-[translateY(-50%)] grid place-items-center w-12 h-12 rounded-full bg-[#08091470] backdrop-filter-[blur(12px)] text-white cursor-pointer [transition:background_.2s,_border-color_.2s] md:w-16 md:h-16 motion-reduce:transition-none hover:bg-[#080914b5] aria-disabled:cursor-progress focus-visible:[outline:2px_solid_#e2d1ff] focus-visible:-outline-offset-5 [&_svg]:w-7 [&_svg]:h-7 md:[&_svg]:size-8 right-3 md:right-8 p-0 border-[#ffffff40] border hover:border-[#ffffffa6]" type="button" aria-label="Next scene" aria-disabled={busy} onClick={() => void navigate(1)}><ArrowRight size={32} weight="light" aria-hidden="true" /></button>
        <span className="absolute z-2 right-6 bottom-7.5 text-sm text-white tabular-nums leading-normal md:right-[max(24px,_calc((100%_-_1280px)_/_2))] md:bottom-12.5 md:text-base [&_>_span]:text-[#d4c9e0] [&_>_span]:my-0 [&_>_span]:mx-1" aria-hidden="true">{active.index + 1}<span> / </span>{sceneArtworks.length}</span>
        {error && <p className="absolute z-4 top-5 left-[50%] transform-[translateX(-50%)] w-max max-w-[calc(100%_-_48px)] rounded-md bg-[#0e0e18ed] text-white text-sm leading-normal m-0 py-3 px-4 border-[#ffffff40] border" role="status">{error}</p>}
      </div>

      <p className="absolute w-0.25 h-0.25 -mt-0.25 -mr-0.25 -mb-0.25 -ml-0.25 overflow-hidden [clip-path:inset(50%)] whitespace-nowrap p-0 border-0" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
    </section>
  );
}


