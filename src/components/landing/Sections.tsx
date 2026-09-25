import {
  AlarmClock,
  BellRing,
  Building2,
  ClipboardList,
  Factory,
  FileStack,
  FolderCheck,
  Gauge,
  Lock,
  Recycle,
  ScanLine,
  ServerCog,
  Share2,
  Users,
  Droplets,
  Wind,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import permit from "@/assets/permit.jpg";
import facility from "@/assets/facility.jpg";
import { ScrollRevealStagger, ScrollRevealItem } from "@/components/landing/ScrollReveal";

function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function Problem() {
  const pains = [
    {
      icon: FileStack,
      title: "Consent conditions buried in PDFs",
      body: "A single SPCB consent can hide dozens of duties across long CTE/CTO documents. MSME teams rarely have time to reread them after every renewal.",
    },
    {
      icon: AlarmClock,
      title: "Deadlines tracked in spreadsheets",
      body: "Form filings, stack monitoring, and hazardous waste returns slip when the plant is busy. One missed date can mean penalties from your State Pollution Control Board.",
    },
    {
      icon: FolderCheck,
      title: "Evidence scattered everywhere",
      body: "When an inspector asks for proof, the records sit in email threads, shared drives, and someone's desk. Assembling them is its own project.",
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="The problem"
          title="Indian MSMEs carry compliance risk without a full EHS team"
          description="You should not need a ₹15 lakh consultant to understand your air, water, and waste obligations."
        />
        <ScrollRevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {pains.map((p) => (
            <ScrollRevealItem
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: ScanLine,
      step: "01",
      title: "Upload your documents",
      body: "Share your consent to establish (CTE), consent to operate (CTO), and past SPCB correspondence — digital or scanned.",
    },
    {
      icon: ClipboardList,
      step: "02",
      title: "Get a clear obligation list",
      body: "Each requirement becomes a tracked obligation with the source paragraph attached, plus frequency, due date, and suggested owner.",
    },
    {
      icon: BellRing,
      step: "03",
      title: "Stay ahead of every date",
      body: "Your team gets reminders before work is due, records proof as it happens, and exports an audit-ready file whenever it is asked for.",
    },
  ];

  return (
    <section id="how-it-works" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              center={false}
              eyebrow="How it works"
              title="From SPCB papers to a working compliance plan"
              description="Three steps — built for Red, Orange, and Green category MSME manufacturers in India."
            />
            <ScrollRevealStagger className="mt-10 space-y-5" stagger={0.1}>
              {steps.map((s) => (
                <ScrollRevealItem
                  key={s.step}
                  className="flex gap-4 rounded-2xl border border-border bg-background p-5 transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                      STEP {s.step}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </ScrollRevealItem>
              ))}
            </ScrollRevealStagger>
          </div>

          <div className="rounded-2xl border border-border bg-background p-2">
            <img
              src={permit}
              alt="An environmental air permit next to a laptop showing extracted compliance tasks"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-xl border border-border object-cover"
            />
            <div className="p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every obligation links back to the exact clause it came from, so your team can check
                the wording without opening the original file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const features = [
    {
      icon: FileStack,
      title: "Consent & rule mapping",
      body: "Translate consent conditions into tasks for effluent, emissions, hazardous waste, e-waste, and plastic rules.",
    },
    {
      icon: ClipboardList,
      title: "Obligation register",
      body: "One live list of what is required, where it applies, how often, and who is responsible.",
    },
    {
      icon: BellRing,
      title: "Deadline reminders",
      body: "Notifications ahead of monitoring, sampling, reporting, and renewal dates.",
    },
    {
      icon: FolderCheck,
      title: "Evidence trail",
      body: "Attach records, readings, and sign-offs to each task as the work is completed.",
    },
    {
      icon: Gauge,
      title: "Site and program views",
      body: "See status for one facility or the whole portfolio without rebuilding a spreadsheet.",
    },
    {
      icon: Share2,
      title: "Reports and exports",
      body: "Produce inspection packs and management summaries in a few clicks.",
    },
  ];

  return (
    <section id="features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Everything your compliance program needs in one place"
          description="Aligned with Water Act, Air Act, EP Act rules, and CPCB/SPCB expectations — not US federal law."
        />
        <ScrollRevealStagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <ScrollRevealItem
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary hover:shadow-md hover:shadow-primary/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

export function WhoItsFor() {
  const roles = [
    { icon: Users, label: "Plant heads & proprietors" },
    { icon: Factory, label: "Small & medium manufacturers" },
    { icon: Building2, label: "Multi-unit industrial estates" },
    { icon: Wind, label: "Air consent & stack monitoring" },
    { icon: Droplets, label: "Effluent & groundwater consent" },
    { icon: Recycle, label: "Hazardous, e-waste & plastic waste" },
  ];

  return (
    <section id="who" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 overflow-hidden rounded-2xl border border-border lg:order-1">
            <img
              src={facility}
              alt="Clean modern manufacturing facility with stainless steel process equipment"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              center={false}
              eyebrow="Who it's for"
              title="For the teams that answer to the regulator"
              description="GreenUdyog fits Udyam-registered plants with real SPCB deadlines and no dedicated compliance officer."
            />
            <ScrollRevealStagger className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.06}>
              {roles.map((r) => (
                <ScrollRevealItem
                  key={r.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <r.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{r.label}</span>
                </ScrollRevealItem>
              ))}
            </ScrollRevealStagger>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Trust() {
  const items = [
    {
      icon: Lock,
      title: "Your documents stay yours",
      body: "Data is encrypted in transit and at rest. We do not sell or share your files.",
    },
    {
      icon: ServerCog,
      title: "Access you control",
      body: "Role-based permissions and single sign-on keep site data with the people who need it.",
    },
    {
      icon: FolderCheck,
      title: "Full activity history",
      body: "Every change to an obligation is logged, so you can show what happened and when.",
    },
  ];

  return (
    <section id="trust" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Security"
          title="Built for records you cannot afford to lose"
          description="Your consent documents and pollution data stay confidential. GreenUdyog treats them that way."
        />
        <ScrollRevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <ScrollRevealItem
              key={i.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    {
      q: "We are a small factory — do we still need SPCB consent (CTE/CTO)?",
      a: "Often yes, if you discharge effluent, emit air pollutants, handle hazardous waste, or use fuel in boilers/generators. Many MSMEs need Consent to Establish before setup and Consent to Operate before running. It depends on your process and your state's categorisation (Red, Orange, Green, White). On a free call we help you check what applies to your unit.",
    },
    {
      q: "What is the difference between Environment Clearance (EC) and SPCB consent?",
      a: "Environment Clearance is required for certain larger or sensitive projects under the EIA notification. SPCB consent (CTE/CTO) is the routine permit most factories need for day-to-day air and water compliance. MSMEs are often consent-only, but Orange/Red category expansions can trigger EC — we help you see which path you are on.",
    },
    {
      q: "Our CTO is about to expire. What happens if we miss renewal?",
      a: "Operating without a valid consent can lead to notices, penalties, and stoppage orders from your State Pollution Control Board. Renewal usually needs updated forms, fee, and sometimes monitoring reports. We build a renewal checklist from your existing consent so you are not scrambling at the last minute.",
    },
    {
      q: "We generate only a small amount of hazardous or chemical waste — are we exempt?",
      a: "Low quantity does not always mean no rules. Hazardous and Other Wastes Rules still apply to storage time limits, labelling, manifests, and sending waste only to authorised recyclers or treatment facilities. Many MSMEs trip up on record-keeping, not on tonnage. We clarify what your waste streams trigger.",
    },
    {
      q: "Do e-waste rules apply to us if we only scrap old machines and IT equipment?",
      a: "If you generate e-waste from operations or discard electrical/electronic equipment, duties can apply under E-Waste (Management) Rules — including storage limits and using authorised dismantlers/recyclers. Producer obligations are different from waste-generator duties; we explain which hat you wear.",
    },
    {
      q: "A large customer is asking for pollution and compliance documents. Can you help?",
      a: "Yes. Many MSMEs face buyer audits and ESG questionnaires without a compliance team. We help you map consent conditions, waste authorisations, and monitoring records into a simple evidence pack your customer can review.",
    },
    {
      q: "How often must we test stack emissions or effluent?",
      a: "That frequency is written in your consent order and CPCB/SPCB guidelines — often monthly, quarterly, or annual depending on parameter and industry. Missing a test date is a common violation. We turn those lines in your consent into a calendar your team can follow.",
    },
    {
      q: "We use plastic packaging for our products — does PWM apply?",
      a: "Plastic Waste Management Rules can apply to producers, brand owners, and manufacturers using plastic sheets or packaging. MSMEs supplying packaged goods may have EPR or reporting duties depending on scale and state. We help you understand if PWM touches your business and what to document.",
    },
    {
      q: "Is the online consultation really free? What should we prepare?",
      a: "Yes — 30 minutes at no cost. Bring your latest CTO/consent (if any), a rough list of raw materials and wastes, and your state and district. Photos or PDFs are enough for a first conversation. We will tell you honestly if you need a local consultant for something we cannot cover.",
    },
    {
      q: "Are you lawyers or the pollution board?",
      a: "Neither. GreenUdyog is an affordable compliance support service for MSMEs — not a law firm and not a government body. We guide you on Indian environmental rules and your consent; for legal disputes, court matters, or formal SPCB submissions you may still need a qualified consultant or advocate in your state.",
    },
  ];

  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions MSME owners ask us"
          description="Straight answers on consent, waste, and inspections — book a free call if yours is not listed."
        />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function SocialProof() {
  const quotes = [
    {
      quote:
        "We finally know when our CTO renewal is due — without paying a consultant for every phone call.",
      role: "Plant Head, auto components MSME, Pune",
    },
    {
      quote:
        "Hazardous waste manifests used to live in three folders. GreenUdyog gave us one checklist.",
      role: "EHS Officer, chemicals unit, Gujarat",
    },
    {
      quote:
        "As a Udyam unit supplying to large OEMs, we needed proof of compliance. This made it affordable.",
      role: "Proprietor, metal fabrication, Tamil Nadu",
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Trusted by MSME teams"
          title="Built for manufacturers who cannot hire a full EHS desk"
          description="Real stories from Indian plants working toward cleaner, audit-ready operations."
        />
        <ScrollRevealStagger className="mt-12 grid gap-5 md:grid-cols-3">
          {quotes.map((q) => (
            <ScrollRevealItem
              key={q.role}
              className="rounded-2xl border border-border bg-surface p-6 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
            >
              <blockquote>
                <p className="text-sm leading-relaxed text-foreground">&ldquo;{q.quote}&rdquo;</p>
                <footer className="mt-4 text-xs text-muted-foreground">{q.role}</footer>
              </blockquote>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
