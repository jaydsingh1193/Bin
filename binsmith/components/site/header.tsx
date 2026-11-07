"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Menu, X, Phone, Sparkles } from "lucide-react";
import { Logo } from "./brand";
import { Button } from "@/components/ui/button";
import { isOfferActive } from "@/lib/content";

const navigation = [
  { href: "/plans", label: "Plans & pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/areas", label: "Our areas" },
  { href: "/business", label: "For business" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {isOfferActive() && (
        <aside className="offer-bar">
          <Sparkles size={14} />
          <span>
            A fresh start, for less.{" "}
            <strong>Your first clean is half price.</strong>
          </span>
          <Link href="/plans">
            See plans <ArrowRight size={13} />
          </Link>
          <span className="offer-date">Join before 31 Jan 2027</span>
        </aside>
      )}
      <header className="site-header">
        <nav className="wrap navigation" aria-label="Main navigation">
          <Logo />
          <nav className="desktop-nav" aria-label="Services">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "active" : ""}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <section className="nav-actions">
            <a
              className="phone-link"
              href="tel:+447346818967"
              aria-label="Call 07346 818967"
            >
              <Phone size={18} />
            </a>
            <Button asChild className="action action-primary nav-cta">
              <Link href="/book">
                Book a clean <ArrowRight size={16} />
              </Link>
            </Button>
            <Button
              className="menu-toggle"
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </section>
        </nav>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <ArrowRight size={17} />
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact us
              <ArrowRight size={17} />
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
