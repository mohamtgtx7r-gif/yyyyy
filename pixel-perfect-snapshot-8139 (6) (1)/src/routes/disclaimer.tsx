import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, TextSection } from "@/components/site-chrome";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({ meta: [
    { title: "ScamGuide Disclaimer" },
    { name: "description", content: "Important disclosures about ScamGuide simulations, trademarks, educational content, and lack of technical-support services." },
    { property: "og:title", content: "ScamGuide Disclaimer" },
    { property: "og:description", content: "Important disclosures about ScamGuide simulations, trademarks, educational content, and lack of technical-support services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Page,
});
function Page() { return <ContentPage eyebrow="Important information" title="ScamGuide Disclaimer" intro="ScamGuide provides independent educational information to help people recognize online scams and deceptive digital warnings.">
    <TextSection title="Independent resource"><p>ScamGuide is not Microsoft, Microsoft Support, or a technical-support provider and is not affiliated with, endorsed by, sponsored by, or operated by Microsoft Corporation.</p></TextSection>
    <TextSection title="Simulated examples"><p>Scam-warning examples may be simulations or recreations. Simulated examples are marked “FAKE” and labeled as educational examples. Fictional phone numbers, error codes, domains, and details shown in demonstrations are not support contact information.</p></TextSection>
    <TextSection title="No device diagnosis"><p>Visiting ScamGuide does not mean your device is infected or compromised. ScamGuide does not scan, diagnose, repair, or remotely access visitors’ devices.</p></TextSection>
    <TextSection title="General information only"><p>Information is general and may not apply to every security incident. ScamGuide does not provide emergency technical support or guarantee outcomes. If money, passwords, or remote access were involved, contact the relevant financial institution or trusted qualified professional using independently verified details.</p></TextSection>
    <TextSection title="Official assistance and trademarks"><p>For official product assistance, use the relevant company’s official resources. Microsoft, Windows, Microsoft Defender, and related names and trademarks are the property of Microsoft Corporation; references are solely educational and informational.</p></TextSection>
  </ContentPage>; }
