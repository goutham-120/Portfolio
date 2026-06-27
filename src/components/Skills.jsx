import {
  SiCplusplus,
  SiOpenjdk,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { Code2 } from "lucide-react";
import { skills } from "../data";
import SectionHeading from "./SectionHeading";
import FadeUp from "./FadeUp";

// Maps each skill name to its brand icon + brand color.
// Items without a clean brand mark (e.g. "VS Code", "Matplotlib") fall back
// to a neutral code icon so every pill still has a visual.
const ICON_MAP = {
  "C++": { Icon: SiCplusplus, color: "#00599C" },
  Java: { Icon: SiOpenjdk, color: "#f89820" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { Icon: SiExpress, color: "#9b9b9b" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#9b9b9b" },
  "VS Code": { Icon: Code2, color: "#007ACC" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  NumPy: { Icon: SiNumpy, color: "#4DABCF" },
  Pandas: { Icon: SiPandas, color: "#150458" },
  Matplotlib: { Icon: Code2, color: "#11557c" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <FadeUp key={group.category} delay={i * 80}>
              <div className="glass-card rounded-xl p-6 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/30 transition-all duration-300">
                <h3 className="text-xs font-mono font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const mapped = ICON_MAP[item];
                    const Icon = mapped?.Icon;
                    const color = mapped?.color;
                    return (
                      <span
                        key={item}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-950 dark:hover:text-indigo-300 transition-colors duration-200 cursor-default"
                      >
                        {Icon && (
                          <Icon
                            size={14}
                            style={{ color }}
                            className="transition-transform duration-200 group-hover:scale-125"
                          />
                        )}
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
