// app/components/Nav.tsx
"use client";

import Link from "next/link";
import clsx from "clsx";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-4 backdrop-blur-md bg-black/30 border-b border-white/5 flex justify-between items-center">
      {/* ---- LEFT BRAND ---- */}
      <Link 
        href="/" 
        className="text-[18px] tracking-[0.25em] font-semibold text-white/90 hover:text-white transition-all duration-300"
      >
        AKHILA BENDRAM
      </Link>

      {/* ---- RIGHT NAV LINKS ---- */}
      <div className="flex gap-10 text-sm tracking-wide text-white/70">
        <Link href="/vision" className="hover:text-white transition">Vision</Link>
        <Link href="/work" className="hover:text-white transition">Work</Link>
        <Link href="/case-studies" className="nav-link text-sm text-white/70 hover:text-white">Case Studies</Link>

        <Link href="/process" className="hover:text-white transition">Process</Link>
        <Link href="/contact" className="hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
