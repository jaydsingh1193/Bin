import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail, Clock3 } from "lucide-react";
import { PageHeading } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/contact-form";
export const metadata: Metadata = { title: "Talk to Binsmith" };
export default function ContactPage() {
  return (
    <>
      <PageHeading
        eyebrow="A real conversation"
        title={
          <>
            A question about bins?
            <br />
            <span>We’re all ears.</span>
          </>
        }
        description="Not sure which plan to choose, checking your area, or changing an existing booking? Let’s get it sorted."
      />
      <section className="wrap contact-layout page-content">
        <aside className="contact-info">
          <a href="tel:+447346818967">
            <Phone />
            <span>
              Give us a ring<strong>07346 818967</strong>
            </span>
          </a>
          <a href="mailto:info@binsmithlondon.com">
            <Mail />
            <span>
              Drop us a line<strong>info@binsmithlondon.com</strong>
            </span>
          </a>
          <section>
            <Clock3 />
            <span>
              No waiting around
              <strong>We aim to reply within one working day.</strong>
            </span>
          </section>
          <p>
            For an existing booking, please use the email address you booked
            with.
          </p>
          <p>
            Looking for driveway or patio pressure washing? Ask us about that,
            too.
          </p>
        </aside>
        <Suspense fallback={<p>Loading contact form…</p>}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}
