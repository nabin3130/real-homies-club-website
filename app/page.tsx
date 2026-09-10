import { AboutVideo } from "./components/AboutVideo";
import { WorkGrid } from "./components/WorkGrid";
import { MobileMenu } from "./components/MobileMenu";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const workItems = [
  {
    number: "01",
    category: "CONFERENCE MEDIA",
    title: "Stories from where Web3 happens.",
    description:
      "On-site conversations with founders, builders, and ecosystem teams.",
    cta: "View conference work",
    href: "#selected-work",
  },
  {
    number: "02",
    category: "EVENTS & COMMUNITY",
    title: "We bring the right people into the room.",
    description:
      "Meetups, side events, and community gatherings built around real conversations.",
    cta: "Explore our events",
    href: "#contact",
  },
  {
    number: "03",
    category: "MEDIA BRAND",
    title: "Web3 stories, made for the feed.",
    description:
      "Short-form interviews and social content featuring the people behind the ideas.",
    cta: "Watch our content",
    href: "https://www.tiktok.com/@realhomiesclub",
    external: true,
  },
];

const featuredTeams = [
  {
    name: "Alchemy Pay",
    href: "https://alchemypay.org/",
    logo: "/logos/alchemypay.png",
  },
  {
    name: "AnomaPay",
    href: "https://anomapay.app/",
    logo: "/logos/anomapay.png",
  },
  {
    name: "BitSaving",
    href: "https://bitsaving.kr/",
    logo: "/logos/bitsaving.png",
  },
  {
    name: "Bonanza Lab",
    href: "https://dayfin.co/eng/",
    logo: "/logos/bonanzalab.png",
  },
  {
    name: "box.fun",
    href: "https://box.fun/",
    logo: "/logos/boxfun.png",
  },
  {
    name: "Cede Hub",
    href: "https://cedehub.io/",
    logo: "/logos/cedehub.png",
  },
  {
    name: "Chinsanity",
    href: "https://linktr.ee/chinsanityshow",
    logo: "/logos/chinsanity.png",
  },
  {
    name: "Collectible Con",
    href: "https://collectiblecon.xyz/",
    logo: "/logos/collectiblecon.webp",
  },
  {
    name: "Dash",
    href: "https://www.dash.org/",
    logo: "/logos/dash.png",
  },
  {
    name: "DogeOS",
    href: "https://dogeos.com/",
    logo: "/logos/dogeos.png",
  },
  {
    name: "Embd Finance",
    href: "https://embd.finance/",
    logo: "/logos/embd.png",
  },
  {
    name: "ETHGas",
    href: "https://www.ethgas.com/",
    logo: "/logos/ethgas.png",
  },
  {
    name: "Folks Finance",
    href: "https://folks.finance/",
    logo: "/logos/folks.avif",
  },
  {
    name: "Frax Finance",
    href: "https://frax.finance/",
    logo: "/logos/frax.png",
  },
  {
    name: "Genzio",
    href: "https://www.genziomedia.com/",
    logo: "/logos/genzio.png",
  },
  {
    name: "Janus Solutions",
    href: "https://janus.solutions/",
    logo: "/logos/janus.svg",
  },
  {
    name: "Lagrange",
    href: "https://lagrange.dev/",
    logo: "/logos/lagrange.svg",
  },
  {
    name: "Mozi Finance",
    href: "https://mozi.finance/",
    logo: "/logos/mozi.png",
  },
  {
    name: "Nansen AI",
    href: "https://nansen.ai/",
    logo: "/logos/nansen.png",
  },
  {
    name: "P2P.org",
    href: "https://www.p2p.org/",
    logo: "/logos/p2p.png",
  },
  {
    name: "Paybis",
    href: "https://paybis.com/",
    logo: "/logos/paybis.png",
  },
  {
    name: "Pudgy Penguins",
    href: "https://pudgypenguins.com/",
    logo: "/logos/pudgy.png",
  },
  {
    name: "Radius",
    href: "https://www.theradius.xyz/",
    logo: "/logos/radius.svg",
  },
  {
    name: "RedStone",
    href: "https://www.redstone.finance/",
    logo: "/logos/redstone.png",
  },
  {
    name: "SmashFi",
    href: "https://smashfi.me/",
    logo: "/logos/smashfi.png",
  },
  {
    name: "Solayer",
    href: "https://solayer.org/",
    logo: "/logos/solayer.png",
  },
  {
    name: "Squid",
    href: "https://www.squidrouter.com/",
    logo: "/logos/squid.png",
  },
  {
    name: "Station X",
    href: "https://stationx.network/",
    logo: "/logos/stationx.svg",
  },
  {
    name: "Status Network",
    href: "https://status.network/",
    logo: "/logos/status.png",
  },
  {
    name: "Superteam Thailand",
    href: "https://th.superteam.fun/",
    logo: "/logos/superteamth.png",
  },
  {
    name: "Surf",
    href: "https://asksurf.ai/",
    logo: "/logos/surf.png",
  },
  {
    name: "Tether",
    href: "https://tether.io/",
    logo: "/logos/tether.svg",
  },
  {
    name: "TicketDaddy",
    href: "https://ticketdaddy.io/",
    logo: "/logos/ticketdaddy.png",
  },
  {
    name: "WalletConnect",
    href: "https://walletconnect.com/",
    logo: "/logos/wallet.svg",
  },
  {
    name: "Web3Event",
    href: "https://linktr.ee/web3.events",
    logo: "/logos/web3.png",
  },
];

const interviewUrls: Record<string, string> = {
  Tether: "https://www.tiktok.com/@realhomiesclub/video/7661604952162290974",
  "Pudgy Penguins": "https://www.tiktok.com/@realhomiesclub/video/7657429938210884895",
  Dash: "https://www.tiktok.com/@realhomiesclub/video/7673230728871562527",
  "Collectible Con": "https://www.tiktok.com/@realhomiesclub/video/7676303961720130846",
  "Superteam Thailand": "https://www.tiktok.com/@realhomiesclub/video/7674789121667239198",
  "Nansen AI": "https://www.tiktok.com/@realhomiesclub/video/7659635412842974495",
  Genzio: "https://www.tiktok.com/@realhomiesclub/video/7645847266627947806",
  "Bonanza Lab": "https://www.tiktok.com/@realhomiesclub/video/7639172478513712415",
  Lagrange: "https://www.tiktok.com/@realhomiesclub/video/7638527415555198238",
  "P2P.org": "https://www.tiktok.com/@realhomiesclub/video/7637386865410182430",
  BitSaving: "https://www.tiktok.com/@realhomiesclub/video/7634056564877380895",
  Web3Event: "https://www.tiktok.com/@realhomiesclub/video/7633647235623816478",
  RedStone: "https://www.tiktok.com/@realhomiesclub/video/7607117801597226270",
  DogeOS: "https://www.tiktok.com/@realhomiesclub/video/7607831708485815583",
  Chinsanity: "https://www.tiktok.com/@realhomiesclub/video/7603776586160065822",
  Paybis: "https://www.tiktok.com/@realhomiesclub/video/7600769327171718430",
  "box.fun": "https://www.tiktok.com/@realhomiesclub/video/7598757230741081375",
};

const featuredConversations = featuredTeams.map((team) => ({
  ...team,
  interviewUrl: interviewUrls[team.name] ?? null,
}));

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <a
          href="#home"
          className="brand"
          aria-label="real homies club home"
        >
          <img
            src="/real-homies-logo.png"
            alt=""
            className="brand-mark"
          />

          <span>real homies club</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <MobileMenu items={navigationItems} />
      </header>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">MEDIA &amp; BEYOND</p>

          <h1>
            <span className="headline-line">Behind every idea.</span>
            <span className="headline-line">There&apos;s a person.</span>
          </h1>

          <p className="hero-description">
            Through conversations, interviews, and shared experiences,
            <br />
            we uncover the people behind the ideas.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="hero-card card-one">
            <span>BEHIND THE IDEA</span>
            <strong>Meet the people.</strong>
          </div>

          <div className="hero-card card-two">
            <span className="dot" />
            <span>REC</span>
          </div>

          <div className="smile">:)</div>
        </div>
      </section>

      <section id="about" className="about section-shell">
        <div className="about-grid">
          <div className="about-content">
            <p className="section-label">ABOUT</p>

            <h2 className="about-heading">
              We tell the stories behind the ideas.
            </h2>

            <div className="about-copy">
              <p>
                real homies club is an independent media and event studio built
                around a simple idea: people connect with people before they
                connect with ideas.
              </p>

              <p>
                Through interviews and shared experiences, we uncover the
                people behind the stories.
              </p>
            </div>
          </div>

          <AboutVideo />
        </div>
      </section>

      <section id="work" className="work section-shell">
        <div className="work-heading">
          <p className="section-label">WHAT WE DO</p>
          <h2>What we do</h2>
        </div>

        <div className="work-grid">
          {workItems.map((item) => (
            <article className="work-card" key={item.number}>
              <div className="work-card-top">
                <span>{item.number}</span>
                <span>{item.category}</span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        id="selected-work"
        className="selected-work section-shell"
      >
        <div className="selected-work-heading">
          <p className="section-label">WORK</p>

          <h2>On the ground, where ideas meet people.</h2>
        </div>

        <WorkGrid />
      </section>

      <section className="featured-teams section-shell">
        <div className="featured-teams-heading">
          <p className="section-label">FEATURED CONVERSATIONS</p>

          <h2>Teams we&apos;ve spoken with.</h2>
        </div>

        <div className="featured-conversation-grid">
          {featuredConversations.map((team) => {
            const tileContent = (
              <>
                <div className="featured-conversation-visual">
                  <img src={team.logo} alt={`${team.name} logo`} />
                </div>

                <h3>{team.name}</h3>
              </>
            );

            return team.interviewUrl ? (
              <a
                className="featured-conversation-tile featured-conversation-tile--clickable"
                href={team.interviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch the real homies club interview with ${team.name} on TikTok`}
                key={team.name}
              >
                {tileContent}
              </a>
            ) : (
              <article className="featured-conversation-tile" key={team.name}>
                {tileContent}
              </article>
            );
          })}
        </div>

        <div className="featured-conversation-footer">
          <p className="featured-teams-note">
            Conversations captured at conferences, events, and community
            gatherings across Web3.
          </p>

          <a
            className="featured-conversation-cta"
            href="https://www.tiktok.com/@realhomiesclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch more conversations
          </a>
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

          <div className="contact-services" aria-label="Available services">
            <span>Media Partnership</span>
            <span>Event Coverage</span>
            <span>Interviews</span>
            <span>Collaboration</span>
          </div>
        </div>

        <a
          className="button button-light"
          href="mailto:hello@realhomies.club"
        >
          hello@realhomies.club
        </a>
      </section>

      <footer className="footer section-shell">
        <span>© 2026 real homies club</span>

        <div className="footer-social">
          <a
            href="https://www.tiktok.com/@realhomiesclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>

          <a
            href="https://www.youtube.com/@realhomiesclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/realhomiesclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://x.com/real_BD_2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </footer>
    </main>
  );
}
