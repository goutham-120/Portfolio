import { personalInfo } from "../data";
import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <FadeUp>
            <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Building software that scales
            </h2>
            <span className="block h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 mb-6" />
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My current focus is on deepening expertise in system design and machine learning, while continuing to ship well-engineered full-stack products. I'm looking to join a team where I can contribute meaningfully and keep growing fast.
            </p>
          </FadeUp>

          {/* Right: Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FadeUp delay={0}>
              <InfoCard
                label="Education"
                title="B.E. Information Technology"
                sub="CBIT · 2024–2028"
                badge="CGPA 9.62"
              />
            </FadeUp>
            <FadeUp delay={80}>
              <InfoCard
                label="Competitive Programming"
                title="470+ Problems"
                sub="LeetCode"
                badge="400+ Day Streak"
              />
            </FadeUp>
            <FadeUp delay={160}>
              <InfoCard
                label="Primary Stack"
                title="MERN Stack"
                sub="MongoDB · Express · React · Node"
                badge="Full Stack"
              />
            </FadeUp>
            <FadeUp delay={240}>
              <InfoCard
                label="Currently Exploring"
                title="Machine Learning"
                sub="Python · NumPy · Pandas"
                badge="AI / ML"
              />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, title, sub, badge }) {
  return (
    <div className="glass-card rounded-xl p-5 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/30 transition-all duration-300">
      <p className="text-xs font-mono text-gray-400 dark:text-gray-500 mb-2">{label}</p>
      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{title}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{sub}</p>
      <span className="inline-block text-xs px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-medium">
        {badge}
      </span>
    </div>
  );
}
