"use client";

import Button from "./button";

import Heading from "@/components/typography/heading";

import { useEffect, useRef } from "react";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { PlusIcon } from "@phosphor-icons/react/dist/csr/Plus";
import { MinusIcon } from "@phosphor-icons/react/dist/csr/Minus";
import Photo from "./photo";
import Arrow from "./arrow";
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
  useEffect(() => {
    if (panel) {
      previousFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [panel]);

  return (
    <dialog
      ref={dialog}
      className={`max-h-dvh border border-[#ffffff18] bg-[#14121f] p-0 text-foreground backdrop:bg-[#05050cbf] backdrop:backdrop-blur-[5px] ${panel === "cart" ? "fixed inset-y-0 right-0 left-auto mt-0 mr-0 mb-0 ml-auto h-dvh w-[min(480px,100%)] max-w-full" : "m-auto w-[min(520px,calc(100%-2rem))] rounded-[9px]"}`}
      onCancel={() => onClose()}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="dialog-title"
    >
      <div className="p-6 min-[641px]:p-8">
        <div className="flex items-center justify-between mb-4 [&_button]:grid [&_button]:place-items-center [&_button]:text-3xl [&_button]:bg-transparent [&_button]:leading-normal [&_button]:border-0">
          <Heading as="h2" variant="dialog" id="dialog-title">{panel === "cart" ? "Your bag" : panel}</Heading>
          <button aria-label="Close dialog" onClick={() => onClose()}>
            <XIcon aria-hidden="true" size="1em" />
          </button>
        </div>
        {panel === "cart" ? (
          <>
            <p className="text-[0.6875rem] leading-normal text-muted">
              A little universe, ready when you are.
            </p>
            {quantity > 0 ? (
              <>
                <div className="grid grid-cols-[95px_1fr] border-b border-b-line min-[641px]:grid-cols-[115px_1fr] [&_p]:text-base [&_p]:text-[#a9a0b8] [&_p]:leading-normal py-8 px-0 gap-4">
                  <div className="relative h-33.75 rounded-md overflow-hidden">
                    <Photo
                      src={product.images.studio}
                      alt="Illustrative projector concept"
                    />
                  </div>
                  <div>
                    <Heading as="h3" variant="cart">{product.name}</Heading>
                    <p>{money(product.price)} · demo price</p>
                    <div className="flex items-center [&_button]:grid [&_button]:place-items-center [&_button]:bg-transparent [&_button]:w-7.25 [&_button]:h-7.25 [&_button]:rounded-[3px] [&_output]:text-base [&_output]:leading-normal gap-4 [&_button]:border-[#ffffff28] [&_button]:border">
                      <button
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity((q) => q - 1)}
                      >
                        <MinusIcon aria-hidden="true" size="1em" />
                      </button>
                      <output aria-label="Quantity">{quantity}</output>
                      <button
                        disabled={quantity >= 99}
                        aria-label="Increase quantity"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        <PlusIcon aria-hidden="true" size="1em" />
                      </button>
                    </div>
                    <button
                      className="bg-transparent text-[#c2b3d4] underline text-[calc(0.6875rem_+_1px)] pt-2 pb-0 leading-normal px-0 border-0"
                      onClick={() => {
                        setQuantity(0);
                        setCheckout(false);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-base leading-normal my-8 mx-0">
                  <span>Subtotal</span>
                  <strong>{money(quantity * product.price)} USD</strong>
                </div>
                <p className="text-[0.6875rem] leading-normal text-muted">
                  Provisional pricing. Shipping and taxes are not calculated
                  in this demo.
                </p>
                <Button
                  fullWidth 
                  onClick={() => setCheckout(true)}
                >
                  Try demo checkout <Arrow />
                </Button>
                {checkout && (
                  <div className="bg-[#292039] rounded-[5px] text-base leading-normal [&_p]:text-[#c7bad7] [&_p]:text-base [&_p]:leading-normal [&_p]:font-serif [&_p]:font-normal [&_p]:tracking-normal p-4 my-4 mx-0 border-[#68517f] border" role="status">
                    <strong>Demo checkout complete.</strong>
                    <p>No payment was collected and no order was placed.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="[&_p]:text-base [&_p]:text-muted [&_p]:mb-8 [&_p]:font-serif [&_p]:font-normal [&_p]:tracking-normal [&_p]:leading-normal py-12 px-0">
                <Heading as="h3" variant="empty">Your next escape starts here.</Heading>
                <p>Your bag is empty.</p>
                <Button
                  
                  onClick={() => onClose()}
                >
                  Keep exploring <Arrow />
                </Button>
              </div>
            )}
            <p className="text-[0.6875rem] leading-normal text-muted">Demo storefront · No real purchases</p>
          </>
        ) : (
          <p className="text-base leading-normal text-[#b5a9c4] font-serif font-normal tracking-normal">
            {panel === "Privacy"
              ? "This demo stores only your cart quantity in this browser. It does not collect payment details or submit orders. The commercial privacy policy is pending and will be confirmed before launch."
              : `${panel} policies are pending. This demo does not accept real orders. Delivery regions, charges, timeframes, and return terms will be confirmed before launch.`}
          </p>
        )}
      </div>
    </dialog>
  );
}

