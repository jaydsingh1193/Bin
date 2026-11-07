import { CalendarCheck, Trash2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Pick your plan.",
    text: "Tell us your address and choose a plan. We’ll text to confirm your first clean.",
  },
  {
    icon: Trash2,
    title: "Leave your bins out.",
    text: "We visit every four weeks, on your agreed cleaning date. Empty bins, easy access — that’s all we need.",
  },
  {
    icon: Sparkles,
    title: "Enjoy that fresh-bin feeling.",
    text: "Washed, sanitised and deodorised. A photo sent to your phone. All without being home.",
  },
];

export function Steps() {
  return (
    <ol className="steps-grid">
      {steps.map((step, index) => (
        <li key={step.title}>
          <header>
            <span className="step-icon">
              <step.icon size={27} />
            </span>
            <span className="step-number">0{index + 1}</span>
          </header>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
