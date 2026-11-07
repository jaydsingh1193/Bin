"use client";
import { useState, useId, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { normalisePostcode, findArea } from "@/lib/content";

export function PostcodeChecker() {
  const id = useId();
  const [postcode, setPostcode] = useState("");
  const [result, setResult] = useState<{
    kind: "invalid" | "covered" | "outside";
    message: string;
    postcode?: string;
  } | null>(null);
  function check(event: FormEvent) {
    event.preventDefault();
    const formatted = normalisePostcode(postcode);
    if (!formatted) {
      setResult({
        kind: "invalid",
        message: "Enter a full UK postcode, such as SW6 1AA.",
      });
      return;
    }
    setPostcode(formatted);
    const area = findArea(formatted);
    setResult({
      kind: area ? "covered" : "outside",
      postcode: formatted,
      message: area
        ? `Good news — ${area.name} is in our usual coverage. We’ll confirm your street and cleaning schedule before you book.`
        : "You’re outside our usual routes. Get in touch and we’ll check whether we can reach your street.",
    });
  }
  return (
    <form className="postcode-checker" onSubmit={check}>
      <label htmlFor={id}>A cleaner bin might be just around the corner.</label>
      <section className="postcode-row">
        <span className="postcode-input">
          <MapPin size={19} />
          <Input
            id={id}
            name="postcode"
            value={postcode}
            maxLength={10}
            onChange={(event) => {
              setPostcode(event.target.value);
              setResult(null);
            }}
            placeholder="Your postcode, e.g. SW6 1AA"
            autoComplete="postal-code"
            required
            aria-invalid={result?.kind === "invalid"}
            aria-describedby={`${id}-result`}
          />
        </span>
        <Button className="action action-primary" type="submit">
          Check my area <ArrowRight size={17} />
        </Button>
      </section>
      <section
        id={`${id}-result`}
        className={`postcode-result ${result?.kind ?? ""}`}
        aria-live="polite"
      >
        {result ? (
          <>
            <p>{result.message}</p>
            {result.kind !== "invalid" && (
              <Link
                href={
                  result.kind === "covered"
                    ? `/book?postcode=${encodeURIComponent(result.postcode ?? "")}`
                    : `/contact?topic=Coverage%20enquiry&postcode=${encodeURIComponent(result.postcode ?? "")}`
                }
              >
                {result.kind === "covered"
                  ? "Find your first clean"
                  : "Ask about your area"}
                <ArrowRight size={16} />
              </Link>
            )}
          </>
        ) : (
          <p>
            We confirm your street and cleaning schedule before you commit.
          </p>
        )}
      </section>
    </form>
  );
}
