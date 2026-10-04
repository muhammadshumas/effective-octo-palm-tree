# Star Galaxy

A single-product demo storefront built with Next.js App Router, TypeScript, Tailwind CSS, Geist, and GSAP.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run lint` and `npm run build` to validate the app. Use `npm start` after a production build.

## Content

Edit `src/lib/product.ts` for product details, provisional price, image paths, projection names, and sample stories. Cart state is browser-local, with validated quantities from 0 to 99. Checkout does not call a payment service or place orders.

All four generated images are in `public/images`. The built-in imagegen prompts are recorded in `IMAGE_PROMPTS.md`. The projection selector uses atmosphere artwork, not authentic card previews. Sample stories are labeled and contain no ratings or buyer claims.

Before a commercial launch, replace illustrative renders with verified product photography, confirm product specifications and policies, provide genuine reviews and final pricing, and integrate a real checkout.

## Validation

Lint and production build pass. Browser checks cover adding, quantity changes, subtotal, removal, persistence after reload, demo checkout, Escape dismissal, projection selection, story navigation, FAQ expansion, policy panels, mobile navigation, image loading, and horizontal overflow. Desktop pinning is disabled on mobile and for reduced motion.

The production dependency audit has no known vulnerabilities. The scaffold's ESLint development dependencies report five related high-severity findings from the same `braces` dependency chain; npm currently proposes a major Next.js ESLint downgrade rather than a compatible fix.
