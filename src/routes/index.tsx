import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import {
  Faq,
  Features,
  FinalCta,
  HowItWorks,
  Problem,
  Trust,
  WhoItsFor,
} from "@/components/landing/Sections";
import { Footer } from "@/components/landing/Footer";

const title = "Logivra — Automated environmental and EHS compliance";
const description =
  "Logivra reads your permits, regulations, and reports and turns them into trackable obligations with owners, deadlines, and audit-ready evidence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
