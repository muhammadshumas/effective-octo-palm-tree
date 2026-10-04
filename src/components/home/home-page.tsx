"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { readCart, writeCart, subscribeCart, serverCart } from "@/lib/cart";
import HomeHeader from "./home-header";
import HeroSection from "./hero-section";
import StoreBenefits from "./store-benefits";
import ExperienceSection from "./experience-section";
import ScenesSection from "./scenes-section";
import ManifestoSection from "./manifesto-section";

import SetupSection from "./setup-section";
import StoriesSection from "./stories-section";
import ShopSection from "./shop-section";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta-section";
import HomeFooter from "./home-footer";
import HomeDialog from "./home-dialog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomePage() {
  const root = useRef<HTMLElement>(null);
  const quantity = useSyncExternalStore(subscribeCart, readCart, serverCart);
  const setQuantity = writeCart;
  const [panel, setPanel] = useState<string | null>(null);
  const [checkout, setCheckout] = useState(false);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-copy > *", {
          opacity: 0,
          y: 24,
          stagger: 0.13,
          duration: 1,
        });
        gsap.from(".hero-product-visual", {
          opacity: 0,
          scale: 0.92,
          duration: 1.4,
          ease: "power2.out",
        });
        gsap.from(".hero-feature", {
          opacity: 0,
          y: 18,
          stagger: 0.14,
          duration: 0.9,
          delay: 0.35,
        });
        // Reveal content blocks independently so long sections never wait for
        // their entire height to enter the viewport. Keep transforms off slides.
        gsap.utils.toArray<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            // Keep scroll destinations stationary while their contents fade in.
            y: element.dataset.scrollReveal === "fade" ? 0 : 24,
            duration: 0.75,
            ease: "power2.out",
            clearProps: "opacity,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          });
        });
        gsap.fromTo(
          ".reveal-word",
          { opacity: 0.72 },
          {
            opacity: 1,
            stagger: 0.12,
            scrollTrigger: {
              trigger: ".manifesto",
              start: "top 75%",
              end: "bottom 45%",
              scrub: true,
            },
          },
        );
      });
      return () => mm.revert();
    },
    { scope: root },
  );
  const add = () => {
    setQuantity((q) => Math.min(q + 1, 99));
    setCheckout(false);
    setPanel("cart");
  };
  const openCart = () => {
    setCheckout(false);
    setPanel("cart");
  };
  return (
    <main ref={root} className="overflow-x-hidden w-full max-w-full">
      <HomeHeader quantity={quantity} onOpenCart={openCart} />
      <HeroSection />
      <StoreBenefits onOpenPolicy={setPanel} />
      <ExperienceSection />
      <SetupSection />
      <ScenesSection />
      <StoriesSection />

      <ManifestoSection />

      <ShopSection onAddToCart={add} />
      <FaqSection />
      <FinalCtaSection onAddToCart={add} />
      <HomeFooter onOpenPolicy={setPanel} />
      <HomeDialog
        panel={panel}
        onClose={() => setPanel(null)}
        quantity={quantity}
        setQuantity={setQuantity}
        checkout={checkout}
        setCheckout={setCheckout}
      />
    </main>
  );
}
