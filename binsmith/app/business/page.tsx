import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Building2,
  Utensils,
  CalendarCheck,
  Droplets,
  MessageSquare,
} from "lucide-react";
import {
  PageHeading,
  SectionHeading,
  TickList,
  Action,
} from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";
export const metadata: Metadata = { title: "Cleaning for blocks & businesses" };
export default function BusinessPage() {
  return (
    <>
      <PageHeading
        eyebrow="For the spaces you look after"
        title={
          <>
            A cleaner bin store.
            <br />
            <span>A better impression.</span>
          </>
        }
        description="Regular bin cleaning for managing agents, mansion blocks and hospitality businesses. Keep shared spaces welcoming and unpleasant smells in check."
      />
      <section className="wrap page-content">
        <section className="business-cards">
          <article>
            <Building2 size={35} />
            <span className="eyebrow">FOR PROPERTY MANAGERS</span>
            <h2>
              Better shared spaces.
              <br />
              Happier residents.
            </h2>
            <p>
              Communal euro bins cleaned every four weeks, with bin-store jet
              washing and sanitising from floor to wall.
            </p>
            <TickList
              items={[
                "Communal bins from £32 per bin",
                "Bin stores from £160 per visit",
                "Schedule and access agreed with you",
              ]}
            />
            <Action
              href="/business?type=Block%20%2F%20managing%20agent#quote"
              variant="primary"
            >
              Ask about a free trial clean
            </Action>
          </article>
          <article>
            <Utensils size={35} />
            <span className="eyebrow">FOR RESTAURANTS, PUBS & CAFÉS</span>
            <h2>
              Good hospitality.
              <br />
              Right to the back door.
            </h2>
            <p>
              Weekly or fortnightly trade-bin washes that help keep smells and
              pests away from your premises.
            </p>
            <TickList
              items={[
                "240-litre bins from £15 per clean",
                "1,100-litre bins from £37 per clean",
                "Weekly or fortnightly cleaning",
              ]}
            />
            <Action
              href="/business?type=Restaurant%20%2F%20pub%20%2F%20caf%C3%A9#quote"
              variant="outline"
            >
              Get a tailored quote
            </Action>
          </article>
        </section>
        <section className="business-promises">
          {[
            {
              Icon: CalendarCheck,
              title: "A schedule that fits",
              text: "Agree a regular cleaning routine around your collection days.",
            },
            {
              Icon: Droplets,
              title: "Water handled properly",
              text: "Wastewater goes into our tank and is taken away for disposal.",
            },
            {
              Icon: MessageSquare,
              title: "Clear from the start",
              text: "Pricing, access and your first clean confirmed before we begin.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.Icon />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>
        <section className="split-content quote-section" id="quote">
          <section>
            <SectionHeading
              eyebrow="Let’s make a plan"
              title="Tell us about your space."
              description="Your building. Your bins. Your schedule. We’ll come back with a quote within one working day."
            />
            <p className="muted">
              No payment is taken here. We’ll confirm your requirements and
              price before any work begins.
            </p>
          </section>
          <Suspense fallback={<p>Loading enquiry form…</p>}>
            <ContactForm business />
          </Suspense>
        </section>
      </section>
    </>
  );
}
