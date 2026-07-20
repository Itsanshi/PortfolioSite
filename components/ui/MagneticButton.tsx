"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, MouseEvent, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  as?: "a" | "button";
  ariaLabel?: string;
  download?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent-blue text-ink font-semibold hover:bg-white transition-colors shadow-glow",
  secondary:
    "bg-surface-raised text-ash border border-border hover:border-accent-blue/60 hover:text-white transition-colors",
  ghost:
    "text-ash-muted hover:text-white transition-colors",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  as,
  ariaLabel,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const tag = as ?? (href ? "a" : "button");
  const base = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm ${variantStyles[variant]} ${className}`;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {tag === "a" ? (
        <a
          href={href}
          onClick={onClick}
          aria-label={ariaLabel}
          download={download}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className={base}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} aria-label={ariaLabel} className={base}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
