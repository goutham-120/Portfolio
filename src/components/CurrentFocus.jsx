import { currentFocus } from "../data";
import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";

export default function CurrentFocus() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Current Focus" title="What I'm working on now" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentFocus.map((f, i) => (
            <FadeUp key={f.title} delay={i * 90}>
              <div className="group glass-card rounded-xl p-6 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform duration-200">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
