export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="relative max-w-4xl mx-auto px-6 pt-10 pb-12 text-white z-10">
      {/* Subtle luminance sweep */}
      <div className="absolute inset-0 -top-8 pointer-events-none opacity-[0.15]">
        <div className="mx-auto max-w-3xl h-24 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs tracking-[0.32em] uppercase text-white/40 mb-3">
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-light tracking-wide leading-tight">
        {title}
      </h1>
    </header>
  );
}
