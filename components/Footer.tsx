import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ash-faint">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Framer Motion.</p>
        <p className="font-mono-ui">Designed and coded from scratch.</p>
      </div>
    </footer>
  );
}
