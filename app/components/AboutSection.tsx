"use client";
import type { PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiFastapi,
  SiTensorflow,
  SiNextdotjs,
  SiAmazon,
  SiGooglecloud,
} from "react-icons/si";
import { HiOutlineDownload } from "react-icons/hi";
import portraitImage from "../../public/akhila.jpg";

export default function AboutSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { damping: 18, stiffness: 150, mass: 0.4 };
  const translateX = useSpring(pointerX, springConfig);
  const translateY = useSpring(pointerY, springConfig);
  const rotateX = useSpring(
    useTransform(pointerY, [-20, 20], [10, -10]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-20, 20], [-10, 10]),
    springConfig,
  );

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const relativeY = event.clientY - rect.top;

    pointerX.set((relativeX / rect.width - 0.5) * 28);
    pointerY.set((relativeY / rect.height - 0.5) * 28);
  };

  const resetPointerTilt = () => {
    pointerX.set(0);
    pointerY.set(0);
  };
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-28 md:py-36">

      {/* Spotlight behind portrait */}
      <div className="portrait-spotlight"></div>

      <div className="grid md:grid-cols-2 gap-20 items-center">

        {/* ---- PHOTO BLOCK ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.div
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden 
                          border border-white/10 shadow-[0_0_160px_rgba(255,255,255,0.08)] 
                          backdrop-blur-sm will-change-transform"
            style={{
              x: translateX,
              y: translateY,
              rotateX,
              rotateY,
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointerTilt}
            onPointerUp={resetPointerTilt}
          >
            
            <Image
              src={portraitImage}
              alt="Akhila Bendram"
              fill
              priority
              sizes="(min-width: 768px) 320px, 288px"
              className="object-cover object-center brightness-[0.92] saturate-125"
              placeholder="blur"
            />

            {/* Soft gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </motion.div>

        {/* ---- TEXT BLOCK ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
            About Me
          </h2>

          <p className="text-white/70 leading-relaxed text-base md:text-lg mb-6">
            I build calm, intelligent systems by blending 
            <span className="text-white"> data intuition</span>, 
            <span className="text-white/90"> AI reasoning</span>, and 
            <span className="text-white/90"> design sensitivity</span>.  
            I turn complex data and AI challenges into clear, high-quality solutions that actually move a product forward. My strengths live at the intersection of scalable engineering, intelligent automation, and thoughtful UI/UX — designing pipelines that perform, models that behave, and interfaces that feel intentional. I work with precision and calm consistency, bringing the kind of technical depth and cross-functional clarity teams rely on when they need results done right.
          </p>

          <p className="text-white/60 max-w-xl leading-relaxed text-sm md:text-base mb-8">
            From data pipelines to product logic to visual storytelling,  
            I solve problems end-to-end: architecture → reasoning → interface.
          </p>

          {/* ---- SKILLS WITH MICRO ICONS ---- */}
          <div className="mb-10">
            <h3 className="text-sm tracking-[0.25em] text-white/40 uppercase mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-4 text-white/80 text-xl">
              <SiPython />
              <SiJavascript />
              <SiNextdotjs />
              <SiReact />
              <SiFastapi />
              <SiTensorflow />
              <SiAmazon />
              <SiGooglecloud />
            </div>
          </div>

          {/* ---- DOWNLOAD RESUME BUTTON ---- */}
          <a
            href="..\public\Akhila_DataResume.docx"
            download
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 
                       px-5 py-3 rounded-full text-white text-sm backdrop-blur-sm
                       hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.07)]"
          >
            <HiOutlineDownload className="text-lg" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
