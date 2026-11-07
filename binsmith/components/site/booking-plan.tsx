"use client";
import { plans } from "@/lib/content";

type Plan = (typeof plans)[number];
const choices = [
  ...plans,
  {
    id: "one-off",
    name: "One-off deep clean",
    monthly: 24,
    description: "£24 first bin · £11 each extra",
  },
];

export function BookingPlanChoices({
  planId,
  onSelect,
}: {
  planId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <fieldset className="booking-options">
      <legend className="sr-only">Your cleaning plan</legend>
      {choices.map((item) => (
        <label key={item.id} className={planId === item.id ? "chosen" : ""}>
          <input
            type="radio"
            name="plan-choice"
            checked={planId === item.id}
            onChange={() => onSelect(item.id)}
            value={item.id}
          />
          <span>
            <strong>{item.name}</strong>
            <small>{item.description}</small>
          </span>
          <b>
            £{item.monthly}
            <small>{item.id === "one-off" ? "from" : "/mo"}</small>
          </b>
        </label>
      ))}
    </fieldset>
  );
}

export function AnnualChoice({
  plan,
  annual,
  onChange,
}: {
  plan: Plan;
  annual: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="annual-choice">
      <input
        type="checkbox"
        checked={annual}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span>
        Pay yearly and save two months
        <strong>
          £{plan.annual} for the year · Save £{plan.monthly * 12 - plan.annual}
        </strong>
      </span>
    </label>
  );
}

export function BookingSummary({
  plan,
  annual,
}: {
  plan?: Plan;
  annual: boolean;
}) {
  const price = plan ? (annual ? plan.annual : plan.monthly) : 24;
  const period = plan ? (annual ? "year" : "month") : "first bin";
  return (
    <aside className="booking-summary">
      <span>
        <strong>{plan?.name ?? "One-off deep clean"}</strong>
        <small>
          {plan ? "Every 4 weeks · 13 cleans a year" : "One deep clean"}
        </small>
      </span>
      <b>
        £{price}
        <small>/{period}</small>
      </b>
    </aside>
  );
}
