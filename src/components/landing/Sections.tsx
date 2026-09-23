import {
  AlarmClock,
  ArrowRight,
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import permit from "@/assets/permit.jpg";
import facility from "@/assets/facility.jpg";

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
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {eyebrow}
      </p>
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
      title: "Obligations buried in PDFs",
      body: "A single air permit can hide dozens of duties across 80 pages. Reading them all takes days, and rereading them after a renewal takes days again.",
    },
    {
      icon: AlarmClock,
      title: "Deadlines tracked by memory",
      body: "Spreadsheets and calendar reminders break when people change roles. A missed monitoring date becomes a violation you find out about later.",
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
          title="Compliance work is manual, and the risk is personal"
          description="EHS managers carry the consequences of a missed obligation. Most still track them by hand."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
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
      body: "Drop in permits, consent orders, regulations, and past reports. Logivra handles scanned pages and long appendices.",
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
              title="From a stack of permits to a working plan"
              description="Three steps. Most teams see their first obligation register the same week they start."
            />
            <ol className="mt-10 space-y-5">
              {steps.map((s) => (
                <li
                  key={s.step}
                  className="flex gap-4 rounded-2xl border border-border bg-background p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                      STEP {s.step}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
                Every obligation links back to the exact clause it came from, so your team
                can check the wording without opening the original file.
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
      title: "Document processing",
      body: "Permits, regulations, and reports are read and structured automatically, including scanned copies.",
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
          description="Built around how EHS work actually happens, from permit renewal to inspection day."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoItsFor() {
  const roles = [
    { icon: Users, label: "EHS and compliance managers" },
    { icon: Factory, label: "Manufacturing and processing plants" },
    { icon: Building2, label: "Multi-site operations teams" },
    { icon: Wind, label: "Air permit holders" },
    { icon: Droplets, label: "Water and wastewater programs" },
    { icon: Recycle, label: "Waste and materials handling" },
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
              description="Logivra fits sites with real permits, real deadlines, and small teams holding it all together."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {roles.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3"
                >
                  <r.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{r.label}</span>
                </li>
              ))}
            </ul>
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
          description="Compliance data is sensitive. Logivra treats it that way."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {i.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const faqs = [
    {
      q: "What documents can Logivra read?",
      a: "Air, water, and waste permits, consent orders, regulatory text, monitoring plans, and previous compliance reports. Scanned and digital files both work.",
    },
    {
      q: "Do I have to trust the extraction blindly?",
      a: "No. Every obligation shows the source document and the paragraph it came from, and your team can edit, merge, or reject anything before it goes live.",
    },
    {
      q: "How long does setup take?",
      a: "Upload your permits and you can review a draft obligation register in days, not months. There is no data migration project to run first.",
    },
    {
      q: "Can we manage more than one site?",
      a: "Yes. Obligations are tagged by site and permit, so you can work facility by facility or review the whole program in one view.",
    },
    {
      q: "Does it replace our existing EHS system?",
      a: "It can, but it does not have to. Many teams use Logivra for permits and obligations and keep their other systems for incidents and training.",
    },
    {
      q: "What happens when a permit is renewed?",
      a: "Upload the new version and Logivra flags what changed, so you only review the differences instead of rereading the whole document.",
    },
  ];

  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear from EHS teams"
          description="If something is not covered here, ask us on the demo call."
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

export function FinalCta() {
  return (
    <section id="demo" className="bg-primary-deep">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">
          See your own permit turned into a plan
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Book a 30 minute demo. Bring one permit and we will show you the obligations
          Logivra pulls out of it.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="work-email" className="sr-only">
            Work email
          </label>
          <Input
            id="work-email"
            type="email"
            required
            placeholder="you@company.com"
            className="h-12 border-transparent bg-background text-base"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 bg-background px-6 text-base text-primary hover:bg-background/90"
          >
            Book a demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        <p className="mt-4 text-xs text-primary-foreground/70">
          No commitment. We will answer within one business day.
        </p>
      </div>
    </section>
  );
}
