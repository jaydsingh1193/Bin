import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  CalendarDays,
  Check,
  Droplets,
  ShieldCheck,
  Camera,
  House,
} from "lucide-react";
import {
  Action,
  Eyebrow,
  SectionHeading,
  HeroPhoto,
  ClosingCTA,
} from "@/components/site/primitives";
import { Steps } from "@/components/site/steps";
import { PlanCards } from "@/components/site/plans";
import { PostcodeChecker } from "@/components/site/postcode-checker";
import { FAQList } from "@/components/site/faq-list";
import { areas } from "@/lib/content";

function HomeHero() {
  return (
    <section className="home-hero wrap">
      <section className="hero-copy">
        <Eyebrow>London’s fresh-bin feeling</Eyebrow>
        <h1>
          Love your home.
          <br />
          Leave the{" "}
          <span>
            dirty
            <br className="desktop-break" /> work
          </span>{" "}
          to us.
        </h1>
        <p>
          Beautifully clean bins. No smells, no scrubbing,
          <br className="desktop-break" /> no second thought. We’ll take it from
          here.
        </p>
        <section className="hero-actions">
          <Action href="/plans">Find your plan</Action>
          <Link className="text-link" href="/how-it-works">
            How it works <ArrowRight size={17} />
          </Link>
        </section>
        <ul className="hero-reassurance">
          <li>
            <Check size={15} />
            From £7/month
          </li>
          <li>
            <Check size={15} />
            Cancel monthly plans any time
          </li>
        </ul>
      </section>
      <figure className="hero-visual">
        <HeroPhoto priority />
        <span className="photo-label">
          <MapLabel />
          West & south-west London
        </span>
        <aside className="fresh-badge">
          <Sparkles size={25} />
          <span>
            Fresh bins.<strong>Zero effort.</strong>
          </span>
        </aside>
        <figcaption className="hero-photo-note">
          A fresh start, right on your doorstep.
        </figcaption>
      </figure>
    </section>
  );
}

function MapLabel() {
  return <span className="location-dot" />;
}

function Benefits() {
  return (
    <section className="benefits-strip">
      <section className="wrap benefits-grid">
        <p>
          <CalendarDays />
          <span>
            <strong>Every 4 weeks</strong>A fresh start, on repeat
          </span>
        </p>
        <p>
          <House />
          <span>
            <strong>No need to be home</strong>We work around your day
          </span>
        </p>
        <p>
          <Droplets />
          <span>
            <strong>Properly clean</strong>Washed, sanitised, deodorised
          </span>
        </p>
        <p>
          <Leaf />
          <span>
            <strong>Dirty water taken away</strong>Never down your drain
          </span>
        </p>
      </section>
    </section>
  );
}

function TheClean() {
  return (
    <section className="clean-section">
      <section className="wrap clean-layout">
        <section className="clean-visual">
          <span className="clean-kicker">THE BINSMITH TREATMENT</span>
          <section className="bin-illustration" aria-hidden="true">
            <span className="bin-lid" />
            <span className="bin-body">
              <Sparkles size={52} />
            </span>
            <span className="bin-wheel left" />
            <span className="bin-wheel right" />
            <Sparkles className="spark-one" size={30} />
            <Sparkles className="spark-two" size={20} />
          </section>
          <span className="clean-stamp">
            Inside. Outside.
            <br />
            <strong>Lovely all over.</strong>
          </span>
        </section>
        <section>
          <SectionHeading
            eyebrow="A little care goes a long way"
            title={
              <>
                A clean you can see.
                <br />
                And a difference you can smell.
              </>
            }
            description="The bin might be the last thing on your list. It’s the first thing on ours."
          />
          <ul className="clean-details">
            <li>
              <Droplets />
              <span>
                <strong>Goodbye, grime.</strong>A high-pressure wash lifts away
                the mess, inside and out.
              </span>
            </li>
            <li>
              <ShieldCheck />
              <span>
                <strong>Hello, fresh.</strong>Sanitised and deodorised to tackle
                germs and lingering smells.
              </span>
            </li>
            <li>
              <Camera />
              <span>
                <strong>See it for yourself.</strong>A before-and-after photo
                goes straight to your phone.
              </span>
            </li>
          </ul>
          <Link className="text-link" href="/how-it-works">
            Meet your new cleaning routine <ArrowRight size={18} />
          </Link>
        </section>
      </section>
    </section>
  );
}

function AreaPreview() {
  return (
    <section className="area-preview wrap">
      <section>
        <SectionHeading
          eyebrow="Local streets. Lovely bins."
          title={
            <>
              Made for your
              <br />
              corner of London.
            </>
          }
          description="From Fulham front gardens to Putney doorsteps, we’re keeping six neighbourhoods fresh — one bin at a time."
        />
        <PostcodeChecker />
      </section>
      <section className="area-panel">
        <span className="area-panel-label">
          <span className="location-dot" />
          YOUR NEIGHBOURHOOD, COVERED
        </span>
        <section className="area-name-grid">
          {areas.map((area) => (
            <Link key={area.name} href="/areas">
              <span>
                {area.name}
                <small>{area.districts.join(" · ")}</small>
              </span>
              <ArrowRight size={18} />
            </Link>
          ))}
        </section>
        <p>Two sides of the river. One less chore.</p>
      </section>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />
      <Benefits />
      <section className="section wrap">
        <header className="heading-row">
          <SectionHeading
            eyebrow="Life’s busy. Bin day shouldn’t be."
            title={
              <>
                One less chore.
                <br />
                Three simple steps.
              </>
            }
          />
          <Link href="/how-it-works" className="text-link">
            Here’s how it works <ArrowRight size={18} />
          </Link>
        </header>
        <Steps />
      </section>
      <TheClean />
      <section className="section wrap" id="plans">
        <SectionHeading
          eyebrow="A little every month. A lot less hassle."
          title="Fresh bins. Fair prices."
          description="Choose the clean that fits your home. We’ll handle the rest."
          centre
        />
        <PlanCards compact />
      </section>
      <AreaPreview />
      <section className="business-teaser wrap">
        <span className="business-icon">
          <House size={34} />
        </span>
        <section>
          <Eyebrow>Good for business, too</Eyebrow>
          <h2>Clean bins. A better first impression.</h2>
          <p>
            Regular cleaning for mansion blocks, cafés, restaurants and shared
            spaces.
          </p>
        </section>
        <Action href="/business" variant="outline">
          Explore business cleaning
        </Action>
      </section>
      <section className="section wrap faq-preview">
        <section>
          <SectionHeading
            eyebrow="Good questions. Straight answers."
            title={
              <>
                A few things
                <br />
                worth knowing.
              </>
            }
          />
          <Link className="text-link" href="/faq">
            All your questions answered <ArrowRight size={18} />
          </Link>
        </section>
        <FAQList limit={4} />
      </section>
      <ClosingCTA />
    </>
  );
}
