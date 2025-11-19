"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/10 border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* HOME LINK */}
        <Link
          href="/"
          className="text-lg tracking-wide font-light text-white hover:text-white/80"
        >
          Akhila Bendram
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-sm text-white/70">
          <NavLink href="/#work">Work</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
          <NavLink href="/vision">Vision</NavLink>
          <NavLink href="/process">Process</NavLink>
          <NavLink href="/#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: any) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} className="relative">
      <Link href={href} className="hover:text-white transition-colors">
        {children}
      </Link>
      <motion.span
        className="absolute left-0 -bottom-1 w-full h-px bg-white/30 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
