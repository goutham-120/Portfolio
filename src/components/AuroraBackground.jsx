/**
 * Fixed, full-viewport ambient background: slow-drifting aurora blobs
 * plus a very faint dot grid. Sits behind all content (-z-10), fixed so it
 * doesn't repeat or jump as the user scrolls between sections.
 * Motion is slow and respects prefers-reduced-motion (see index.css).
 */
export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Dot grid, very low opacity */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-20 w-[36rem] h-[36rem] rounded-full bg-indigo-300/20 dark:bg-indigo-600/15 blur-[110px] animate-aurora-1" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-violet-300/15 dark:bg-violet-700/15 blur-[100px] animate-aurora-2" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] rounded-full bg-fuchsia-200/10 dark:bg-fuchsia-700/10 blur-[100px] animate-aurora-1" />
    </div>
  );
}
