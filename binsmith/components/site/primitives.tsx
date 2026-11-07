import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/content";

export function Action({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "mint" | "outline" | "light";
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Button asChild className={`action action-${variant} ${className}`}>
      <Link href={href}>
        {children}
        {arrow && <ArrowRight size={18} />}
      </Link>
    </Button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centre = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  centre?: boolean;
}) {
  return (
    <header className={`section-heading ${centre ? "centred" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <header className="page-heading wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export function TickList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tick-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={17} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function HeroPhoto({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      className={`service-photo ${className}`}
      src={assetPath("/images/london-home.jpg")}
      alt="A spotless green wheelie bin outside a leafy London home; illustrative image"
      width={1536}
      height={1024}
      priority={priority}
      unoptimized
    />
  );
}

export function ClosingCTA() {
  return (
    <section className="closing wrap">
      <Sparkles className="closing-spark" size={48} />
      <Eyebrow>One less thing on your list</Eyebrow>
      <h2>Leave the dirty work to us.</h2>
      <p>Fresh bins every four weeks. More time for everything else.</p>
      <Action href="/plans" variant="mint">
        Find your plan
      </Action>
      <span className="small-note">
        Plans from £7/month · No payment to request a clean
      </span>
    </section>
  );
}
