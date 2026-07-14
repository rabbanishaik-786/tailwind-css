import { useState } from "react";
import "./App.css";

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (faqNumber) => {
    if (openFaq === faqNumber) {
      setOpenFaq(null);
    } else {
      setOpenFaq(faqNumber);
    }
  };

  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          clear<span>wave</span>
        </a>

        <nav>
          <a href="#mobile">App</a>
          <a href="#features">Features</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-actions">
          <a href="#signin">Sign in</a>
          <a href="#start" className="nav-button">
            Start Free Trial
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-text">
            <div className="rating">
              <span>★</span>
              Rated #1 Productivity SaaS of 2024
            </div>

            <h1>
              Your workflow,
              <span>finally clear.</span>
            </h1>

            <p>
              Clearwave unifies your team&apos;s projects, data and communication
              into one calm, focused workspace. Less noise, more done.
            </p>

            <div className="hero-buttons">
              <a href="#start" className="primary-button">
                Start Free — No Card →
              </a>

              <a href="#features" className="secondary-button">
                ▶ See it in action
              </a>
            </div>

            <div className="trust-list">
              <span>✓ SOC 2 Certified</span>
              <span>⚡ 99.9% Uptime SLA</span>
              <span>♟ 50k+ Teams</span>
            </div>
          </div>

          <div className="dashboard">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="dashboard-title">
              <h3>Team Performance</h3>

              <div className="growth-box">
                <strong>↑ 34%</strong>
                <small>Output this week</small>
              </div>
            </div>

            <div className="chart">
              <div className="bar bar-one"></div>
              <div className="bar bar-two"></div>
              <div className="bar bar-three"></div>
              <div className="bar active bar-four"></div>
              <div className="bar bar-five"></div>
              <div className="bar active bar-six"></div>
              <div className="bar bar-seven"></div>
              <div className="bar active bar-eight"></div>
            </div>

            <div className="dashboard-stats">
              <div>
                <strong>94%</strong>
                <span>Task Rate</span>
              </div>

              <div>
                <strong>2.4k</strong>
                <span>Active Users</span>
              </div>

              <div>
                <strong>18h</strong>
                <span>Saved / week</span>
              </div>
            </div>

            <div className="notification">
              <span>+</span>

              <div>
                <strong>New integration</strong>
                <small>Slack connected just now</small>
              </div>
            </div>
          </div>
        </section>

        <section className="brands">
          <p>TRUSTED BY FORWARD-THINKING TEAMS AT</p>

          <div className="brand-list">
            <span>▦ Nexaflow</span>
            <span>◉ Meridian</span>
            <span>▲ Vanta Labs</span>
            <span>■ Pulsar HQ</span>
            <span>♟ Arclight</span>
            <span>⬟ Korova Co.</span>
          </div>
        </section>

        <section className="mobile-section" id="mobile">
          <SectionHeading
            label="MOBILE APP"
            title="Your workspace,"
            specialText="in your pocket"
            description="The Clearwave mobile app brings every dashboard, task and notification to you — beautifully adapted for any screen."
          />

          <div className="slider-buttons">
            <button type="button">‹</button>
            <span></span>
            <span className="long-dot"></span>
            <span></span>
            <button type="button">›</button>
          </div>

          <div className="phones">
            <Phone title="Tasks" theme="light" small />
            <Phone title="Welcome Back" theme="dark" />
            <Phone title="Profile Settings" theme="light" main />
            <Phone title="Analytics" theme="dark" />
            <Phone title="Reports" theme="light" small />
          </div>
        </section>

        <section className="features" id="features">
          <SectionHeading
            label="PLATFORM FEATURES"
            title="Built for clarity"
            specialText="at every scale"
            description="Every feature is designed to reduce friction and surface what matters. No bloat and no configuration maze."
          />

          <Feature
            number="01 — UNIFIED DASHBOARD"
            title="Every metric, one calm surface"
            description="Pull information from any source into a single dashboard. Share live information without exports or screenshots."
            points={[
              "Drag-and-drop widget builder",
              "Real-time data sync across all sources",
              "Role-based sharing and permissions",
            ]}
          >
            <DashboardPreview />
          </Feature>

          <Feature
            number="02 — AUTOMATION"
            title="Routines that run themselves"
            description="Build automation flows using simple language. Clearwave understands your intent and suggests the next step."
            points={[
              "Natural-language automation builder",
              "500+ pre-built trigger templates",
              "Full audit trail for every action",
            ]}
            reverse
          >
            <AutomationPreview />
          </Feature>

          <Feature
            number="03 — TEAM COLLABORATION"
            title="Comments, context and clarity"
            description="Add comments, assign tasks and resolve discussions without switching between different applications."
            points={[
              "Inline comments on any data point",
              "Threaded task assignments",
              "Real-time presence and live cursors",
            ]}
          >
            <CommentsPreview />
          </Feature>
        </section>

        {/* PDF page 3 statistics and pricing sections are removed */}

        <section className="reviews" id="reviews">
          <SectionHeading
            label="REVIEWS"
            title="Teams that love"
            specialText="Clearwave"
            description="Here is what real teams say after using Clearwave."
          />

          <div className="review-grid">
            <ReviewCard
              initials="SL"
              name="Sarah Lindqvist"
              role="Head of Operations"
              text="We replaced three separate tools with Clearwave and now have fewer meetings."
            />

            <ReviewCard
              initials="MR"
              name="Marcus Reyes"
              role="Product Director"
              text="The mobile app lets me review dashboards without opening my laptop."
            />

            <ReviewCard
              initials="PK"
              name="Priya Kapoor"
              role="Engineering Lead"
              text="Onboarding our team took one afternoon. The learning curve was very simple."
            />

            <ReviewCard
              initials="TW"
              name="Tom Wainwright"
              role="Chief Financial Officer"
              text="We can now show stakeholders live data instead of preparing presentation decks."
            />

            <ReviewCard
              initials="AN"
              name="Aiko Nakamura"
              role="Chief Technology Officer"
              text="Our integration question was answered in less than two hours."
            />
          </div>
        </section>

        <section className="integrations">
          <SectionHeading
            label="INTEGRATIONS"
            title="Connects with your"
            specialText="existing stack"
          />

          <div className="integration-list">
            <span>Slack</span>
            <span>Google Sheets</span>
            <span>Google Drive</span>
            <span>Zapier</span>
            <span>Stripe</span>
            <span>GitHub</span>
            <span>Notion</span>
            <span>Mailchimp</span>
            <span>HubSpot</span>
            <span>Airtable</span>
            <span>Intercom</span>
            <span>Salesforce</span>
            <span>Figma</span>
            <span>Linear</span>
            <span>Jira</span>
            <span>Webflow</span>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-introduction">
            <span className="section-label">● FAQ</span>

            <h2>
              Questions,
              <em>answered</em>
            </h2>

            <p>
              Can&apos;t find what you are looking for? Contact our team at
              hello@clearwave.io.
            </p>
          </div>

          <div className="faq-list">
            <FaqItem
              number={1}
              question="Is there a free trial?"
              answer="Yes. You can start a free trial without entering credit card information."
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />

            <FaqItem
              number={2}
              question="Can I migrate data from another tool?"
              answer="Yes. Clearwave supports file imports and integrations with popular tools."
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />

            <FaqItem
              number={3}
              question="What does the uptime SLA mean?"
              answer="The uptime SLA is the availability target maintained by the Clearwave platform."
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />

            <FaqItem
              number={4}
              question="Is my data secure?"
              answer="Clearwave uses encrypted connections and role-based access controls."
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />

            <FaqItem
              number={5}
              question="Can I cancel anytime?"
              answer="Yes. You can cancel your subscription from your account settings."
              openFaq={openFaq}
              toggleFaq={toggleFaq}
            />
          </div>
        </section>

        <section className="cta-section" id="start">
          <div className="cta-card">
            <div>
              <small>● GET STARTED TODAY</small>

              <h2>
                Ready for a
                <em>clearer workflow?</em>
              </h2>

              <p>
                Join 50,000+ teams that replaced chaos with clarity. Set up in
                under ten minutes.
              </p>
            </div>

            <div className="cta-buttons">
              <a href="#signup" className="primary-button">
                Start Free Trial →
              </a>

              <a href="#demo" className="demo-button">
                Schedule a demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#home" className="footer-logo">
              clear<span>wave</span>
            </a>

            <p>
              The calm and powerful workspace for teams that want to focus on
              their work.
            </p>
          </div>

          <FooterColumn
            title="PRODUCT"
            links={["Features", "Mobile App", "Integrations", "Changelog"]}
          />

          <FooterColumn
            title="COMPANY"
            links={["About", "Blog", "Careers", "Status"]}
          />

          <FooterColumn
            title="SUPPORT"
            links={["Help Center", "Documentation", "Security", "Contact"]}
          />
        </div>

        <div className="footer-bottom">
          <span>© 2026 Clearwave. React practice project.</span>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ label, title, specialText, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">● {label}</span>

      <h2>
        {title}
        {specialText && <em>{specialText}</em>}
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function Phone({ title, theme, main, small }) {
  let className = "phone";

  if (theme === "dark") {
    className += " dark-phone";
  } else {
    className += " light-phone";
  }

  if (main) {
    className += " main-phone";
  }

  if (small) {
    className += " small-phone";
  }

  return (
    <div className={className}>
      <div className="phone-speaker"></div>

      <div className="phone-content">
        <small>WORKSPACE</small>
        <h3>{title}</h3>

        <div className="phone-box-row">
          <div></div>
          <div></div>
        </div>

        <div className="phone-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

function Feature({
  number,
  title,
  description,
  points,
  children,
  reverse,
}) {
  return (
    <div className={`feature-row ${reverse ? "reverse" : ""}`}>
      <div className="feature-text">
        <small>{number}</small>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="feature-demo">{children}</div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="preview-card">
      <div className="preview-top">
        <MetricBox label="Monthly Revenue" value="$84.2k" />
        <MetricBox label="Active Users" value="12,481" />
      </div>

      <div className="preview-list">
        <small>Recent Activity</small>
        <PreviewRow text="Q3 Report synced" status="Done" />
        <PreviewRow text="Team review pending" status="Active" />
        <PreviewRow text="Analytics export" status="Queued" />
      </div>
    </div>
  );
}

function AutomationPreview() {
  return (
    <div className="preview-card">
      <div className="preview-list">
        <PreviewRow text="Weekly digest → Slack" status="Running" />
        <PreviewRow text="Lead scored → Notify sales" status="Running" />
        <PreviewRow text="Invoice due → Alert CFO" status="Active" />
        <PreviewRow text="Report sync → Drive" status="Paused" />
      </div>

      <div className="preview-top bottom-metrics">
        <MetricBox label="Hours Saved" value="148h" />
        <MetricBox label="Flows" value="24" />
      </div>
    </div>
  );
}

function CommentsPreview() {
  return (
    <div className="preview-card">
      <div className="preview-top">
        <MetricBox label="Online Now" value="4 users" />
        <MetricBox label="Open Tasks" value="37" />
      </div>

      <div className="preview-list">
        <PreviewRow text="Alex updated Q3 chart" status="Resolved" />
        <PreviewRow text="Kim requested review" status="Open" />
        <PreviewRow text="Maya approved changes" status="Done" />
      </div>
    </div>
  );
}

function MetricBox({ label, value }) {
  return (
    <div className="metric-box">
      <small>{label}</small>
      <strong>{value}</strong>
      <span></span>
    </div>
  );
}

function PreviewRow({ text, status }) {
  return (
    <div className="preview-row">
      <span>{text}</span>
      <strong>{status}</strong>
    </div>
  );
}

function ReviewCard({ initials, name, role, text }) {
  return (
    <article className="review-card">
      <div className="stars">★★★★★</div>

      <p>“{text}”</p>

      <div className="review-person">
        <span>{initials}</span>

        <div>
          <strong>{name}</strong>
          <small>{role}</small>
        </div>
      </div>
    </article>
  );
}

function FaqItem({
  number,
  question,
  answer,
  openFaq,
  toggleFaq,
}) {
  return (
    <article className="faq-item">
      <button type="button" onClick={() => toggleFaq(number)}>
        <span>{question}</span>
        <i>{openFaq === number ? "−" : "+"}</i>
      </button>

      {openFaq === number && <p>{answer}</p>}
    </article>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>

      {links.map((link) => (
        <a href="#" key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}

export default App;