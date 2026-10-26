import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ContentPage } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact ScamGuide | Educational Questions" },
    { name: "description", content: "Contact ScamGuide with general questions about scam awareness and educational information." },
    { property: "og:title", content: "Contact ScamGuide" },
    { property: "og:description", content: "Send a general scam-awareness or educational question to ScamGuide." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ]}), component: ContactPage,
});
function ContactPage() {
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const form = new FormData(e.currentTarget); if (form.get("website")) return; const email = String(form.get("email") ?? "").trim(); const message = String(form.get("message") ?? "").trim(); const consent = form.get("consent"); if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) return setError("Enter a valid email address."); if (!message || message.length > 2000) return setError("Enter a message of no more than 2,000 characters."); if (!consent) return setError("Please confirm the privacy acknowledgement."); setError("Your message has not been sent. Contact delivery is not configured yet. Please try again once the website owner has enabled it."); }
  return <ContentPage eyebrow="General educational inquiries" title="Contact ScamGuide" intro="Have a question about scam awareness or want more information about the types of scams discussed on ScamGuide? Enter your email address and leave us a message below.">
    <div className="mb-8 rounded-md border-l-4 border-primary bg-info-soft p-5"><b>Independent educational resource</b><p className="mt-2 text-muted-foreground">This form is for general questions and educational information only. ScamGuide does not provide Microsoft Support, computer repair, virus removal, remote-access assistance, or emergency technical support.</p></div>
    <form onSubmit={submit} className="max-w-2xl space-y-6" noValidate>
      <div><label htmlFor="email" className="font-bold">Email Address <span className="text-danger">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"/></div>
      <div><label htmlFor="message" className="font-bold">Comment / Question <span className="text-danger">*</span></label><div className="mt-2 flex gap-2 rounded-md bg-danger-soft p-3 text-sm text-danger-foreground"><AlertTriangle className="mt-0.5 size-4 shrink-0"/><span>Please do not submit passwords, verification codes, banking information, card details, government identification numbers, or other sensitive personal information.</span></div><textarea id="message" name="message" required maxLength={2000} rows={7} className="mt-3 w-full resize-y rounded-md border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"/></div>
      <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div>
      <label className="flex items-start gap-3"><input name="consent" type="checkbox" required className="mt-1 size-5 accent-primary"/><span>I understand that ScamGuide is an independent educational resource and does not provide Microsoft or technical-support services. I have read the <Link to="/privacy-policy" className="font-bold text-primary underline">Privacy Policy</Link>.</span></label>
      {error && <p role="alert" className="font-bold text-danger-foreground">{error}</p>}<Button type="submit">Submit</Button>
      <p className="text-sm text-muted-foreground">Form delivery setup: [SCAMGUIDE OWNER: ADD CONTACT EMAIL]. Messages are not publicly displayed or used for automatic marketing subscriptions.</p>
    </form>
  </ContentPage>;
}
