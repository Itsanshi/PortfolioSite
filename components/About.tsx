import { about, education } from "@/lib/data";
import { Reveal, StaggerGroup, StaggerItem } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="container-page grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <SectionHeading
          eyebrow="01 · About"
          title="A little about me"
          description="How I got from a computer science classroom to building Salesforce and Java systems in production."
        />

        <div>
          <StaggerGroup className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <StaggerItem key={i}>
                <p className="text-ash-muted leading-relaxed">{p}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15} className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-surface/60 px-4 py-5 text-center"
              >
                <div className="font-display text-xl sm:text-2xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-ash-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-surface/40 px-5 py-4">
            <span className="mt-0.5 text-accent-purple">
              <GraduationCap size={20} />
            </span>
            <div>
              <p className="text-sm text-white font-medium">{education.degree}</p>
              <p className="text-sm text-ash-muted">{education.school}</p>
              <p className="mt-1 text-xs font-mono-ui text-ash-faint">
                {education.period} · CGPA {education.cgpa}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
