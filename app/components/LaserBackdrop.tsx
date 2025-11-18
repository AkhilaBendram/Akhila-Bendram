export default function LaserBackdrop() {
  // a very subtle off-black vignette with a faint ellipse
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_20%,rgba(12,20,26,0.75),rgba(6,8,10,0.9)_60%,#050607_100%)]" />
    </div>
  );
}
