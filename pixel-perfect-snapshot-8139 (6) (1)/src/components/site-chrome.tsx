import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const mainLinks = [
  { to: "/" as const, hash: "", label: "Home" },
  { to: "/" as const, hash: "close", label: "Safety Guide" },
  { to: "/about" as const, hash: "", label: "About" },
  { to: "/contact" as const, hash: "", label: "Contact" },
];

export function SiteChrome({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="border-b border-hero-border bg-hero text-hero-foreground">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold" onClick={() => setOpen(false)}><ShieldCheck className="size-6"/>ScamGuide</Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">{mainLinks.map((item) => <Link key={item.label} to={item.to} hash={item.hash} className="rounded-md px-3 py-2 text-sm font-bold text-hero-muted hover:bg-hero-soft hover:text-hero-foreground" activeProps={{ className: "bg-hero-soft text-hero-foreground" }}>{item.label}</Link>)}</nav>
        <Button variant="secondary" size="icon" className="md:hidden" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="border-t border-hero-border px-5 py-3 md:hidden">{mainLinks.map((item) => <Link key={item.label} to={item.to} hash={item.hash} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 font-bold text-hero-muted hover:bg-hero-soft hover:text-hero-foreground">{item.label}</Link>)}</nav>}
    </header>
    {children}
    <footer className="bg-hero text-hero-muted">
      <div className="mx-auto max-w-7xl px-5 py-10 text-sm md:px-8">
        <div className="flex items-center gap-2 font-display text-lg font-extrabold text-hero-foreground"><ShieldCheck className="size-5"/>ScamGuide</div>
        <nav aria-label="Footer navigation" className="mt-5 flex flex-wrap gap-x-5 gap-y-3 font-bold text-hero-foreground">
          <Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/disclaimer">Disclaimer</Link>
        </nav>
        <p className="mt-6 max-w-4xl">ScamGuide is an independent educational and scam-awareness resource. It is not affiliated with or endorsed by Microsoft Corporation.</p>
        <p className="mt-3 max-w-4xl">Microsoft, Windows, Microsoft Defender, and related names and trademarks are the property of Microsoft Corporation. References are made solely for educational and informational purposes.</p>
        <p className="mt-5">© 2026 ScamGuide. All rights reserved.</p>
      </div>
    </footer>
  </div>;
}

export function ContentPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <main><section className="bg-hero text-hero-foreground"><div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20"><p className="text-xs font-bold uppercase tracking-widest text-hero-muted">{eyebrow}</p><h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-hero-muted">{intro}</p></div></section><div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">{children}</div></main>;
}

export function TextSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="border-b border-border py-8 first:pt-0 last:border-0"><h2 className="text-2xl font-extrabold">{title}</h2><div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div></section>;
}
