# Binsmith London

Nine responsive pages: home, plans, how it works, areas, business, booking, contact, FAQs and privacy. The preview is separate from binsmithlondon.com and requests search engines not to index it.

## Development

Node 24 (compatible with the project's asdf version file).

```sh
npm ci
npm run dev
```

## Checks and static export

```sh
npm run lint
npm test
NEXT_PUBLIC_BASE_PATH=/Bin npm run build
```

The build includes strict TypeScript checking and exports HTML to `out/`. The GitHub workflow obtains the base path from Pages configuration. The browser preview uses `/` by default.

## Content and interactions

`lib/content.ts` holds frozen plan, coverage and FAQ data shared across the site. Prices and service details were checked against https://binsmithlondon.com/ on 7 November 2026. The original smiley-bin SVG and Bricolage Grotesque / DM Sans fonts are retained. Colours are CSS design tokens.

The audience is busy west/south-west London households, with a separate business journey for managing agents and hospitality. The design emphasises convenience, odour control, cleaning every four weeks, clear prices and cancellation terms. The user confirmed on 7 November 2026 that cleaning is not linked to council collection and is not promised that evening. There are no invented customer counts, reviews or certifications.

Monthly and annual pricing, query-linked plan selection, two-step booking, postcode coverage, mobile navigation and native FAQ accordions work without a new backend. Native forms post to `https://binsmithlondon.com/thanks` with the existing Netlify form names and field names. A successful delivery has **not** been tested: no live enquiry or booking was submitted. Production form acceptance and owner notification should be checked before replacing the original website. The preview does not take payments.

## Imagery

`public/images/london-home.jpg` is an optimised illustrative image generated with the built-in image generation tool. It is not evidence of an actual customer's property or a completed service. The full generation prompt is in `public/images/README.md`.
