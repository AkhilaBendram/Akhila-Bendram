// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import BackgroundFX from "./components/BackgroundFX";

export const metadata: Metadata = {
  title: "Akhila Bendram — Data · AI · Design",
  description: "Data × AI × UI/UX. Metallic depth, calm motion, quiet luxury systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#050505] text-white antialiased overflow-x-hidden">

        {/* ✦ Subtle moving luxe background */}
        <BackgroundFX />

        {/* ✦ Single clean navigation (top-left brand only) */}
        <Nav />

        {/* ✦ Page content */}
        <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 pt-32 pb-20">
          {children}
        </main>

      </body>
    </html>
  );
}
