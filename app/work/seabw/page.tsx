import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

const projectDetails = [
  { label: "LOCATION", value: "Bangkok, Thailand" },
  { label: "DATE", value: "May 2026" },
  { label: "ROLE", value: "Official Media Partner" },
];

const projectServices = [
  "Event and participating company promotion",
  "On-site interviews",
  "Short-form video production",
  "Social media coverage",
];

const socialLinks = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@realhomiesclub",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@realhomiesclub",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/realhomiesclub",
  },
  {
    label: "X",
    href: "https://x.com/real_BD_2025",
  },
];

const selectedWorkHref = "/#selected-work";

const tiktokVideo = {
  id: "7659635412842974495",
  url: "https://www.tiktok.com/@realhomiesclub/video/7659635412842974495",
};

export default function SeabwProjectPage() {
  return (
    <main className="project-page">
      <PageHeader />

      <section className="project-intro section-shell">
        <Link href={selectedWorkHref} className="project-back">
          <span aria-hidden="true">←</span>
          Back to work
        </Link>

        <div className="project-intro-grid">
          <div>
            <p className="section-label">CONFERENCE MEDIA</p>
            <h1>Southeast Asia Blockchain Week</h1>
          </div>
        </div>

        <p className="project-intro-line">
          Capturing the people, conversations, and ideas shaping Web3
          across Southeast Asia.
        </p>
      </section>

      <section className="project-hero section-shell">
        <Image
          src="/seabw-2026.jpeg"
          alt="Southeast Asia Blockchain Week event installation in Bangkok"
          width={1600}
          height={1200}
          priority
          sizes="(max-width: 900px) 100vw, 65vw"
        />

        <div className="project-intro-meta">
          {projectDetails.map(({ label, value }) => (
            <div key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="project-story section-shell">
        <div className="project-story-section">
          <p className="project-story-label">OVERVIEW</p>

          <div className="project-story-copy">
            <p>
              Southeast Asia Blockchain Week brought together founders,
              builders, investors, and ecosystem teams from across the
              region in Bangkok.
            </p>

            <p>
              As an official media partner, real homies club joined the
              event to capture the people and conversations behind the
              projects.
            </p>
          </div>
        </div>

        <div className="project-story-section">
          <p className="project-story-label">WHAT WE DID</p>

          <div className="project-services">
            {projectServices.map((service, index) => (
              <div key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-content section-shell">
        <div className="project-content-heading">
          <div>
            <p className="section-label">STORY FROM THE EVENT</p>
            <h2>A conversation captured on the ground.</h2>
          </div>

          <p>
            A short-form conversation filmed at Southeast Asia Blockchain
            Week and shared through real homies club.
          </p>
        </div>

        <div className="tiktok-feature">
          <div className="tiktok-player-wrap">
            <iframe
              src={`https://www.tiktok.com/player/v1/${tiktokVideo.id}`}
              title="Real Homies Club at Southeast Asia Blockchain Week"
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="tiktok-feature-copy">
            <p className="project-story-label">
              real homies club · TIKTOK
            </p>

            <h3>Meet the people behind the ideas.</h3>

            <p>
              Short conversations designed to make the people and stories
              behind Web3 easier to discover.
            </p>

            <a
              href={tiktokVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button project-external-button"
            >
              Watch on TikTok
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="project-next section-shell">
        <p className="section-label">KEEP EXPLORING</p>

        <div className="project-next-content">
          <h2>
            More stories
            <br />
            are on the way.
          </h2>

          <Link
            href={selectedWorkHref}
            className="button project-back-button"
          >
            Back to selected work
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div>
          <p className="section-label light">CONTACT</p>

          <h2>Have a story worth telling?</h2>

          <p>
            Interviews, event coverage, partnerships, and curious ideas
            are all welcome.
          </p>
        </div>

        <a
          href="mailto:hello@realhomies.club"
          className="button button-light"
        >
          hello@realhomies.club
        </a>
      </section>

      <PageFooter />
    </main>
  );
}

function PageHeader() {
  return (
    <header className="nav-wrap">
      <Link
        href="/#home"
        className="brand"
        aria-label="Real Homies Club home"
      >
        <Image
          src="/real-homies-logo.png"
          alt=""
          width={52}
          height={52}
          className="brand-mark"
          priority
        />

        <span>REAL HOMIES CLUB</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navigationLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <span className="menu-line" />
          <span className="menu-line" />
          <span className="menu-line" />
        </summary>

        <nav
          className="mobile-menu-links"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map(({ label, href }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="footer section-shell">
      <span>© 2026 real homies club</span>

      <div className="footer-social">
        {socialLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}