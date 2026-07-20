"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="05 · Achievements"
          title="Recognition along the way"
          description="Hackathons where I've put ideas together fast, under pressure, with a team."
        />

        <StaggerGroup className="mt-14 grid sm:grid-cols-2 gap-6">
          {achievements.map((a) => (
            <StaggerItem key={a.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="h-full rounded-2xl border border-border bg-surface/60 p-7 hover:border-accent-blue/50 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple">
                  <Trophy size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-1 font-mono-ui text-sm text-accent-blue">{a.result}</p>
                <p className="mt-3 text-sm text-ash-muted leading-relaxed">{a.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
