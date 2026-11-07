import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQList({ limit = faqs.length }: { limit?: number }) {
  return (
    <section className="faq-list">
      {faqs.slice(0, limit).map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <Plus size={20} />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}
