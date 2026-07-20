"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Badge } from "./ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Selected work"
          description="Two projects I'm proudest of — one in applied AI, one in real-world systems engineering."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="h-full flex flex-col rounded-3xl border border-border bg-surface/60 p-7 hover:border-accent-purple/50 hover:bg-surface-raised transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-accent-purple mt-1">{project.subtitle}</p>
                    )}
                  </div>
                  <span className="font-mono-ui text-xs text-ash-faint whitespace-nowrap">
                    {project.period}
                  </span>
                </div>

                <p className="mt-4 text-ash-muted leading-relaxed">{project.description}</p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-ash-muted leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border/70">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ash hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-blue hover:text-white transition-colors"
                    >
                      Live demo <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
