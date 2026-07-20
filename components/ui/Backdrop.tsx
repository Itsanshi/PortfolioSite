export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute left-1/4 top-[10%] h-[420px] w-[420px] rounded-full bg-accent-blue/10 blur-[120px] animate-float-slow" />
      <div className="absolute right-[10%] top-[45%] h-[380px] w-[380px] rounded-full bg-accent-purple/10 blur-[120px] animate-float" />
      <div className="absolute left-[15%] bottom-[5%] h-[300px] w-[300px] rounded-full bg-accent-blue/5 blur-[100px] animate-float-slow" />
    </div>
  );
}
