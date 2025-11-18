"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CaseStudyCardProps {
  title: string;
  category: string;
  summary: string;
  slug: string;
  tags?: string[];
  image?: string;
}

export default function CaseStudyCard({
  title,
  category,
  summary,
  slug,
  tags = [],
  image,
}: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={clsx(
        "rounded-2xl p-6 md:p-8",
        "bg-neutral-900/60 backdrop-blur-xl border border-neutral-800",
        "shadow-[0_0_20px_-5px_rgba(255,255,255,0.08)]",
        "hover:shadow-[0_0_35px_-4px_rgba(255,160,80,0.22)]",
        "transition-all duration-300 cursor-pointer"
      )}
    >
      <Link href={`/case-studies/${slug}`}>
        <div className="space-y-4">
          {/* Category */}
          <p className="text-xs tracking-[0.2em] text-neutral-400 uppercase">
            {category}
          </p>

          {/* Title */}
          <h3 className="text-xl font-semibold tracking-wide text-white">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-neutral-400 leading-relaxed">
            {summary}
          </p>

          {/* Optional Preview Image */}
          {image && (
            <div className="rounded-xl overflow-hidden mt-4 border border-neutral-800 bg-neutral-800/40">
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-neutral-800/60 text-neutral-300 border border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="pt-2">
            <span className="text-sm text-rose-300 hover:text-rose-200 transition">
              View case study →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

