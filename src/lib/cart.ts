import { product } from "./product";
const key = "star-galaxy-cart";
let memory = 0;
export function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    return saved?.id === product.id &&
      Number.isSafeInteger(saved.quantity) &&
      saved.quantity >= 0 &&
      saved.quantity <= 99
      ? saved.quantity
      : 0;
  } catch {
    return memory;
  }
}
export function writeCart(value: number | ((quantity: number) => number)) {
  memory = Math.max(
    0,
    Math.min(99, typeof value === "function" ? value(readCart()) : value),
  );
  try {
    localStorage.setItem(
      key,
      JSON.stringify({ id: product.id, quantity: memory }),
    );
  } catch {}
  window.dispatchEvent(new Event("cart-change"));
}
export function subscribeCart(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("cart-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("cart-change", callback);
  };
}
export const serverCart = () => 0;
