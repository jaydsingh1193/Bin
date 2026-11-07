"use client";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { normalisePostcode } from "@/lib/content";
import {
  Consent,
  FormMeta,
  FormPrivacyNote,
  PostcodeField,
  TextField,
  SelectField,
  submitDestination,
} from "./form-fields";

const topics = [
  "General question",
  "Coverage enquiry",
  "Existing booking or cancellation",
  "Privacy request",
];
const businessTypes = [
  "Block / managing agent",
  "Restaurant / pub / café",
  "Other business",
];

function BusinessFields({ selectedType }: { selectedType: string }) {
  return (
    <>
      <TextField
        label="Company or building"
        name="organisation"
        autoComplete="organization"
        maxLength={200}
      />
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
      />
      <TextField
        label="Phone number"
        name="phone"
        type="tel"
        autoComplete="tel"
        maxLength={30}
      />
      <SelectField
        key={selectedType}
        label="Type of property"
        name="type"
        options={businessTypes}
        defaultValue={selectedType}
      />
      <PostcodeField />
    </>
  );
}

function ContactFields({ topic }: { topic: string }) {
  return (
    <>
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        maxLength={254}
      />
      <SelectField
        key={topic}
        label="What’s it about?"
        name="topic"
        options={topics}
        defaultValue={topic}
        full
      />
    </>
  );
}

function MessageField({
  business,
  postcode,
}: {
  business: boolean;
  postcode: string | null;
}) {
  return (
    <label className="full">
      {business
        ? "Tell us about your bins and preferred frequency"
        : "Your message"}
      <Textarea
        name={business ? "details" : "message"}
        required={!business}
        maxLength={4000}
        rows={5}
        defaultValue={
          postcode
            ? `Could you confirm whether you can clean bins at ${postcode}?`
            : ""
        }
        placeholder={
          business
            ? "Number and size of bins, access arrangements, and anything else we should know…"
            : "How can we help?"
        }
      />
    </label>
  );
}

export function ContactForm({ business = false }: { business?: boolean }) {
  const params = useSearchParams();
  const topic = topics.includes(params.get("topic") ?? "")
    ? params.get("topic")!
    : topics[0];
  const selectedType = businessTypes.includes(params.get("type") ?? "")
    ? params.get("type")!
    : businessTypes[0];
  const postcode = normalisePostcode(params.get("postcode") ?? "");
  const name = business ? "quote" : "contact";
  return (
    <form
      className="enquiry-form"
      action={submitDestination}
      method="POST"
      name={name}
    >
      <FormMeta name={name} />
      <section className="form-fields">
        <TextField
          label="Your name"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
        />
        {business ? (
          <BusinessFields selectedType={selectedType} />
        ) : (
          <ContactFields topic={topic} />
        )}
        <MessageField business={business} postcode={postcode} />
        {business && <Consent />}
        <FormPrivacyNote />
        <Button className="action action-primary full" type="submit">
          {business ? "Request my quote" : "Send my message"}
          <ArrowRight size={17} />
        </Button>
        <p className="form-fine full">
          Your request is sent to Binsmith London’s existing enquiry service.
        </p>
      </section>
    </form>
  );
}
