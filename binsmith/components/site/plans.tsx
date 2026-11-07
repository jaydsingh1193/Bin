"use client";
import { useState } from "react";
import { Check, ArrowRight, Sparkles, Leaf, Trash2, House } from "lucide-react";
import Link from "next/link";
import { plans } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Action } from "./primitives";

const planIcons = [Leaf, Trash2, House];

export function PlanCards({ compact = false }: { compact?: boolean }) {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="plan-selector" aria-label="Cleaning plans">
      <fieldset className="billing-toggle">
        <legend className="sr-only">Billing frequency</legend>
        <Button
          onClick={() => setAnnual(false)}
          aria-pressed={!annual}
          className={!annual ? "selected" : ""}
        >
          Pay monthly
        </Button>
        <Button
          onClick={() => setAnnual(true)}
          aria-pressed={annual}
          className={annual ? "selected" : ""}
        >
          Pay yearly <span>Save 2 months</span>
        </Button>
      </fieldset>
      <section className="plans-grid">
        {plans.map((plan, index) => {
          const Icon = planIcons[index];
          return (
            <article
              className={`plan-card ${plan.id === "household" ? "featured" : ""}`}
              key={plan.id}
            >
              <header className="plan-top">
                <span className="plan-icon">
                  <Icon size={25} />
                </span>
                {plan.id === "household" && (
                  <span className="plan-tag">
                    <Sparkles size={12} />
                    The whole-home plan
                  </span>
                )}
              </header>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price">
                <strong>£{annual ? plan.annual : plan.monthly}</strong>
                <span>/ {annual ? "year" : "month"}</span>
              </p>
              <p className="plan-billing">
                {annual
                  ? `Save £${plan.monthly * 12 - plan.annual} vs paying monthly`
                  : "Billed monthly. Cleaned every 4 weeks."}
              </p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Action
                href={`/book?plan=${plan.id}&billing=${annual ? "annual" : "monthly"}`}
                variant={plan.id === "household" ? "mint" : "outline"}
              >
                Choose {plan.name}
              </Action>
              {!compact && <p className="plan-detail">{plan.detail}</p>}
            </article>
          );
        })}
      </section>
      <p className="pricing-footnote">
        Every plan includes 13 scheduled cleans a year. Base prices shown,
        before the introductory offer.{" "}
        {annual
          ? "Annual cancellation and refund terms confirmed before payment."
          : "Monthly plans: cancel any time."}
      </p>
      <aside className="oneoff-strip">
        <span>
          <strong>Just need a fresh start?</strong> One-off deep cleans from
          £24.
        </span>
        <Link href="/book?plan=one-off">
          Book a one-off <ArrowRight size={16} />
        </Link>
      </aside>
    </section>
  );
}
