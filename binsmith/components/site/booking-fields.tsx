"use client";
import { Textarea } from "@/components/ui/textarea";
import { Consent, TextField, SelectField, PostcodeField } from "./form-fields";

const collectionDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Not sure",
];
const binChoices = [
  "1 wheelie bin",
  "2 wheelie bins",
  "3 or more wheelie bins",
  "Food caddy only",
  "My own dustbin",
  "Not sure",
];

export function BookingDetails({ postcode }: { postcode: string }) {
  return (
    <section className="form-fields">
      <TextField
        label="Full name"
        name="name"
        autoComplete="name"
        maxLength={100}
        required
        placeholder="Your full name"
      />
      <TextField
        label="Mobile number"
        name="mobile"
        type="tel"
        autoComplete="tel"
        maxLength={30}
        required
        placeholder="Your mobile number"
      />
      <TextField
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        maxLength={254}
        required
        placeholder="you@example.com"
        full
      />
      <TextField
        label="House number and street"
        name="address"
        autoComplete="street-address"
        maxLength={200}
        required
        placeholder="e.g. 24, Fulham Road"
        full
      />
      <PostcodeField initial={postcode} />
      <SelectField
        label="Bin collection day"
        name="collection-day"
        options={collectionDays}
        placeholder="Choose a day"
        required
        defaultValue=""
      />
      <SelectField
        label="What bins do you have?"
        name="bins"
        options={binChoices}
        placeholder="Select your bins"
        required
        defaultValue=""
        full
      />
      <label className="full">
        Where can we find them? <span className="optional">(optional)</span>
        <Textarea
          name="access-notes"
          maxLength={1500}
          placeholder="e.g. In the front garden, next to the gate. Please don’t include access codes or payment details."
        />
      </label>
      <Consent />
    </section>
  );
}
