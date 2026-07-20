import { experience } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="02 · Experience"
          title="Where I've worked"
          description="Three roles, three different technical worlds — Salesforce, backend engineering, and cybersecurity."
        />

        <div className="mt-16 relative">
          <div
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-border"
            aria-hidden="true"
          />

          <ul className="space-y-14">
            {experience.map((job, i) => (
              <li key={job.company} className="relative pl-12 sm:pl-14">
                <Reveal delay={i * 0.1}>
                  <span
                    className={`absolute left-0 top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border ${
                      job.current
                        ? "border-accent-blue bg-accent-blue/10"
                        : "border-border bg-surface"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        job.current ? "bg-accent-blue" : "bg-ash-faint"
                      }`}
                    />
                  </span>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {job.role}
                    </h3>
                    <span className="font-mono-ui text-xs text-accent-blue">{job.period}</span>
                  </div>
                  <p className="text-sm text-ash-muted mt-0.5">{job.company}</p>

                  <p className="mt-3 text-ash-muted leading-relaxed max-w-2xl">{job.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-ash-muted leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
