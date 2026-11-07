import type { Metadata } from "next";
import { Suspense } from "react";
import { Sparkles, Phone } from "lucide-react";
import { BookingForm } from "@/components/site/booking-form";
import { Eyebrow, TickList } from "@/components/site/primitives";
import { isOfferActive } from "@/lib/content";
export const metadata: Metadata = { title: "Book your first clean" };
export default function BookPage() {
  return (
    <section className="wrap booking-layout">
      <aside className="booking-intro">
        <Eyebrow>Put your bins in good hands</Eyebrow>
        <h1>
          A cleaner bin.
          <br />
          <span>A lighter to-do list.</span>
        </h1>
        <p>
          Tell us a little about your home. We’ll be in touch within one working
          day to get your first clean sorted.
        </p>
        {isOfferActive() && (
          <section className="booking-offer">
            <Sparkles />
            <span>
              <strong>Your first clean, half price.</strong>Join before 31
              January 2027.
            </span>
          </section>
        )}
        <TickList
          items={[
            "No payment taken when you request a clean",
            "Your price and first visit confirmed by text",
            "No need to be home on cleaning day",
            "Monthly plans can be cancelled any time",
          ]}
        />
        <a className="booking-phone" href="tel:+447346818967">
          <Phone size={19} />
          <span>
            Prefer a quick chat?<strong>07346 818967</strong>
          </span>
        </a>
      </aside>
      <Suspense fallback={<p>Loading your plan…</p>}>
        <BookingForm />
      </Suspense>
    </section>
  );
}
