import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-chrome px-6 text-center text-gray-100">
      <p className="text-sm uppercase tracking-[0.3em] text-rose-soft">404</p>
      <h1 className="mt-3 text-5xl font-light">You drifted off the chrome path.</h1>
      <p className="mt-6 max-w-2xl text-gray-400">
        The page you are after does not exist. Head back home and let&apos;s build something new.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[0.2em] text-rose-soft transition hover:bg-white/5"
      >
        Return Home
      </Link>
    </main>
  );
}
