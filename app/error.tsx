"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-chrome text-center text-gray-100 px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-rose-soft">Unexpected Error</p>
      <h1 className="mt-3 text-5xl font-light">Something went sideways.</h1>
      <p className="mt-6 max-w-2xl text-gray-400">
        {error.message || "The experience hit a snag. Try refreshing or head back to the start."}
      </p>
      <button
        className="mt-8 rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[0.2em] text-rose-soft transition hover:bg-white/5"
        onClick={reset}
      >
        Retry
      </button>
      {error.digest && <p className="mt-4 text-xs text-gray-500">Digest: {error.digest}</p>}
    </main>
  );
}
