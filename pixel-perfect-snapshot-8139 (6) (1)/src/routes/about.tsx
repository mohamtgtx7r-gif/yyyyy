import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ExternalLink, X } from "lucide-react";
import { ContentPage, TextSection } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About ScamGuide | Independent Scam-Awareness Resource" },
    { name: "description", content: "Learn how ScamGuide helps people recognize deceptive warnings, impersonation, and common online scam tactics." },
    { property: "og:title", content: "About ScamGuide" },
    { property: "og:description", content: "An independent educational resource for recognizing online scams and deceptive digital warnings." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ]}), component: AboutPage,
});

const covers = ["Fake security and virus warnings", "Tech-support scam tactics", "Impersonation scams", "Suspicious pop-ups and browser messages", "Social-engineering warning signs", "Fear and urgency tactics", "General online-safety practices"];
const notServices = ["Microsoft Support", "Windows Support", "Remote computer repair", "Paid virus removal", "Remote-access services", "Official product support"];
function AboutPage() { return <ContentPage eyebrow="About our work" title="About ScamGuide" intro="ScamGuide is an independent educational and scam-awareness website created to help internet users better recognize deceptive online activity.">
  <TextSection title="Our purpose"><p>Online scams can imitate familiar companies, security products, browser warnings, account notifications, and other trusted services. ScamGuide explains how these tactics commonly work and provides educational examples designed to make suspicious warning signs easier to recognize.</p><p>Our goal is straightforward: provide clear, accessible information that helps people recognize common scam techniques and respond more safely.</p></TextSection>
  <TextSection title="What ScamGuide covers"><ul className="grid gap-3 sm:grid-cols-2">{covers.map(x => <li key={x} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-safe"/><span>{x}</span></li>)}</ul></TextSection>
  <TextSection title="What ScamGuide does not do"><p>ScamGuide is not a technical-support company. We do not provide:</p><ul className="grid gap-3 sm:grid-cols-2">{notServices.map(x => <li key={x} className="flex gap-3"><X className="mt-1 size-5 shrink-0 text-danger"/><span>{x}</span></li>)}</ul><p>ScamGuide is not affiliated with, endorsed by, sponsored by, or operated by Microsoft Corporation. References to Microsoft, Windows, Microsoft Defender, and other third-party products or trademarks are educational; their respective trademarks remain the property of their owners.</p></TextSection>
  <TextSection title="Our educational approach"><p>Simulated scam messages and fake warnings are clearly labeled and marked “FAKE.” We never use a simulated warning to convince visitors that their own computer or device is infected or compromised.</p></TextSection>
  <TextSection title="Need official product support?"><p>For official assistance with Microsoft or Windows products, use Microsoft’s official support resources. ScamGuide provides independent educational information and is not an official product-support channel.</p><a className="inline-flex items-center gap-2 font-bold text-primary hover:underline" href="https://support.microsoft.com/" target="_blank" rel="noreferrer">Visit official Microsoft Support <ExternalLink className="size-4"/></a></TextSection>
  <Link to="/" hash="close" className="mt-8 inline-flex font-bold text-primary hover:underline">View the ScamGuide safety guide →</Link>
</ContentPage>; }
