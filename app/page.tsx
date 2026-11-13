"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Headphones,
  Menu,
  Mic2,
  PenLine,
  UsersRound,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const heroImage =
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=88";
const communityImage =
  "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?auto=format&fit=crop&w=1400&q=88";
const bookImage =
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=88";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "The Forum", href: "#the-forum" },
  { label: "The Book", href: "#the-book" },
  { label: "Blog", href: "#insights" },
  { label: "Podcast", href: "#insights" },
  { label: "Videos", href: "#insights" },
  { label: "Events", href: "#insights" },
];

function subscribeToFocus(callback: () => void) {
  window.addEventListener("focus", callback);
  return () => window.removeEventListener("focus", callback);
}

function getCurrentYear() {
  return new Date().getFullYear();
}

function getServerYear() {
  return 2026;
}

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "quiet";
  className?: string;
  onClick?: () => void;
};

function LinkButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: LinkButtonProps) {
  const variants = {
    primary: "default",
    outline: "outline",
    quiet: "quiet",
  } as const;

  return (
    <Button asChild variant={variants[variant]} className={className}>
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </Button>
  );
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="The African Century home"
      className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <span
        className={`grid shrink-0 place-items-center rounded-full border border-gold/80 text-gold ring-1 ring-gold/20 ring-offset-2 ring-offset-navy-deep ${compact ? "size-9" : "size-11"}`}
      >
        <span className="font-display text-sm font-bold">AC</span>
      </span>
      <span className="leading-none">
        <strong className="block font-display text-sm tracking-[0.18em] text-cream">
          AFRICAN CENTURY
        </strong>
        {!compact && (
          <small className="mt-1 block text-[0.58rem] uppercase tracking-[0.32em] text-gold/75">
            From Promise to Power
          </small>
        )}
      </span>
    </a>
  );
}

function NavbarBrandMark() {
  return (
    <span className="site-brand-mark" aria-hidden="true">
      <span className="site-brand-mark__seal">
        <span className="site-brand-mark__continent">A</span>
      </span>
    </span>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#home" className="nav-brand" aria-label="African Century home">
          <NavbarBrandMark />
          <span className="nav-brand__divider" />
          <span className="nav-brand__title">The African Century</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={index === 0 ? "is-active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#join" className="nav-join">
          Join the Forum
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <nav id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={index === 0 ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {item.label}
              <ArrowRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <p>From Promise to Power</p>
          <span>Nairobi · Africa · The World</span>
        </div>
      </div>
    </header>
  );
}

function ForumSeal() {
  return (
    <div
      className="forum-seal mx-auto grid size-28 place-items-center rounded-full"
      aria-label="African Century Forum, Africa"
    >
      <div className="grid size-20 place-items-center rounded-full border border-gold/50 text-center">
        <span className="font-display text-2xl font-bold leading-none text-gold">
          ACF
        </span>
        <span className="-mt-5 text-[0.48rem] font-bold uppercase tracking-[0.32em] text-gold/80">
          Africa
        </span>
      </div>
    </div>
  );
}

function BookMockup() {
  return (
    <div
      className="book-scene shrink-0"
      aria-label="The African Century book cover mockup"
    >
      <div className="book-cover" style={{ backgroundImage: `url(${bookImage})` }}>
        <div className="book-overlay" />
        <div className="book-content">
          <span className="text-[0.48rem] font-semibold uppercase tracking-[0.36em] text-gold-light/90">
            A defining vision for our time
          </span>
          <strong className="font-display text-2xl leading-[0.94] text-gold-light">
            THE
            <br />
            AFRICAN
            <br />
            CENTURY
          </strong>
          <em className="font-display text-xs text-cream">
            From Promise to Power
          </em>
          <span className="mt-auto text-[0.58rem] font-bold tracking-[0.22em] text-cream">
            PETE ONDENG
          </span>
        </div>
      </div>
    </div>
  );
}

function ContentCards() {
  return (
    <div className="content-grid">
      <motion.article
        id="join"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="scroll-mt-24"
      >
        <Card className="premium-card forum-card">
          <div className="eyebrow">
            <UsersRound size={15} aria-hidden="true" />
            <span>Shape what comes next</span>
          </div>
          <h2 className="card-title">Join the Forum</h2>
          <LinkButton href="#footer" className="w-full">
            Join the Forum <ArrowRight size={17} aria-hidden="true" />
          </LinkButton>
          <p className="mt-4 text-center font-display text-lg italic text-cream">
            Be Part of Africa’s Next Chapter
          </p>
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
          <ForumSeal />
          <p className="mx-auto mt-5 max-w-xs text-center text-sm leading-relaxed text-cream/65">
            The African Century Forum
            <span className="mx-2 text-gold">—</span>
            Shaping our future together
          </p>
        </Card>
      </motion.article>

      <motion.article
        id="the-book"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="scroll-mt-24"
      >
        <Card className="premium-card book-card">
          <div className="eyebrow">
            <BookOpen size={15} aria-hidden="true" />
            <span>The defining work</span>
          </div>
          <h2 className="card-title">The Book</h2>
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-start">
            <BookMockup />
            <div className="flex flex-1 flex-col">
              <p className="text-sm leading-7 text-navy/75">
                <strong className="font-semibold text-navy">
                  The African Century: From Promise to Power
                </strong>{" "}
                is a bold vision for an Africa that turns its immense potential
                into shared prosperity and global influence.
              </p>
              <LinkButton href="#footer" className="mt-6 w-full sm:w-fit">
                Purchase the Book <ArrowRight size={17} aria-hidden="true" />
              </LinkButton>
            </div>
          </div>
        </Card>
      </motion.article>

      <motion.article
        id="the-forum"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25 }}
        className="community-card-container scroll-mt-24"
      >
        <Card className="community-card">
          <div
            role="img"
            aria-label="A community gathered in vibrant traditional attire"
            className="absolute inset-0 size-full bg-cover bg-center"
            style={{ backgroundImage: `url(${communityImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/25 to-transparent" />
          <div className="relative mt-auto p-7">
            <div className="eyebrow text-gold-light">
              <UsersRound size={15} aria-hidden="true" />
              <span>One people, many voices</span>
            </div>
            <h2 className="font-display text-3xl text-cream">Our Community</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/75">
              Proud, inventive and united by a future we will build together.
            </p>
          </div>
        </Card>
      </motion.article>
    </div>
  );
}

const secondaryLinks = [
  { label: "The Author", icon: PenLine },
  { label: "The African Century Blog", icon: Mic2 },
  { label: "The African Century Podcast", icon: Headphones },
  { label: "Videos", icon: Video },
  { label: "Events", icon: CalendarDays },
];

function SecondaryLinks() {
  return (
    <nav
      id="insights"
      aria-label="Explore more"
      className="page-shell scroll-mt-24 py-10 md:py-14"
    >
      <div className="mb-5 flex items-center gap-4">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-gold">
          Explore the movement
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-gold/35 to-transparent" />
      </div>
      <div className="secondary-grid">
        {secondaryLinks.map(({ label, icon: Icon }) => (
          <a key={label} href="#footer" className="secondary-link group">
            <span className="grid size-10 place-items-center rounded-full border border-gold/25 bg-gold/5 text-gold">
              <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.12em]">
              {label}
            </span>
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="ml-auto text-gold/60 transition-transform group-hover:translate-x-1"
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

function Footer() {
  const year = useSyncExternalStore(
    subscribeToFocus,
    getCurrentYear,
    getServerYear,
  );

  return (
    <footer id="footer" className="border-t border-gold/15 bg-navy-deep/80">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div id="about" className="scroll-mt-24">
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-cream/55">
            A compelling vision for an Africa that leads with confidence,
            creates with purpose, and turns promise into power.
          </p>
        </div>
        <div className="md:text-right">
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a key={item} href="#home" className="footer-link">
                {item}
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-cream/40">
            © {year} The African Century. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <div id="home" className="cinematic-page">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div
        className="landscape"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="atmosphere" aria-hidden="true" />
      <Navigation />

      <main id="main-content" className="relative z-10">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="page-shell pb-8 pt-8 text-center md:pb-12 md:pt-12"
        >
          <h1 className="hero-title">The African Century</h1>
          <div className="mx-auto mt-5 flex max-w-2xl items-center gap-5 md:mt-7">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
            <p className="font-display text-lg italic tracking-[0.08em] text-cream/90 md:text-2xl">
              From Promise to Power
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-cream/65 md:text-base">
            A movement, a book, and a shared conviction that Africa’s greatest
            chapter is ours to write.
          </p>
        </motion.section>

        <section
          aria-label="The African Century initiatives"
          className="page-shell"
        >
          <ContentCards />
        </section>

        <SecondaryLinks />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
