import FadeUp from "./FadeUp";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <FadeUp className="mb-12">
      <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      <span className="block h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" />
    </FadeUp>
  );
}
