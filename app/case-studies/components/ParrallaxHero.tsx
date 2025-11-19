"use client";

import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxHeroProps = {
  title: string;
  subtitle: string;
  tags?: string[];
};

const backgroundDots = Array.from({ length: 36 }, (_, index) => {
  const normalize = (value: number) => (value + 1) / 2;
  const top = normalize(Math.sin(index * 4.37)) * 100;
  const left = normalize(Math.cos(index * 5.11)) * 100;
  const duration = 8 + ((index * 0.63) % 5);

  return {
    id: index,
    top: `${top.toFixed(3)}%`,
    left: `${left.toFixed(3)}%`,
    duration,
  };
});

export default function ParallaxHero({
  title,
  subtitle,
  tags = [],
}: ParallaxHeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden text-center space-y-5">
      <ParallaxField />

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-radial from-white/8 via-transparent to-transparent blur-3xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-light tracking-wide z-10"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-white/70 max-w-2xl tracking-wide z-10"
      >
        {subtitle}
      </motion.p>

      {tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 z-10"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs uppercase tracking-[0.2em] text-white/70"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      )}
    </section>
  );
}

function ParallaxField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-black/0"
        animate={{ opacity: [0.15, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {backgroundDots.map(({ id, top, left, duration }) => (
        <motion.div
          key={id}
          className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
          style={{ top, left }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
