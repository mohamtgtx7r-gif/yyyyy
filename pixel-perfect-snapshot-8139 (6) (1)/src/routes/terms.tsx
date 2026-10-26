import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, TextSection } from "@/components/site-chrome";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "ScamGuide Terms of Use" },
    { name: "description", content: "Terms governing the educational use of ScamGuide and its independent, non-support status." },
    { property: "og:title", content: "ScamGuide Terms of Use" },
    { property: "og:description", content: "Terms governing the educational use of ScamGuide and its independent, non-support status." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }), component: Page,
});
function Page() { return <ContentPage eyebrow="Website terms" title="ScamGuide Terms of Use" intro="These Terms govern access to ScamGuide, an independent educational and scam-awareness resource.">
    <TextSection title="Acceptance of Terms"><p>By using this website, you agree to these Terms. If you do not agree, do not use the website.</p></TextSection>
    <TextSection title="Educational purpose and no support relationship"><p>ScamGuide provides general educational and informational content, not professional, legal, financial, security, computer-repair, virus-removal, remote-access, or technical-support services. Using ScamGuide does not create a Microsoft customer-support, technical-support, computer-repair, or professional-services relationship.</p></TextSection>
    <TextSection title="No Microsoft affiliation"><p>ScamGuide is not Microsoft, Microsoft Support, or Windows Support and is not affiliated with, endorsed by, sponsored by, or operated by Microsoft Corporation. Microsoft, Windows, Microsoft Defender, and related names and trademarks belong to Microsoft Corporation.</p></TextSection>
    <TextSection title="User responsibilities and prohibited misuse"><p>You are responsible for independently evaluating information and using official resources where appropriate. Do not misuse the website, interfere with its operation, attempt unauthorized access, submit harmful content, impersonate others, or republish content deceptively.</p></TextSection>
    <TextSection title="Intellectual property"><p>ScamGuide content and presentation may be protected by applicable intellectual-property laws. Third-party names and marks remain the property of their respective owners and are referenced for education and identification.</p></TextSection>
    <TextSection title="Third-party websites"><p>Links are provided for convenience or reference. ScamGuide does not control third-party websites and is not responsible for their content, availability, or practices.</p></TextSection>
    <TextSection title="Accuracy and availability"><p>We aim to provide clear, useful information but do not guarantee that all content is complete, current, error-free, or appropriate for every situation. The website may change or become unavailable without notice.</p></TextSection>
    <TextSection title="Limitation of liability"><p>To the extent permitted by applicable law, ScamGuide is not liable for loss arising from reliance on general educational content or from third-party websites. Nothing here excludes liability that cannot legally be excluded.</p></TextSection>
    <TextSection title="Changes and contact"><p>The website and these Terms may change. Contact details: [SCAMGUIDE OWNER: ADD CONTACT EMAIL]. No jurisdiction or legal entity is stated because none has been provided.</p><p>Last updated: September 29, 2026.</p></TextSection>
  </ContentPage>; }
