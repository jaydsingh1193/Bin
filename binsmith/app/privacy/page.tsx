import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/site/primitives";
export const metadata: Metadata = { title: "Privacy notice" };
export default function PrivacyPage() {
  return (
    <>
      <PageHeading
        eyebrow="Your details, looked after"
        title="Privacy notice"
        description="Service notice last updated 5 November 2026. Preview hosting information added 7 November 2026."
      />
      <article className="wrap narrow prose page-content">
        <h2>Who we are</h2>
        <p>
          Binsmith London is a bin cleaning service covering Hammersmith,
          Fulham, Kensington, Chelsea, Battersea and Putney. Binsmith London is
          responsible for the personal details you give us. For questions about
          your information, use our{" "}
          <Link href="/contact?topic=Privacy%20request">contact form</Link> and
          select “Privacy request”; no booking information is required.
        </p>
        <h2>What we collect and why</h2>
        <p>
          For booking requests we collect your name, phone number, email,
          address, postcode, collection day and notes about where your bins are.
          We use these to arrange and carry out your cleans, take payment, send
          before-and-after photos, and reply to your questions. Our lawful basis
          for bookings is to take steps towards, and carry out, a contract with
          you.
        </p>
        <p>
          For general enquiries we collect your name, email, topic and message
          to respond, relying on our legitimate interest in answering enquiries.
          We handle privacy requests to comply with our legal obligations.
          Please do not send payment details or gate codes through these forms.
        </p>
        <h2>Who we share it with</h2>
        <p>
          This preview is hosted on GitHub Pages. Booking and enquiry forms
          submit directly to the existing Binsmith London website, whose form
          entries are stored by Netlify. If you take a subscription, your
          payment details are handled by a payment provider, not collected on
          this website. We identify that provider and explain payment
          arrangements before you pay.
        </p>
        <p>
          Google Fonts receives your IP address when your browser requests the
          fonts used on this website. We never sell your details or use them for
          unrelated marketing.
        </p>
        <h2>How long we keep it</h2>
        <p>
          We keep information needed to provide your service while you are a
          customer. Financial records needed for tax purposes are kept for up to
          six years afterwards; access notes and other service information are
          not kept merely for tax purposes. Enquiries that don’t become
          customers are deleted after 12 months.
        </p>
        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete your details by using our{" "}
          <Link href="/contact?topic=Privacy%20request">contact form</Link>. If
          you are unhappy with how we handle your data, you can complain to the
          Information Commissioner’s Office at{" "}
          <a href="https://ico.org.uk">ico.org.uk</a>.
        </p>
      </article>
    </>
  );
}
