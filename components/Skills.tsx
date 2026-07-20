"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { Code2, Server, Cloud, Database, Wrench, Cog } from "lucide-react";

const icons = [Code2, Server, Cog, Cloud, Database, Wrench];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="03 · Skills"
          title="What I work with"
          description="A cross-section of the languages, frameworks, and tools I use to ship — from Salesforce to backend to cloud."
        />

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={group.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-border bg-surface/60 p-6 hover:border-accent-blue/50 hover:bg-surface-raised transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-ink transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-white">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-surface px-3 py-1 text-xs text-ash-muted border border-border/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
