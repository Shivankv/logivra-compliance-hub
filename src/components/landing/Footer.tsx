import { Leaf } from "lucide-react";

const groups = [
  {
    title: "Platform",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Obligation register", href: "#features" },
      { label: "Reporting", href: "#features" },
      { label: "Security", href: "#trust" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Air permits", href: "#who" },
      { label: "Water and wastewater", href: "#who" },
      { label: "Waste management", href: "#who" },
      { label: "Multi-site programs", href: "#who" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Book a demo", href: "#demo" },
      { label: "Contact sales", href: "#demo" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                SysComp
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Compliance software for EHS teams. Permits in, obligations out, evidence
              ready.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SysComp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#demo" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#demo" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
