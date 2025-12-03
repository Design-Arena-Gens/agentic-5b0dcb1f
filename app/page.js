import Link from "next/link";

const metrics = [
  { value: "48hrs", label: "Average idea-to-launch" },
  { value: "96%", label: "Founder satisfaction" },
  { value: "32M", label: "Funding unlocked" },
  { value: "58", label: "Active product ecosystems" },
];

const spotlight = [
  {
    title: "Adaptive launch architecture",
    copy: "Prototype once, deploy everywhere. Our modular launch system transforms early sketches into responsive, production-ready experiences in hours.",
    points: [
      "Context-aware wireframing in your brand language",
      "AI-assisted UX heuristics baked into every flow",
      "Motion blueprints that showcase your product promise",
    ],
  },
  {
    title: "Insights that steer momentum",
    copy: "Every interaction is translated into a narrative that helps your team focus on what matters next.",
    points: [
      "Realtime attention maps across your funnel",
      "Investor-ready storyboards for your next pitch",
      "Longitudinal growth signals rendered in plain language",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We launched with NeonBloom and closed our seed round in four weeks. The brand clarity and product polish were undeniable.",
    name: "Mira Chen",
    title: "Founder, Noonwave",
  },
  {
    quote:
      "Their team turned abstract ideas into a living product story. Investors understood our narrative instantly.",
    name: "Ezra Hoffman",
    title: "CEO, Parallel Pulse",
  },
  {
    quote:
      "It felt like having a design visionary embedded in our crew. Every touchpoint radiated confidence.",
    name: "Linh Tran",
    title: "Head of Product, Loomlight",
  },
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

const brandPillars = [
  "Brand systems",
  "Launch strategy",
  "Product storytelling",
  "Growth experiments",
  "Signature visuals",
  "Investor kits",
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="gradient-ring ring-1" />
        <div className="gradient-ring ring-2" />
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "16px", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.9)", display: "grid", placeItems: "center", boxShadow: "var(--shadow-soft)" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "8px", background: "var(--accent)", boxShadow: "0 10px 20px rgba(106, 90, 205, 0.45)" }} />
            </div>
            <span style={{ fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.9rem" }}>
              NeonBloom
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} style={{ fontSize: "0.95rem", color: "var(--muted)", transition: "color 0.2s ease" }}>
                {link.label}
              </Link>
            ))}
            <Link href="#contact" className="btn btn-primary" style={{ padding: "0.7rem 1.4rem", fontSize: "0.95rem" }}>
              Start a sprint
            </Link>
          </div>
        </nav>
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="badge">
              <span className="badge-dot" />
              Launch Studio for Visionary Founders
            </div>
            <h1>Minimal aesthetics engineered for maximal traction.</h1>
            <p>
              NeonBloom Labs designs web experiences that feel inevitable—from the first pixel to your next funding milestone. We blend poetic minimalism with conversion science so your product story lands with investors, partners, and early users alike.
            </p>
            <div className="hero-actions">
              <Link href="#contact" className="btn btn-primary">
                Book a discovery call
              </Link>
              <Link href="#work" className="btn btn-ghost">
                Explore recent launches
              </Link>
            </div>
            <div className="hero-stats">
              {metrics.map((metric) => (
                <div className="hero-stat" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="prototype fade-border" style={{ padding: "32px" }}>
            <div className="grid-overlay" />
            <div style={{ position: "relative", zIndex: 1, background: "rgba(255,255,255,0.65)", borderRadius: "24px", padding: "32px", display: "grid", gap: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 600 }}>Vision Control Room</h2>
                <span className="pill">Live prototype</span>
              </div>
              <div className="grid-masonry">
                <div className="card" style={{ minHeight: "200px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>Launch velocity</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    Observe how every touchpoint accelerates your roadmap. We orchestrate flows that keep curiosity moving forward.
                  </p>
                </div>
                <div className="card" style={{ minHeight: "340px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <h3 style={{ fontSize: "1.1rem" }}>Investor narrative</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                      Your story told through interactive data murals that translate ambition into traction.
                    </p>
                    <div style={{ display: "grid", gap: "12px" }}>
                      <div style={{ height: "6px", borderRadius: "999px", background: "rgba(18,18,18,0.08)", overflow: "hidden" }}>
                        <div style={{ width: "82%", height: "100%", background: "var(--accent)", borderRadius: "inherit" }} />
                      </div>
                      <div style={{ height: "6px", borderRadius: "999px", background: "rgba(18,18,18,0.08)", overflow: "hidden" }}>
                        <div style={{ width: "64%", height: "100%", background: "rgba(106,90,205,0.5)", borderRadius: "inherit" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" style={{ minHeight: "200px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>Adaptive identity</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    Responsive design systems that breathe with your brand—no static mockups, only living canvases.
                  </p>
                </div>
                <div className="card" style={{ minHeight: "200px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>Signals dashboard</h3>
                  <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    Decision-grade dashboards render the resonance of your message in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="logo-bar">
        <span>trusted by founders from</span>
        <div className="logo-grid">
          <span className="logo">AuroraSet</span>
          <span className="logo">Noonwave</span>
          <span className="logo">Driftloop</span>
          <span className="logo">Framework</span>
        </div>
      </div>

      <section id="work" className="section" style={{ position: "relative" }}>
        <div className="section-header">
          <span className="section-eyebrow">What we launch</span>
          <h2 className="section-title">Signature products that feel brave, inevitable, and unmistakably yours.</h2>
          <p className="section-subtitle">
            From the first announcement landing page to immersive product walkthroughs, we choreograph experiences that reveal the full promise of your vision without visual noise.
          </p>
        </div>
        <div className="feature-stack">
          {spotlight.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="pill-row">
                <span className="pill">Launch blueprint</span>
                <span className="pill">UX alchemy</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className="section" style={{ display: "grid", gap: "48px" }}>
        <div className="section-header">
          <span className="section-eyebrow">Our cadence</span>
          <h2 className="section-title">A four-week sprint that distills your essence and amplifies it online.</h2>
          <p className="section-subtitle">
            We embed with your founding team, translate raw ambition into minimal design systems, and deliver investor-ready experiences that invite belief.
          </p>
        </div>
        <div className="metrics">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gap: "24px" }}>
          <div className="pill-row">
            {brandPillars.map((pillar) => (
              <span className="pill" key={pillar}>
                {pillar}
              </span>
            ))}
          </div>
          <div className="card" style={{ display: "grid", gap: "16px" }}>
            <h3 style={{ fontSize: "1.2rem" }}>Sound like your next leap?</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
              We align bold ideas with visual restraint, building a magnetic presence that resonates across investor meetings, product demos, and launch day buzz.
            </p>
            <Link href="#contact" className="btn btn-primary" style={{ justifySelf: "flex-start" }}>
              Drop us a note
            </Link>
          </div>
        </div>
      </section>

      <section id="stories" className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <span className="section-eyebrow">Founder stories</span>
          <h2 className="section-title">Teams we helped bloom from sketchbook to spotlight.</h2>
        </div>
        <div className="testimonials">
          {testimonials.map((story) => (
            <article className="testimonial" key={story.name}>
              <p>“{story.quote}”</p>
              <footer>
                <strong>{story.name}</strong>
                <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{story.title}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="cta-content">
          <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>
            <span className="badge-dot" style={{ background: "#fff", boxShadow: "0 0 12px rgba(255,255,255,0.6)" }} />
            Now accepting sprints for Q3
          </span>
          <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: 1.1, fontWeight: 600 }}>
            Let’s architect a launch presence that invites your next investor to lean in.
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "520px", color: "rgba(255,255,255,0.8)" }}>
            Share your product, your milestones, and the world you want to shape. We’ll respond within 24 hours with a crafted sprint outline tailored to your goals.
          </p>
        </div>
        <form className="cta-content" style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "540px", display: "grid", gap: "16px" }}>
          <label style={{ display: "grid", gap: "8px" }}>
            <span style={{ fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Full name</span>
            <input
              type="text"
              placeholder="Ava Laurent"
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            />
          </label>
          <label style={{ display: "grid", gap: "8px" }}>
            <span style={{ fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Work email</span>
            <input
              type="email"
              placeholder="you@visionary.co"
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            />
          </label>
          <label style={{ display: "grid", gap: "8px" }}>
            <span style={{ fontSize: "0.85rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>What are you building?</span>
            <textarea
              rows={4}
              placeholder="Give us a glimpse of your boldest ambition."
              style={{
                padding: "16px 20px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                resize: "vertical",
              }}
            />
          </label>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
            Send my sprint brief
          </button>
        </form>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "16px", background: "rgba(0,0,0,0.72)", display: "grid", placeItems: "center" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "8px", background: "#fff" }} />
              </div>
              <strong style={{ letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "0.9rem" }}>NeonBloom Labs</strong>
            </div>
            <p>
              A minimal launch studio crafting luminous digital experiences for founders who dare to imagine further.
            </p>
          </div>
          <div className="footer-column">
            <span>Explore</span>
            <Link href="#work">Launch library</Link>
            <Link href="#approach">Our cadence</Link>
            <Link href="#stories">Founder stories</Link>
          </div>
          <div className="footer-column">
            <span>Connect</span>
            <Link href="mailto:hello@neonbloom.studio">Email</Link>
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
            <Link href="https://www.dribbble.com" target="_blank" rel="noreferrer">
              Dribbble
            </Link>
          </div>
          <div className="footer-column">
            <span>Studio</span>
            <Link href="#contact">Book a sprint</Link>
            <Link href="#">Press kit</Link>
            <Link href="#">Brand guidelines</Link>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--muted)", fontSize: "0.85rem" }}>
          <span>© {new Date().getFullYear()} NeonBloom Labs. All rights reserved.</span>
          <span>Made with quiet confidence.</span>
        </div>
      </footer>
    </main>
  );
}
