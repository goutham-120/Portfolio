import { achievements } from "../data";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";

function StatCard({ a, delay }) {
  const [ref, inView] = useInView();
  const count = useCountUp(a.target, inView, { decimals: a.decimals, duration: 1300 });
  const displayValue = a.decimals > 0 ? count.toFixed(a.decimals) : count;

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        transitionDelay: inView ? `${delay}ms` : "0ms",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="glass-card rounded-xl p-6 text-center hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/30 transition-all duration-300">
        <p className="text-3xl sm:text-4xl font-bold text-gradient mb-1 font-mono tabular-nums">
          {a.prefix}
          {displayValue}
          {a.suffix}
        </p>
        <p className="text-sm font-medium text-gray-900 dark:text-white">{a.label}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{a.sub}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Achievements" title="Numbers that tell the story" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {achievements.map((a, i) => (
            <StatCard key={a.label} a={a} delay={i * 100} />
          ))}
        </div>

        {/* Hackathons & Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeUp delay={0}>
            <div className="glass-card rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-100/30 dark:hover:shadow-none transition-all duration-300">
              <h3 className="text-xs font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-4">
                Hackathons
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">COSC HacktoberFest 2024 & 2025</span>
                  <p className="text-gray-500 dark:text-gray-400 mt-0.5">
                    Progressed from web apps in 2024 to an AI-powered solution in 2025, contributing to a system with 94% model accuracy.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Sudhee-HICON 2026</span>
                  <p className="text-gray-500 dark:text-gray-400 mt-0.5">
                    Secured a place among the top 60 teams out of 400+ participants in a national-level hackathon.
                  </p>
                </li>
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="glass-card rounded-xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-100/30 dark:hover:shadow-none transition-all duration-300">
              <h3 className="text-xs font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-4">
                Leadership & Volunteering
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Volunteer, Robovanza</span>
                  <p className="text-gray-500 dark:text-gray-400 mt-0.5">
                    Robotics Club of CBIT — assisted in planning and organizing technical events and workshops.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">Member, CSI CBIT Chapter</span>
                  <p className="text-gray-500 dark:text-gray-400 mt-0.5">
                    Participated in tech talks, coding drives, and knowledge-sharing initiatives.
                  </p>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
