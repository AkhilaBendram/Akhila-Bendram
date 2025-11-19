// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import BackgroundFX from "./components/BackgroundFX";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Akhila Bendram - Data x AI x Design",
  description:
    "Data-first systems with AI fluency and refined UI/UX craft. Calm motion, metallic depth, and quiet luxury interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-[#050505] text-white antialiased overflow-x-hidden">
        <SmoothScroll />
        <BackgroundFX />
        <Nav />
        <main className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 pt-32 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}
