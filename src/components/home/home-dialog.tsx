"use client";

import { useEffect, useRef } from "react";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { MinusIcon } from "@phosphor-icons/react/dist/csr/Minus";
import { ShoppingBagOpenIcon } from "@phosphor-icons/react/dist/csr/ShoppingBagOpen";
import Heading from "@/components/typography/heading";
import Button from "./button";
import Photo from "./photo";
import { product, money } from "@/lib/product";
import type { writeCart } from "@/lib/cart";

export default function HomeDialog({
  panel,
  onClose,
  quantity,
  setQuantity,
  checkout,
  setCheckout,
}: {
  panel: string | null;
  onClose: () => void;
  quantity: number;
  setQuantity: typeof writeCart;
  checkout: boolean;
  setCheckout: (checkout: boolean) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const animation = useRef<Animation | null>(null);
  const closing = useRef(false);

  // Keep the modal and its contents mounted until the exit motion finishes.
  // Taking the current transform also makes an early close reverse smoothly.
  function closeDialog() {
    const element = dialog.current;
    if (!element || closing.current) return;
    closing.current = true;
    const finish = () => {
      element.close();
      onClose();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animation.current?.cancel();
      finish();
      return;
    }
    const currentStyle = getComputedStyle(element);
    const from = { transform: currentStyle.transform, opacity: currentStyle.opacity };
    animation.current?.cancel();
    element.setAttribute("data-closing", "true");
    animation.current = element.animate(
      [from, { transform: panel === "cart" ? "translateX(100%)" : "translateY(16px) scale(0.98)", opacity: panel === "cart" ? 1 : 0 }],
      { duration: 240, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "both" },
    );
    animation.current.onfinish = finish;
  }

  useEffect(() => {
    const element = dialog.current;
    closing.current = false;
    element?.removeAttribute("data-closing");
    if (panel) {
      if (!element?.open) {
        previousFocus.current = document.activeElement as HTMLElement;
        element?.showModal();
      }
      document.body.style.overflow = "hidden";
      if (element && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const enter = element.animate(
          [
            { transform: panel === "cart" ? "translateX(100%)" : "translateY(16px) scale(0.98)", opacity: panel === "cart" ? 1 : 0 },
            { transform: "none", opacity: 1 },
          ],
          { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
        );
        animation.current = enter;
        enter.onfinish = () => enter.cancel();
      }
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      animation.current?.cancel();
      document.body.style.overflow = "";
    };
  }, [panel]);

  return (
    <dialog
      ref={dialog}
      className={`max-h-dvh overflow-y-auto border border-[#ffffff18] bg-[#14121f] p-0 text-foreground backdrop:bg-[#05050cbf] backdrop:backdrop-blur-[5px] backdrop:animate-dialog-backdrop-enter data-[closing=true]:backdrop:animate-dialog-backdrop-exit ${panel === "cart" ? "fixed inset-y-0 right-0 left-auto mt-0 mr-0 mb-0 ml-auto h-dvh w-[min(480px,100%)] max-w-full" : "m-auto w-[min(520px,calc(100%-2rem))] rounded-[9px]"}`}
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDialog();
      }}
      aria-labelledby="dialog-title"
    >
      <div className={`flex flex-col gap-8 p-6 min-[641px]:p-8 ${panel === "cart" ? "min-h-full" : ""}`}>
        <div className="flex items-center justify-between gap-4 border-b border-line pb-6">
          <Heading as="h2" variant="dialog" id="dialog-title">{panel === "cart" ? "Your bag" : panel}</Heading>
          <button
            type="button"
            className="grid size-12 shrink-0 place-items-center rounded-md border-0 bg-transparent text-2xl text-muted hover:bg-white/5 hover:text-foreground"
            aria-label="Close dialog"
            onClick={closeDialog}
          >
            <XIcon aria-hidden="true" size="1em" />
          </button>
        </div>
        {panel === "cart" ? (
          quantity > 0 ? (
            <div className="flex flex-1 flex-col gap-8">
              <div className="grid grid-cols-[96px_minmax(0,1fr)] items-start gap-4 min-[641px]:grid-cols-[112px_minmax(0,1fr)] min-[641px]:gap-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white/5">
                  <Photo src={product.images.studio} alt="White Star Galaxy projector with adjustable cradle" />
                </div>
                <div className="flex min-w-0 flex-col items-start gap-4">
                  <div className="space-y-2">
                    <Heading as="h3" variant="cart" className="mb-0!">{product.name}</Heading>
                    <p className="m-0 text-base leading-normal text-muted">{money(product.price)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="grid size-10 place-items-center rounded-md border border-line bg-transparent hover:bg-white/5"
                      disabled={quantity <= 1}
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity((q) => q - 1)}
                    >
                      <MinusIcon aria-hidden="true" size="1em" />
                    </button>
                    <output className="min-w-6 text-center text-base tabular-nums" aria-label="Quantity">{quantity}</output>
                    <button
                      type="button"
                      className="grid size-10 place-items-center rounded-md border border-line bg-transparent hover:bg-white/5"
                      disabled={quantity >= 99}
                      aria-label="Increase quantity"
                      onClick={() => setQuantity((q) => q + 1)}
                    >
                      <PlusIcon aria-hidden="true" size="1em" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="border-0 bg-transparent px-0 py-2 text-sm text-muted underline underline-offset-4 hover:text-foreground"
                    onClick={() => {
                      setQuantity(0);
                      setCheckout(false);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-6 border-t border-line pt-8">
                <div className="flex items-baseline justify-between gap-4 text-base">
                  <span>Subtotal</span>
                  <strong className="tabular-nums">{money(quantity * product.price)} USD</strong>
                </div>
                <Button className="justify-center!" fullWidth onClick={() => setCheckout(true)}>
                  Checkout
                </Button>
                {checkout && (
                  <div className="space-y-2 rounded-md border border-[#68517f] bg-[#292039] p-4 text-sm leading-relaxed" role="status">
                    <strong className="block font-medium">Checkout is currently unavailable.</strong>
                    <p className="m-0 text-muted">Your items are saved in your bag. Please check back to complete your purchase.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center gap-8 py-16 text-center">
              <div className="grid size-24 place-items-center rounded-full bg-white/5 text-highlight">
                <ShoppingBagOpenIcon size={56} weight="light" aria-hidden="true" />
              </div>
              <div className="space-y-4">
                <Heading as="h4" variant="empty" className="text-3xl! font-medium! leading-tight! tracking-tight! min-[641px]:text-4xl!">Your bag is empty.</Heading>

              </div>
              <Button className="justify-center!" fullWidth onClick={closeDialog}>
                Keep exploring
              </Button>
            </div>
          )
        ) : (
          <p className="m-0 text-base leading-relaxed text-muted">
            {panel === "Privacy"
              ? "Your bag quantity is stored in this browser. Payment details are not collected through this website. The full privacy policy will be published before checkout becomes available."
              : `${panel} details are being finalized. Delivery regions, charges, timeframes, and return terms will be published before checkout becomes available.`}
          </p>
        )}
      </div>
    </dialog>
  );
}
