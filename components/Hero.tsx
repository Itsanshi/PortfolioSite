"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-mono-ui text-ash-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
            </span>
            Open to Software Engineering roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-9 flex items-center font-mono-ui text-lg sm:text-xl text-accent-blue"
          >
            <span className="text-ash-muted mr-2">/</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={profile.roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {profile.roles[index]}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 w-[2px] h-5 bg-accent-blue animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-ash-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href={profile.resumeFile} variant="secondary" download>
              Download Resume <Download size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ash-muted hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ash-muted hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="text-ash-muted hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <HeroGraphic />
        </motion.div>
      </div>
    </section>
  );
}

function HeroGraphic() {
  const nodes = [
    { x: 220, y: 60, label: "Apex" },
    { x: 360, y: 130, label: "LWC" },
    { x: 120, y: 180, label: "Java" },
    { x: 300, y: 260, label: "Spring" },
    { x: 100, y: 320, label: "Security" },
    { x: 250, y: 400, label: "AI/CV" },
  ];

  return (
    <div className="relative aspect-square w-full max-w-md mx-auto animate-float">
      <svg viewBox="0 0 440 440" className="w-full h-full" role="img" aria-label="Network diagram representing Anshika's technical disciplines">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C8EFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9B7EF0" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="url(#lineGrad)"
              strokeWidth="1"
              opacity="0.35"
            />
          ))
        )}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x}
              cy={n.y}
              r="26"
              fill="#12151C"
              stroke={i % 2 === 0 ? "#6C8EFF" : "#9B7EF0"}
              strokeWidth="1.5"
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="10"
              fontFamily="var(--font-jetbrains-mono)"
              fill="#E7E9EE"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
