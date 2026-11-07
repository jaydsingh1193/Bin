"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { normalisePostcode } from "@/lib/content";

export const submitDestination = "https://binsmithlondon.com/thanks";

export function FormMeta({ name }: { name: string }) {
  return (
    <>
      <input type="hidden" name="form-name" value={name} />
      <label className="honeypot" aria-hidden="true">
        Leave this empty
        <Input name="company-website" tabIndex={-1} autoComplete="off" />
      </label>
    </>
  );
}

export function Consent() {
  return (
    <label className="consent">
      <input type="checkbox" name="consent" value="yes" required />
      <span>
        I agree to Binsmith London using these details to arrange my request, as
        explained in the <Link href="/privacy">privacy notice</Link>.
      </span>
    </label>
  );
}

export function TextField({
  label,
  full = false,
  ...props
}: ComponentProps<typeof Input> & { label: string; full?: boolean }) {
  return (
    <label className={full ? "full" : undefined}>
      {label}
      <Input {...props} />
    </label>
  );
}

export function SelectField({
  label,
  options,
  full = false,
  placeholder,
  ...props
}: ComponentProps<"select"> & {
  label: string;
  options: readonly string[];
  full?: boolean;
  placeholder?: string;
}) {
  return (
    <label className={full ? "full" : undefined}>
      {label}
      <select {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function PostcodeField({ initial = "" }: { initial?: string }) {
  return (
    <TextField
      label="Postcode"
      name="postcode"
      autoComplete="postal-code"
      defaultValue={initial}
      maxLength={10}
      required
      placeholder="e.g. SW6 1AA"
      onChange={(event) => event.target.setCustomValidity("")}
      onBlur={(event) => {
        const formatted = normalisePostcode(event.target.value);
        event.target.setCustomValidity(
          formatted || !event.target.value
            ? ""
            : "Enter a full UK postcode, such as SW6 1AA.",
        );
        if (formatted) event.target.value = formatted;
      }}
    />
  );
}

export function FormPrivacyNote() {
  return (
    <p className="form-fine full">
      We use your details to reply to your request. Please don’t include payment
      details or access codes. Read our{" "}
      <Link href="/privacy">privacy notice</Link>.
    </p>
  );
}
