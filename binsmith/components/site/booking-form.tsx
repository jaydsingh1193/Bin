"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/content";
import { FormMeta, submitDestination } from "./form-fields";
import { BookingDetails } from "./booking-fields";
import {
  AnnualChoice,
  BookingPlanChoices,
  BookingSummary,
} from "./booking-plan";

type Plan = (typeof plans)[number];

function BookingProgress({ step }: { step: number }) {
  return (
    <ol className="booking-progress">
      <li
        className={step === 1 ? "current" : "complete"}
        aria-current={step === 1 ? "step" : undefined}
      >
        <span>{step === 1 ? "1" : <Check size={15} />}</span>Your plan
      </li>
      <li
        className={step === 2 ? "current" : ""}
        aria-current={step === 2 ? "step" : undefined}
      >
        <span>2</span>Your details
      </li>
    </ol>
  );
}

function DetailsStep({
  active,
  plan,
  annual,
  postcode,
  onBack,
}: {
  active: boolean;
  plan?: Plan;
  annual: boolean;
  postcode: string;
  onBack: () => void;
}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (active) heading.current?.focus();
  }, [active]);
  return (
    <section hidden={!active}>
      <Button
        type="button"
        variant="ghost"
        className="back-step"
        onClick={onBack}
      >
        <ArrowLeft size={16} />
        Change your plan
      </Button>
      <h2 ref={heading} tabIndex={-1} className="step-heading">
        Let’s get your first clean booked.
      </h2>
      <BookingSummary plan={plan} annual={annual} />
      <BookingDetails postcode={postcode} />
      <Button type="submit" className="action action-primary full-button">
        Request my first clean <ArrowRight size={18} />
      </Button>
      <p className="form-disclosure">
        <ShieldCheck size={16} />
        No payment now. Your request goes to Binsmith London’s existing booking
        service.
      </p>
      <p className="form-fine">
        We’ll text within one working day to confirm availability, your clean
        date, payment amount and any introductory discount. Annual cancellation
        and refund terms are confirmed before payment.
      </p>
    </section>
  );
}

export function BookingForm() {
  const params = useSearchParams();
  const initialPlan =
    plans.find((plan) => plan.id === params.get("plan"))?.id ??
    (params.get("plan") === "one-off" ? "one-off" : "household");
  const [planId, setPlanId] = useState<string>(initialPlan);
  const [annual, setAnnual] = useState(params.get("billing") === "annual");
  const [step, setStep] = useState(1);
  const plan = plans.find((item) => item.id === planId);
  const billing = plan ? (annual ? "Annual" : "Monthly") : "One-off";
  return (
    <form
      className="booking-form"
      action={submitDestination}
      method="POST"
      name="signup"
    >
      <FormMeta name="signup" />
      <input
        type="hidden"
        name="plan"
        value={plan?.value ?? "One-off deep clean"}
      />
      <input type="hidden" name="billing" value={billing} />
      <BookingProgress step={step} />
      <section hidden={step !== 1}>
        <h2>A little care for your home.</h2>
        <p>Choose the plan that suits your bins.</p>
        <BookingPlanChoices planId={planId} onSelect={setPlanId} />
        {plan && (
          <AnnualChoice plan={plan} annual={annual} onChange={setAnnual} />
        )}
        <Button
          type="button"
          className="action action-primary full-button"
          onClick={() => setStep(2)}
        >
          Continue to your details <ArrowRight size={18} />
        </Button>
      </section>
      <DetailsStep
        active={step === 2}
        plan={plan}
        annual={annual}
        postcode={params.get("postcode") ?? ""}
        onBack={() => setStep(1)}
      />
    </form>
  );
}
