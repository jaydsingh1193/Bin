import type { Metadata } from "next";
import { Droplets, Camera, Leaf, CalendarDays, Sparkles } from "lucide-react";
import { PageHeading, ClosingCTA } from "@/components/site/primitives";
import { PlanCards } from "@/components/site/plans";
import { FAQList } from "@/components/site/faq-list";
import { isOfferActive } from "@/lib/content";
export const metadata: Metadata = { title: "Plans & pricing" };

export default function PlansPage() {
  return (
    <>
      <PageHeading
        eyebrow="Simple plans. Spotless bins."
        title={
          <>
            A fresher home.
            <br />
            <span>A plan that fits.</span>
          </>
        }
        description="From your kitchen caddy to every bin at home. Choose your plan, leave them out, and leave the rest to us."
      />
      <section className="wrap page-content">
        {isOfferActive() && (
          <aside className="offer-card">
            <Sparkles />
            <span>
              <strong>Your first clean, half price.</strong> Join before 31
              January 2027. We confirm your discount before payment.
            </span>
          </aside>
        )}
        <PlanCards />
        <section className="included-section">
          <h2>Every plan gets the full treatment.</h2>
          <ul>
            <li>
              <Droplets />
              Washed, sanitised & deodorised
            </li>
            <li>
              <CalendarDays />
              13 scheduled cleans a year
            </li>
            <li>
              <Camera />
              Photo sent to your phone
            </li>
            <li>
              <Leaf />
              All dirty water taken away
            </li>
          </ul>
        </section>
        <section className="extras-grid">
          <article>
            <h3>Just a one-off?</h3>
            <p>
              £24 for your first bin, £11 for each extra. A proper deep clean,
              whenever you need a fresh start.
            </p>
          </article>
          <article>
            <h3>A little extra in summer?</h3>
            <p>
              Add an extra clean in June–August for £5 per bin. Ideal for warmer
              days when your bins need more attention.
            </p>
          </article>
        </section>
        <section className="narrow section">
          <h2>Clear on the details.</h2>
          <FAQList limit={4} />
        </section>
      </section>
      <ClosingCTA />
    </>
  );
}
