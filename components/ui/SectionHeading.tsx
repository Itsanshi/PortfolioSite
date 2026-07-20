import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-xs font-mono-ui uppercase tracking-[0.2em] text-accent-blue ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-accent-blue/50" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-ash-muted max-w-xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
