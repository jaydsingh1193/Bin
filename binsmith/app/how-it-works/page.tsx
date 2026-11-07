import type { Metadata } from "next";
import { Droplets, ShieldCheck, Camera, Leaf } from "lucide-react";
import {
  PageHeading,
  HeroPhoto,
  SectionHeading,
  ClosingCTA,
  TickList,
} from "@/components/site/primitives";
import { Steps } from "@/components/site/steps";
export const metadata: Metadata = { title: "How it works" };

export default function HowPage() {
  return (
    <>
      <PageHeading
        eyebrow="A fresh start every four weeks"
        title={
          <>
            You leave them out.
            <br />
            <span>We leave them lovely.</span>
          </>
        }
        description="A proper clean every four weeks. No waiting in. No scrubbing. No more putting it off."
      />
      <section className="wrap page-content">
        <Steps />
        <figure className="wide-photo">
          <HeroPhoto priority />
          <figcaption>
            Clean bins. A happier doorstep. Illustrative image.
          </figcaption>
        </figure>
        <section className="section split-content">
          <SectionHeading
            eyebrow="The full treatment"
            title={
              <>
                More than a rinse.
                <br />A proper fresh start.
              </>
            }
          />
          <section className="treatment-list">
            {[
              {
                icon: Droplets,
                title: "High-pressure wash",
                text: "Inside and outside, including the places a quick rinse can’t reach.",
              },
              {
                icon: ShieldCheck,
                title: "Sanitise & deodorise",
                text: "We tackle germs and lingering smells, then leave a fresh scent.",
              },
              {
                icon: Camera,
                title: "A photo to your phone",
                text: "See the before and after, even when you’re out enjoying your day.",
              },
              {
                icon: Leaf,
                title: "Every drop taken away",
                text: "Dirty water returns to our tank for proper disposal. Your driveway stays tidy.",
              },
            ].map((item) => (
              <article key={item.title}>
                <item.icon />
                <section>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </section>
              </article>
            ))}
          </section>
        </section>
        <section className="preparation-panel">
          <section>
            <SectionHeading
              eyebrow="Before we arrive"
              title="All we need from you."
            />
            <p>
              We confirm your first clean date, price and access arrangements
              before the service starts.
            </p>
          </section>
          <TickList
            items={[
              "Leave your bins empty on your agreed cleaning date.",
              "Keep them accessible at the kerb or in your front garden.",
              "Leave included kitchen caddies available, too.",
              "Let us know about access restrictions when booking.",
            ]}
          />
        </section>
        <aside className="plain-note">
          <strong>A separate cleaning schedule.</strong> We visit every four
          weeks. Your clean is not linked to your council collection day.
        </aside>
      </section>
      <ClosingCTA />
    </>
  );
}
