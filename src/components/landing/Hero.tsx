import { ArrowRight, CalendarCheck, FileSearch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboard from "@/assets/dashboard.jpg";

const proof = [
  { icon: FileSearch, text: "Reads permits and rules for you" },
  { icon: CalendarCheck, text: "Every deadline has an owner" },
  { icon: ShieldCheck, text: "Audit evidence in one place" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-surface-gradient">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-accent-foreground">
              Environmental & EHS compliance, automated
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
              Turn permits into a compliance plan you can track.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SysComp reads your permits, regulations, and reports, then turns them into
              specific obligations with owners, due dates, and evidence. Less time in
              spreadsheets. No surprises before an audit.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <a href="#demo">
                  Book a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-border px-6 text-base"
              >
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {proof.map((p) => (
                <li key={p.text} className="flex items-start gap-2">
                  <p.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-2 shadow-sm">
            <img
              src={dashboard}
              alt="SysComp dashboard listing permit obligations with due dates and status"
              width={1600}
              height={1104}
              className="w-full rounded-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
