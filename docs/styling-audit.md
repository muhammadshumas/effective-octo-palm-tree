# Styling audit — 4 October 2026

## Baseline

The project uses Next.js 16.3.8 and Tailwind CSS v4. The installed Next.js CSS guide was reviewed before changing code.

- Production build and TypeScript checks passed.
- ESLint reported three unused imports and no errors.
- `globals.css` contained 1,513 lines, including 170 hand-written spacing utilities, obsolete component rules, and successive overrides of the same layouts.
- Two CSS modules supplied heading variants and listening-section tabs.
- Browser interaction checks passed at 375, 479, 640, 641, 767, 768, 1023, 1024, and 1440px.

## Changes

- Deleted `heading.module.css` and `listening-section.module.css`; their styles now use complete Tailwind utility strings.
- Replaced all custom spacing utilities with Tailwind spacing and removed their duplicate CSS variables.
- Migrated component styling, responsive layouts, hover/focus states, tab selection, pseudo-elements, FAQ expansion, and dialog backdrops into Tailwind utilities.
- Consolidated the palette and font stacks in Tailwind's theme.
- Added a shared storefront `Button` and shared container/section utility strings to avoid repeating common styling.
- Removed obsolete global rules, unused imports, and commented-out scene markup. Corrected the scene section's accessible label after removing the already-commented-out heading.
- Reduced `globals.css` to 39 lines: theme values, global element defaults, the panel-entry animation, and reduced-motion handling.

The original 640/641px responsive boundary is intentional. Exact gradients, masks, chamfered frames, fluid heading sizes, and nonstandard measurements use arbitrary utilities where rounding to a stock value would change the design. GSAP selector hooks remain because they control animations. Runtime scene opacity and dialog scroll locking also remain because they reflect interaction state.

The listening heading/copy and paragraph width were edited separately during the audit. Those edits were preserved and were excluded from visual equivalence claims.

## Verification

Final checks:

- `npm run lint`: passed with no warnings or errors.
- `npx tsc --noEmit`: passed.
- `npm run build`: passed; the home page remains statically prerendered.
- Tailwind's installed compiler recognized all audited utility candidates; intentional animation hooks and expression values were accounted for separately.
- Production-browser interaction checks passed at all nine baseline widths: cart opening, quantity changes, removal, demo checkout, policy dialogs, Escape dismissal, FAQ expansion, mobile navigation, audio-tab selection and arrow/Home navigation, and scene navigation.
- Additional checks passed at 375 and 1440px with both ordinary and reduced motion: GSAP hook presence, completed hero animation, local-image loading, visible keyboard focus, tab End navigation, panel animation behavior, keyboard carousel navigation, cart persistence after reload, body scroll restoration, and horizontal overflow.
- Compared computed styles and desktop/mobile screenshots before and after. Differences from CSS serialization, such as Tailwind's full-radius and shadow implementations, were distinguished from layout changes. The migration preserved the reviewed layouts outside the separately edited listening content.

Browser scripts, baseline source copies, computed-style snapshots, and screenshots are saved outside the repository in the chat's `styling-audit` visualization artifact directory. No dependencies were added for verification.

## Existing limitation

The three testimonial portraits served by `https://i.pravatar.cc` failed to load in this environment. They were blank in the baseline screenshots too. `src/lib/product.ts`, including these URLs, is byte-for-byte unchanged. Local image loading passed; the remote portraits remain an external-image limitation, not a styling regression.
