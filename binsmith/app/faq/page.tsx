import type { Metadata } from "next";
import { PageHeading, ClosingCTA, Action } from "@/components/site/primitives";
import { FAQList } from "@/components/site/faq-list";
export const metadata: Metadata = { title: "Common questions" };
export default function FAQPage() {
  return (
    <>
      <PageHeading
        eyebrow="The little details, sorted"
        title={
          <>
            Good questions.
            <br />
            <span>Straight answers.</span>
          </>
        }
        description="Everything you need to know before putting your bins in our hands."
      />
      <section className="wrap narrow page-content">
        <FAQList />
        <aside className="faq-contact">
          <h2>Still wondering about something?</h2>
          <p>
            We’re happy to help, whether it’s access, your cleaning schedule or
            which plan to choose.
          </p>
          <Action href="/contact" variant="outline">
            Talk to Binsmith
          </Action>
        </aside>
      </section>
      <ClosingCTA />
    </>
  );
}
