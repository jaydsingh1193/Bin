import type { Metadata } from "next";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  PageHeading,
  ClosingCTA,
  SectionHeading,
} from "@/components/site/primitives";
import { PostcodeChecker } from "@/components/site/postcode-checker";
import { areas } from "@/lib/content";
export const metadata: Metadata = { title: "Areas we cover" };

export default function AreasPage() {
  return (
    <>
      <PageHeading
        eyebrow="Proudly local"
        title={
          <>
            Around the corner.
            <br />
            <span>On top of the grime.</span>
          </>
        }
        description="Bin and caddy cleaning across six neighbourhoods in west and south-west London. Find out if your doorstep is on our route."
      />
      <section className="wrap page-content">
        <section className="coverage-check">
          <PostcodeChecker />
        </section>
        <section className="section">
          <SectionHeading
            eyebrow="Our neighbourhoods"
            title="Two sides of the river. All taken care of."
          />
          <section className="neighbourhoods">
            {areas.map((area, index) => (
              <article key={area.name}>
                <span className="area-index">0{index + 1}</span>
                <MapPin size={24} />
                <h2>{area.name}</h2>
                <p>{area.districts.join(" · ")}</p>
                <Link href={`/book?area=${encodeURIComponent(area.name)}`}>
                  Request a clean <ArrowUpRight size={18} />
                </Link>
              </article>
            ))}
          </section>
        </section>
        <section className="preparation-panel">
          <section>
            <h2>
              No wheelie bin?
              <br />
              You’re still in.
            </h2>
            <p>
              For streets using council sacks, our Caddy Care plan keeps both
              your kitchen and kerbside food caddies fresh from £7 a month.
            </p>
          </section>
          <section>
            <h2>Just outside our areas?</h2>
            <p>
              Tell us your postcode and we’ll check whether we can add your
              street to a route. We always confirm availability before you book.
            </p>
            <Link
              className="text-link"
              href="/contact?topic=Coverage%20enquiry"
            >
              Ask about your postcode <ArrowUpRight size={17} />
            </Link>
          </section>
        </section>
      </section>
      <ClosingCTA />
    </>
  );
}
