import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 px-8 py-16 sm:px-16 sm:py-20 text-center">
          <div
            className="pointer-events-none absolute inset-0 bg-radial-fade opacity-80"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-mono-ui text-accent-blue">
              06 · Contact
            </span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Let&apos;s build something worth shipping.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-ash-muted leading-relaxed">
              I&apos;m open to Software Engineering, Salesforce, and backend roles. If you&apos;re
              hiring or just want to talk shop, my inbox is open.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                <Mail size={16} /> Email me
              </MagneticButton>
              <MagneticButton href={profile.github} variant="secondary">
                <Github size={16} /> GitHub
              </MagneticButton>
              <MagneticButton href={profile.linkedin} variant="secondary">
                <Linkedin size={16} /> LinkedIn
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
