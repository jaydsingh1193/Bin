export const plans = [
  {
    id: "caddy",
    name: "Caddy Care",
    monthly: 7,
    annual: 70,
    description: "Small caddies. A big difference.",
    detail: "For homes with food caddies and council sack collections.",
    features: [
      "Kerbside food caddy",
      "Kitchen caddy",
      "Washed, sanitised & deodorised",
    ],
    value: "Caddy Care — £7/month",
  },
  {
    id: "essential",
    name: "Essential",
    monthly: 11,
    annual: 110,
    description: "Your everyday bin, taken care of.",
    detail: "A fresh start for one wheelie bin or dustbin.",
    features: [
      "1 wheelie bin or dustbin",
      "A thorough clean, inside & out",
      "Before-and-after photo",
    ],
    value: "Essential — £11/month",
  },
  {
    id: "household",
    name: "Household",
    monthly: 20,
    annual: 200,
    description: "The whole home. All sorted.",
    detail: "One simple plan for your bins and food caddies.",
    features: [
      "Up to 3 wheelie bins",
      "Food caddies included",
      "Additional bins +£5/month",
    ],
    value: "Household — £20/month",
  },
] as const;

export const areas = [
  { name: "Hammersmith", districts: ["W6", "W14"] },
  { name: "Fulham", districts: ["SW6"] },
  { name: "Kensington", districts: ["W8", "SW5", "SW7"] },
  { name: "Chelsea", districts: ["SW3", "SW10"] },
  { name: "Battersea", districts: ["SW11"] },
  { name: "Putney", districts: ["SW15"] },
] as const;

export const faqs = [
  {
    question: "Do I need to be at home?",
    answer:
      "No. Leave your empty bins accessible in your front garden or at the kerb on your agreed cleaning date. We visit every four weeks and send a before-and-after photo to your phone.",
  },
  {
    question: "How often do you clean my bins?",
    answer:
      "Every four weeks — that’s 13 scheduled cleans a year. Monthly plans are billed once per calendar month, so there are 12 payments a year. Cleaning and billing follow different schedules.",
  },
  {
    question: "How does the half-price first clean work?",
    answer:
      "Join before 31 January 2027 to receive your first clean half price. We confirm the introductory discount, first payment amount and payment date before you agree to pay. The prices shown are the base plan prices before this offer.",
  },
  {
    question: "Can I cancel my plan?",
    answer:
      "Monthly plans can be cancelled any time. Contact us and choose ‘Existing booking or cancellation’; we’ll confirm your cancellation and any pending payment. For annual plans, we explain cancellation and refund terms before you pay.",
  },
  {
    question: "Is cleaning linked to my council collection day?",
    answer:
      "No. Your regular clean runs every four weeks on a separate schedule. We confirm your first cleaning date before the service starts.",
  },
  {
    question: "What happens to the dirty water?",
    answer:
      "All dirty water goes back into our tank and is disposed of properly. We don’t leave it running down your driveway, into the road or down your drain.",
  },
  {
    question: "Can I book a one-off clean?",
    answer:
      "Yes. A one-off deep clean is £24 for the first bin and £11 for each additional bin. Choose ‘One-off deep clean’ when booking. Summer boost cleans are also available in June–August for £5 per bin.",
  },
  {
    question: "How should I prepare my bins?",
    answer:
      "Leave your bins empty and accessible on your agreed cleaning date. Keep kitchen caddies available if they’re included in your plan. Tell us about access restrictions when booking, but please don’t include gate codes or payment details in the form.",
  },
  {
    question: "What if you don’t cover my postcode?",
    answer:
      "Get in touch with your postcode. We’ll check whether your street can be included on a route before you book. Even within our usual coverage, we confirm your street and cleaning schedule first.",
  },
] as const;

export function normalisePostcode(value: string): string | null {
  const compact = value.toUpperCase().replace(/\s/g, "");
  if (
    !/^(?:GIR0AA|[A-PR-UWYZ][A-HK-Y]?[0-9][A-HJKPSTUW0-9]?[0-9][ABD-HJLNP-UW-Z]{2})$/.test(
      compact,
    )
  )
    return null;
  return `${compact.slice(0, -3)} ${compact.slice(-3)}`;
}

export function findArea(postcode: string) {
  const district = postcode.split(" ")[0];
  return areas.find((area) =>
    (area.districts as readonly string[]).includes(district),
  );
}

export function isOfferActive(now = new Date()) {
  return now.getTime() < Date.parse("2027-02-01T00:00:00Z");
}

export const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
