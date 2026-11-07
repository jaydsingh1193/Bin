import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Logo } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="wrap footer-grid">
        <section className="footer-brand">
          <Logo />
          <p>
            A little less grime.
            <br />A little more time.
          </p>
          <span>Bin & caddy cleaning for London homes.</span>
        </section>
        <nav aria-label="Explore">
          <h3>Make yourself at home</h3>
          <Link href="/plans">Plans & pricing</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/areas">Where we clean</Link>
          <Link href="/business">For blocks & businesses</Link>
        </nav>
        <nav aria-label="Help">
          <h3>A helping hand</h3>
          <Link href="/faq">Common questions</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/contact?topic=Existing%20booking%20or%20cancellation">
            Manage your plan
          </Link>
          <Link href="/privacy">Privacy notice</Link>
        </nav>
        <section className="footer-contact">
          <h3>Let’s talk bins.</h3>
          <a href="tel:+447346818967">
            <Phone size={16} />
            07346 818967
          </a>
          <a href="mailto:info@binsmithlondon.com">
            <Mail size={16} />
            info@binsmithlondon.com
          </a>
          <Link href="/contact">
            Ask us anything <ArrowUpRight size={16} />
          </Link>
          <span>We aim to reply within one working day.</span>
        </section>
      </section>
      <section className="wrap footer-bottom">
        <span>© 2026 Binsmith London</span>
        <span>
          Hammersmith · Fulham · Kensington · Chelsea · Battersea · Putney
        </span>
      </section>
    </footer>
  );
}
