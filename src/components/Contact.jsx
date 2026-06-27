import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data";
import FadeUp from "./FadeUp";

function LeetCodeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0Z"/>
      <path d="M20.811 10.353H10.342a1.378 1.378 0 0 0-1.374 1.376c0 .758.616 1.374 1.374 1.374h10.469a1.378 1.378 0 0 0 1.374-1.374 1.378 1.378 0 0 0-1.374-1.376Z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <p className="text-xs font-mono text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Let's work together
          </h2>
          <span className="block h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
            I'm actively looking for software development internships. If you'd like to connect, reach out through any of the channels below.
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <FadeUp delay={0}>
            <ContactCard
              icon={<Mail size={18} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
            />
          </FadeUp>
          <FadeUp delay={80}>
            <ContactCard
              icon={<Github size={18} />}
              label="GitHub"
              value="goutham-120"
              href={personalInfo.github}
            />
          </FadeUp>
          <FadeUp delay={160}>
            <ContactCard
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value="nagila-goutham"
              href={personalInfo.linkedin}
            />
          </FadeUp>
          <FadeUp delay={240}>
            <ContactCard
              icon={<LeetCodeIcon size={18} />}
              label="LeetCode"
              value="View Profile"
              href={personalInfo.leetcode}
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-3 p-5 rounded-xl glass-card hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-100/40 dark:hover:shadow-indigo-950/30 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
        <p className="text-sm font-medium text-gray-900 dark:text-white break-all flex items-center gap-1 justify-center">
          {value}
          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </p>
      </div>
    </a>
  );
}
