const brands = [
  "Nexaflow",
  "Meridian",
  "Vanta Labs",
  "Pulsar HQ",
  "Arclight",
  "Korova Co.",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "20",
    description:
      "For individuals and small teams getting started with structured workflows.",
    button: "Start Free Trial",
    features: [
      "Up to 5 team members",
      "10 active dashboards",
      "Basic automations",
      "7-day data history",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "60",
    description:
      "For growing teams that need powerful automation and advanced reporting.",
    button: "Start Free Trial",
    popular: true,
    features: [
      "Up to 25 team members",
      "Unlimited dashboards",
      "Advanced automations",
      "90-day data history",
      "Priority chat support",
      "Mobile app access",
    ],
  },
  {
    name: "Enterprise",
    price: "150",
    description:
      "For larger organizations with custom requirements and compliance needs.",
    button: "Contact Sales",
    features: [
      "Unlimited members",
      "Custom integrations and API",
      "SSO and advanced permissions",
      "Unlimited data history",
      "Dedicated success manager",
      "SOC 2 compliance reports",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We replaced three separate tools with Clearwave and actually have fewer meetings now. The automation flows handle the handoffs our team used to spend mornings sorting out.",
    name: "Sarah Lindqvist",
    role: "Head of Operations · Stratum IO",
    initials: "SL",
  },
  {
    quote:
      "The mobile app alone justified the switch. I can review dashboards and approve tasks between meetings without opening my laptop.",
    name: "Marcus Reyes",
    role: "Product Director · Meridian",
    initials: "MR",
  },
  {
    quote:
      "Onboarding our 30-person team took one afternoon. The learning curve is genuinely flat.",
    name: "Priya Kapoor",
    role: "Engineering Lead · Vanta Labs",
    initials: "PK",
  },
  {
    quote:
      "We can finally show stakeholders live data instead of preparing decks every week.",
    name: "Tom Wainwright",
    role: "CFO · Pulsar HQ",
    initials: "TW",
  },
  {
    quote:
      "I had a custom integration question answered in under two hours. The support has been excellent.",
    name: "Aiko Nakamura",
    role: "CTO · Nexaflow",
    initials: "AN",
  },
];

const integrations = [
  "Slack",
  "Google Sheets",
  "Google Drive",
  "Zapier",
  "Stripe",
  "GitHub",
  "Notion",
  "Mailchimp",
  "HubSpot",
  "Airtable",
  "Intercom",
  "Salesforce",
  "Figma",
  "Linear",
  "Jira",
  "Webflow",
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan includes a 14-day free trial with no credit card required.",
  },
  {
    question: "How does pricing work for larger teams?",
    answer:
      "Enterprise pricing is based on your team size, integrations and security requirements.",
  },
  {
    question: "Can I migrate data from another tool?",
    answer:
      "Yes. You can import data directly or work with our team for a guided migration.",
  },
  {
    question: "What does the 99.9% uptime SLA mean?",
    answer:
      "It means our platform is monitored continuously and designed for reliable availability.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Clearwave uses secure infrastructure, role-based access and encrypted data transfer.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can change or cancel your subscription at any time without hidden fees.",
  },
];

function Logo() {
  return (
    <a href="#home" className="text-[20px] font-extrabold tracking-[-1px]">
      clear<span className="text-accent">wave</span>
    </a>
  );
}

function PrimaryButton({ children, className = "" }) {
  return (
    <button
      className={`rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:-translate-y-0.5 hover:bg-[#126c61] ${className}`}
    >
      {children}
    </button>
  );
}

function Label({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"></span>
      {children}
    </div>
  );
}

function CheckItem({ children, light = false }) {
  return (
    <li
      className={`flex items-start gap-2.5 text-sm ${
        light ? "text-white/70" : "text-[var(--text-2)]"
      }`}
    >
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
          light
            ? "bg-[var(--accent)] text-white"
            : "bg-[#dff3ef] text-[var(--accent)]"
        }`}
      >
        ✓
      </span>

      <span>{children}</span>
    </li>
  );
}

function DashboardCard() {
  const bars = [32, 50, 40, 65, 48, 78, 55, 84];

  return (
    <div className="relative mx-auto w-full max-w-[530px]">
      <div className="soft-shadow rounded-[22px] border border-white/80 bg-white p-5 sm:p-7">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-[var(--text-3)]">Team Performance</p>
            <h3 className="mt-1 text-lg font-bold">Weekly overview</h3>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-300"></span>
          </div>
        </div>

        <div className="flex h-36 items-end gap-3 rounded-2xl bg-[#f5faf9] px-4 pb-4 pt-5">
          {bars.map((height, index) => (
            <div
              key={index}
              className={`flex-1 rounded-t-sm ${
                index === 3 || index === 5 || index === 7
                  ? "bg-[var(--accent)]"
                  : "bg-[#dfe9e7]"
              }`}
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            ["94%", "Task rate"],
            ["2.4k", "Active users"],
            ["18h", "Saved / week"],
          ].map(([value, title]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border)] bg-[#eff8f6] p-3"
            >
              <p className="text-lg font-bold">{value}</p>
              <p className="text-[10px] text-[var(--text-3)]">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -right-3 -top-4 rounded-xl bg-[var(--accent)] px-4 py-3 text-white shadow-xl sm:right-4">
        <p className="text-xl font-bold">↑ 34%</p>
        <p className="text-[9px] text-white/70">Output this week</p>
      </div>

      <div className="absolute -bottom-5 left-0 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 shadow-xl sm:left-[-25px]">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
          +
        </span>

        <div>
          <p className="text-xs font-bold">New integration</p>
          <p className="text-[10px] text-[var(--text-3)]">
            Slack connected just now
          </p>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup({ type = "dashboard", tall = false }) {
  return (
    <div
      className={`phone-shadow overflow-hidden rounded-[32px] border-[5px] border-[#0d2522] ${
        tall ? "h-[420px] w-[215px]" : "h-[350px] w-[180px]"
      } ${type === "dark" ? "bg-[#102b27]" : "bg-[#f8fcfb]"}`}
    >
      <div className="mx-auto mt-2 h-2 w-16 rounded-full bg-black/30"></div>

      <div className="p-4">
        {type === "profile" ? (
          <>
            <div className="mb-5 flex items-center justify-between text-[9px]">
              <span className="font-bold">Settings</span>
              <span>•••</span>
            </div>

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white">
              TM
            </div>

            <h4 className="text-center text-[11px] font-bold">
              Templeton Moore
            </h4>

            <p className="text-center text-[7px] text-[var(--text-3)]">
              Product Manager
            </p>

            <div className="mt-6 space-y-3">
              {["Full name", "Department", "Email", "Phone", "Location"].map(
                (item) => (
                  <div key={item}>
                    <p className="mb-1 text-[6px] text-[var(--text-3)]">
                      {item}
                    </p>
                    <div className="h-6 rounded-md border border-[var(--border)] bg-white"></div>
                  </div>
                ),
              )}
            </div>
          </>
        ) : type === "dark" ? (
          <>
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-[7px] text-white/50">Welcome back</p>
                <p className="text-xs font-bold">Alex Morgan</p>
              </div>

              <span className="h-6 w-6 rounded-full bg-white/10"></span>
            </div>

            <div className="mt-6 rounded-xl bg-white/5 p-3">
              <p className="text-[7px] text-white/50">Monthly progress</p>
              <p className="mt-1 text-2xl font-bold text-white">82%</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] bg-[var(--accent-light)]"></div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {[["24", "Tasks"], ["8", "Projects"], ["12", "Team"], ["94%", "Score"]].map(
                ([value, label]) => (
                  <div key={label} className="rounded-lg bg-white/5 p-2">
                    <p className="text-sm font-bold text-white">{value}</p>
                    <p className="text-[6px] text-white/40">{label}</p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-4 space-y-2">
              {[70, 45, 80, 55].map((width, index) => (
                <div key={index} className="rounded-lg bg-white/5 p-2">
                  <div className="mb-2 h-1.5 w-12 rounded bg-white/20"></div>
                  <div className="h-1 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[var(--accent-light)]"
                      style={{ width: `${width}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[7px] text-[var(--text-3)]">Dashboard</p>
                <p className="text-xs font-bold">Good morning</p>
              </div>

              <span className="h-6 w-6 rounded-full bg-[#dcefeb]"></span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {[["1,284", "Users"], ["462", "Tasks"], ["328", "Reports"], ["432", "Hours"]].map(
                ([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-[var(--border)] bg-white p-2"
                  >
                    <p className="text-sm font-bold text-[var(--accent)]">
                      {value}
                    </p>
                    <p className="text-[6px] text-[var(--text-3)]">{label}</p>
                  </div>
                ),
              )}
            </div>

            <div className="mt-4 rounded-xl border border-[var(--border)] bg-white p-3">
              <p className="text-[7px] text-[var(--text-3)]">
                Traffic overview
              </p>

              <div className="mt-4 flex h-24 items-end gap-1.5">
                {[30, 48, 36, 70, 55, 86, 60].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-[var(--accent)]"
                    style={{
                      height: `${height}%`,
                      opacity: 0.35 + index * 0.08,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="overflow-hidden">
      <section id="home" className="hero-glow min-h-screen">
        <header className="page-container flex h-24 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-9 text-xs font-medium text-[var(--text-2)] md:flex">
            <a className="transition hover:text-[var(--accent)]" href="#app">
              App
            </a>
            <a
              className="transition hover:text-[var(--accent)]"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition hover:text-[var(--accent)]"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="transition hover:text-[var(--accent)]"
              href="#reviews"
            >
              Reviews
            </a>
            <a className="transition hover:text-[var(--accent)]" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden text-xs font-semibold text-[var(--text-2)] sm:block">
              Sign in
            </button>

            <PrimaryButton className="px-5 py-3 text-xs">
              Start Free Trial
            </PrimaryButton>
          </div>
        </header>

        <div className="page-container grid min-h-[720px] items-center gap-16 pb-24 pt-12 lg:grid-cols-2">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-[10px] font-semibold text-[var(--text-2)] shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-[9px] text-white">
                ★
              </span>
              Rated #1 Productivity SaaS of 2026
            </div>

            <h1 className="max-w-[600px] text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Your workflow,
              <span className="playfair mt-2 block font-medium italic text-[var(--accent)]">
                finally clear.
              </span>
            </h1>

            <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-[var(--text-2)]">
              Clearwave unifies your team&apos;s projects, data and
              communication into one calm, focused surface. Less noise, more
              done.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton>
                Start Free — No Card
                <span className="ml-2">→</span>
              </PrimaryButton>

              <button className="rounded-full border border-[var(--border)] bg-white/40 px-6 py-3.5 text-sm font-semibold text-[var(--text-2)] transition hover:bg-white">
                <span className="mr-2 text-[var(--accent)]">▶</span>
                See it in action
              </button>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-medium text-[var(--text-3)]">
              <span>♢ SOC 2 Certified</span>
              <span>ϟ 99.9% Uptime SLA</span>
              <span>♙ 50k+ Teams</span>
            </div>
          </div>

          <DashboardCard />
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[#f7fcfb] py-10">
        <div className="page-container">
          <p className="mb-8 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--text-3)]">
            Trusted by forward-thinking teams at
          </p>

          <div className="grid grid-cols-2 gap-7 text-center text-xs font-semibold text-[var(--text-3)] sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand, index) => (
              <div
                key={brand}
                className="flex items-center justify-center gap-2"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e1f2ef] text-[var(--accent)]">
                  {["⌘", "●", "▲", "■", "♟", "⬟"][index]}
                </span>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="section-space bg-[#f9fdfc]">
        <div className="page-container text-center">
          <Label>Mobile App</Label>

          <h2 className="text-4xl font-bold tracking-[-0.045em] md:text-5xl">
            Your workspace,
            <span className="playfair block font-medium italic text-[var(--accent)]">
              in your pocket
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-6 text-[var(--text-2)]">
            The Clearwave mobile app brings every dashboard, task and
            notification to you, beautifully adapted for any screen.
          </p>

          <div className="relative mt-20 flex h-[480px] items-end justify-center">
            <div className="absolute left-[2%] hidden rotate-[-5deg] opacity-55 lg:block">
              <PhoneMockup />
            </div>

            <div className="absolute left-[20%] hidden rotate-[-2deg] lg:block">
              <PhoneMockup type="dark" />
            </div>

            <div className="relative z-20">
              <PhoneMockup type="profile" tall />
            </div>

            <div className="absolute right-[20%] hidden rotate-[2deg] lg:block">
              <PhoneMockup type="dark" />
            </div>

            <div className="absolute right-[2%] hidden rotate-[5deg] opacity-55 lg:block">
              <PhoneMockup />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white">
              ‹
            </button>

            <div className="flex gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8dfdb]"></span>
              <span className="h-1.5 w-6 rounded-full bg-[var(--accent)]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8dfdb]"></span>
            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white">
              ›
            </button>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="section-space bg-[var(--page-background)]"
      >
        <div className="page-container">
          <div className="mb-20 text-center">
            <Label>Platform Features</Label>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              Built for
              <span className="playfair mx-2 font-medium italic text-[var(--accent)]">
                clarity
              </span>
              <br />
              at every scale
            </h2>

            <p className="mx-auto mt-5 max-w-[570px] text-sm leading-6 text-[var(--text-2)]">
              Every feature is designed to reduce friction and surface what
              matters. No bloat, no configuration maze.
            </p>
          </div>

          <div className="space-y-28">
            <FeatureOne />
            <FeatureTwo />
            <FeatureThree />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[#eaf6f4] py-20">
        <div className="page-container grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {[
            ["17k+", "Teams Worldwide", "Across 80+ countries"],
            ["11%", "Avg. Productivity Gain", "Measured in first 30 days"],
            ["34.3%", "Uptime SLA", "Guaranteed and monitored"],
            ["6h", "Saved Per Team Weekly", "On average across all plans"],
          ].map(([number, title, text], index) => (
            <div
              key={title}
              className={`px-5 ${
                index !== 0 ? "md:border-l md:border-[var(--border)]" : ""
              }`}
            >
              <div className="mb-5 h-px w-7 bg-[var(--accent)]"></div>

              <p className="text-4xl font-bold tracking-[-0.05em]">
                {number}
              </p>

              <p className="mt-3 text-xs font-bold">{title}</p>

              <p className="mt-1 text-[9px] text-[var(--text-3)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-space bg-[#f8fdfc]">
        <div className="page-container">
          <div className="text-center">
            <Label>Pricing</Label>

            <h2 className="text-4xl font-bold tracking-[-0.045em] md:text-5xl">
              Simple,
              <span className="playfair mx-2 font-medium italic text-[var(--accent)]">
                transparent
              </span>
              pricing
            </h2>

            <p className="mt-4 text-sm text-[var(--text-2)]">
              No hidden fees. No surprise overages. Cancel anytime.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 text-xs font-semibold">
              <span className="text-[var(--accent)]">Monthly</span>

              <div className="flex h-7 w-12 items-center rounded-full bg-[var(--accent)] px-1">
                <span className="h-5 w-5 rounded-full bg-white shadow"></span>
              </div>

              <span className="text-[var(--text-2)]">Annual</span>

              <span className="rounded-full bg-[#dff2ee] px-2 py-1 text-[9px] text-[var(--accent)]">
                Save 35%
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="section-space bg-[var(--page-background)]"
      >
        <div className="page-container">
          <div className="text-center">
            <div className="mx-auto mb-6 h-px w-28 bg-[var(--border)]"></div>

            <h2 className="text-4xl font-bold tracking-[-0.045em] md:text-5xl">
              Teams that
              <span className="playfair mx-2 font-medium italic text-[var(--accent)]">
                love
              </span>
              Clearwave
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-6 text-[var(--text-2)]">
              Don&apos;t take our word for it. Here&apos;s what real teams say
              after 90 days.
            </p>
          </div>

          <div className="mt-16 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                tall={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fdfc]">
        <div className="page-container text-center">
          <Label>Integrations</Label>

          <h2 className="text-4xl font-bold tracking-[-0.045em] md:text-5xl">
            Connects with your
            <span className="playfair block font-medium italic text-[var(--accent)]">
              existing stack.
            </span>
          </h2>

          <div className="mx-auto mt-14 flex max-w-[760px] flex-wrap justify-center gap-3">
            {integrations.map((integration) => (
              <span
                key={integration}
                className="card-shadow rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-xs font-semibold text-[var(--text-2)] transition hover:-translate-y-1 hover:text-[var(--accent)]"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="section-space bg-[var(--page-background)]"
      >
        <div className="page-container grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <Label>FAQ</Label>

            <h2 className="text-4xl font-bold leading-tight tracking-[-0.045em] md:text-5xl">
              Questions,
              <span className="playfair block font-medium italic text-[var(--accent)]">
                answered
              </span>
            </h2>

            <p className="mt-6 max-w-[350px] text-sm leading-7 text-[var(--text-2)]">
              Can&apos;t find what you&apos;re looking for? Reach our team at
              hello@clearwave.io. We reply within two hours.
            </p>

            <button className="mt-6 text-xs font-bold text-[var(--accent)]">
              + Expand all
            </button>
          </div>

          <div>
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[var(--border)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-sm font-semibold">
                  {faq.question}

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-[650px] pb-6 text-sm leading-6 text-[var(--text-2)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4fbf9] py-24">
        <div className="page-container">
          <div className="dark-gradient grid items-center gap-10 rounded-[30px] px-8 py-14 text-white md:grid-cols-[1.3fr_0.7fr] md:px-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[var(--accent-light)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-light)]"></span>
                Get Started Today
              </div>

              <h2 className="text-4xl font-bold tracking-[-0.045em] md:text-5xl">
                Ready for a
                <span className="playfair block font-medium italic text-[var(--accent-light)]">
                  clearer workflow?
                </span>
              </h2>

              <p className="mt-5 max-w-[560px] text-sm leading-6 text-white/60">
                Join 50,000+ teams who replaced chaos with clarity. Set up in
                under 10 minutes.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <PrimaryButton className="min-w-[190px]">
                Start Free Trial
                <span className="ml-2">→</span>
              </PrimaryButton>

              <button className="min-w-[190px] rounded-full border border-white/10 px-6 py-3 text-xs font-semibold text-white/55">
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#071f1c] py-16 text-white">
        <div className="page-container">
          <div className="grid gap-12 border-b border-white/5 pb-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Logo />

              <p className="mt-5 max-w-[280px] text-xs leading-6 text-white/45">
                The calm, powerful workspace for teams that want to focus on
                work, not on managing it.
              </p>

              <div className="mt-6 flex gap-3">
                {["𝕏", "in", "▶", "♪"].map((item) => (
                  <button
                    key={item}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] text-[10px] text-white/50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <FooterColumn
              title="Product"
              links={["Features", "Mobile App", "Pricing", "Integrations", "Changelog"]}
            />

            <FooterColumn
              title="Company"
              links={["About", "Blog", "Careers", "Press Kit", "Status"]}
            />

            <FooterColumn
              title="Support"
              links={[
                "Help Center",
                "Documentation",
                "Security",
                "Contact",
                "Community",
              ]}
            />
          </div>

          <div className="flex flex-col gap-4 pt-8 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Clearwave. Design by TemplateMo.</p>

            <div className="flex flex-wrap gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureOne() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div>
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
          01 — Unified Dashboard
        </p>

        <h3 className="text-3xl font-bold tracking-[-0.04em]">
          Every metric, one calm surface
        </h3>

        <p className="mt-5 max-w-[540px] text-sm leading-7 text-[var(--text-2)]">
          Pull data from any source into a single, composable view. Share live
          dashboards with stakeholders with no exports and no screenshots.
        </p>

        <ul className="mt-6 space-y-3">
          <CheckItem>Drag-and-drop widget builder</CheckItem>
          <CheckItem>Real-time data sync across all sources</CheckItem>
          <CheckItem>Role-based sharing with granular permissions</CheckItem>
        </ul>
      </div>

      <div className="soft-shadow rounded-[25px] border border-white bg-white/65 p-6">
        <div className="grid grid-cols-2 gap-4">
          <SmallMetric title="Monthly Revenue" value="$84.2k" />
          <SmallMetric title="Active Users" value="12,481" />
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[#f7fbfa] p-4">
          <p className="mb-4 text-[10px] text-[var(--text-3)]">
            Recent Activity
          </p>

          {[
            ["Q3 Report synced", "Done"],
            ["Team review pending", "Active"],
            ["Analytics export", "Queued"],
          ].map(([title, status]) => (
            <div
              key={title}
              className="mb-2 flex items-center justify-between rounded-lg bg-[#e6f3f0] px-3 py-2 text-[10px]"
            >
              <span>{title}</span>

              <span className="rounded-full bg-white/60 px-2 py-0.5 text-[var(--accent)]">
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureTwo() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div className="soft-shadow order-2 rounded-[25px] border border-white bg-white/65 p-6 lg:order-1">
        <div className="space-y-3">
          {[
            ["Weekly digest → Slack", "Running"],
            ["Lead scored → Notify sales", "Running"],
            ["Invoice due → Alert CFO", "Active"],
            ["Report sync → Drive", "Paused"],
          ].map(([title, status]) => (
            <div
              key={title}
              className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-xs"
            >
              <span>{title}</span>

              <span className="rounded-full bg-[#e2f3ef] px-2 py-1 text-[9px] text-[var(--accent)]">
                {status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <SmallMetric title="Hours Saved This Month" value="148h" />
          <SmallMetric title="Flows" value="24" />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
          02 — Smart Automation
        </p>

        <h3 className="text-3xl font-bold leading-tight tracking-[-0.04em]">
          Routines that run
          <span className="playfair block font-medium italic">themselves</span>
        </h3>

        <p className="mt-5 max-w-[540px] text-sm leading-7 text-[var(--text-2)]">
          Build automation flows with natural language. Clearwave understands
          your intent and suggests the next step with no flowchart diagrams.
        </p>

        <ul className="mt-6 space-y-3">
          <CheckItem>Natural-language automation builder</CheckItem>
          <CheckItem>500+ pre-built trigger templates</CheckItem>
          <CheckItem>Full audit trail for every action</CheckItem>
        </ul>
      </div>
    </div>
  );
}

function FeatureThree() {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <div>
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
          03 — Team Collaboration
        </p>

        <h3 className="text-3xl font-bold leading-tight tracking-[-0.04em]">
          Comments, context,
          <span className="playfair block font-medium italic">and clarity</span>
        </h3>

        <p className="mt-5 max-w-[540px] text-sm leading-7 text-[var(--text-2)]">
          Annotate anything, assign tasks inline and resolve conversations
          without switching tabs. The work and discussion stay together.
        </p>

        <ul className="mt-6 space-y-3">
          <CheckItem>Inline comments on any data point</CheckItem>
          <CheckItem>Threaded task assignments</CheckItem>
          <CheckItem>Real-time presence and live cursors</CheckItem>
        </ul>
      </div>

      <div className="soft-shadow rounded-[25px] border border-white bg-white/65 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-[var(--border)] bg-white p-4">
            <p className="text-[9px] text-[var(--text-3)]">Online Now</p>

            <div className="mt-3 flex -space-x-2">
              {["A", "K", "M", "+"].map((item) => (
                <span
                  key={item}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[var(--accent)] text-[10px] font-bold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <SmallMetric title="Open Tasks" value="37" />
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--border)] bg-white p-4">
          <p className="mb-4 text-[10px] text-[var(--text-3)]">
            Recent Comments
          </p>

          {[
            ["Alex", "Q3 chart updated", "Resolved"],
            ["Kim", "Review needed", "Open"],
            ["Maya", "Approved and shipped", "Done"],
          ].map(([name, text, status]) => (
            <div
              key={name}
              className="mb-2 flex items-center justify-between rounded-lg bg-[#e6f3f0] px-3 py-2 text-[10px]"
            >
              <span>
                <strong>{name}</strong> → {text}
              </span>

              <span className="rounded-full bg-white/70 px-2 py-0.5 text-[var(--accent)]">
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmallMetric({ title, value }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-4">
      <p className="text-[9px] text-[var(--text-3)]">{title}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e6efed]">
        <div className="h-full w-[75%] rounded-full bg-[var(--accent)]"></div>
      </div>
    </div>
  );
}

function PricingCard({ plan }) {
  return (
    <div
      className={`relative rounded-[24px] border p-7 transition hover:-translate-y-2 ${
        plan.popular
          ? "border-[#173b36] bg-[#08231f] text-white shadow-2xl shadow-emerald-950/20"
          : "border-[var(--border)] bg-white text-[var(--text-1)] card-shadow"
      }`}
    >
      {plan.popular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] px-4 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
          Most Popular
        </span>
      )}

      <p
        className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
          plan.popular ? "text-white/50" : "text-[var(--text-3)]"
        }`}
      >
        {plan.name}
      </p>

      <div className="mt-5 flex items-end">
        <span className="mb-2 text-xl">$</span>
        <span className="text-5xl font-bold tracking-[-0.05em]">
          {plan.price}
        </span>
        <span
          className={`mb-2 ml-1 text-xs ${
            plan.popular ? "text-white/45" : "text-[var(--text-3)]"
          }`}
        >
          /mo
        </span>
      </div>

      <p
        className={`mt-6 min-h-[60px] text-xs leading-5 ${
          plan.popular ? "text-white/55" : "text-[var(--text-2)]"
        }`}
      >
        {plan.description}
      </p>

      <div
        className={`my-6 h-px ${
          plan.popular ? "bg-white/10" : "bg-[var(--border)]"
        }`}
      ></div>

      <ul className="min-h-[190px] space-y-3">
        {plan.features.map((feature) => (
          <CheckItem key={feature} light={plan.popular}>
            {feature}
          </CheckItem>
        ))}
      </ul>

      <button
        className={`mt-6 w-full rounded-full px-5 py-3.5 text-xs font-bold transition ${
          plan.popular
            ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-mid)]"
            : "border border-[var(--border)] text-[var(--accent)] hover:bg-[#edf8f6]"
        }`}
      >
        {plan.button}
      </button>
    </div>
  );
}

function TestimonialCard({ testimonial, tall }) {
  return (
    <article
      className={`card-shadow rounded-[22px] border border-[var(--border)] bg-white p-7 ${
        tall ? "lg:row-span-2 lg:min-h-[390px]" : ""
      }`}
    >
      <div className="text-sm tracking-[0.15em] text-[var(--accent)]">
        ★★★★★
      </div>

      <p className="playfair mt-5 text-[15px] italic leading-7 text-[var(--text-2)]">
        “{testimonial.quote}”
      </p>

      <div className="mt-7 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e2f3ef] text-xs font-bold text-[var(--accent)]">
          {testimonial.initials}
        </span>

        <div>
          <p className="text-xs font-bold">{testimonial.name}</p>
          <p className="mt-1 text-[9px] text-[var(--text-3)]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/25">
        {title}
      </p>

      <ul className="mt-5 space-y-3 text-xs text-white/45">
        {links.map((link) => (
          <li key={link}>
            <a className="transition hover:text-white" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;