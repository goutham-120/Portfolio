import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, FileText, Eye, Download } from "lucide-react";
import { personalInfo } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

function LeetCodeIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0Z"/>
      <path d="M20.811 10.353H10.342a1.378 1.378 0 0 0-1.374 1.376c0 .758.616 1.374 1.374 1.374h10.469a1.378 1.378 0 0 0 1.374-1.374 1.378 1.378 0 0 0-1.374-1.376Z"/>
    </svg>
  );
}

const SUBTITLE_PHRASES = [
  "MERN Stack Developer",
  "Machine Learning Enthusiast",
  "Software Engineering",
];

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const dropRef = useRef(null);
  const typedSubtitle = useTypewriter(SUBTITLE_PHRASES);

  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Hide the "scroll to explore" hint once the user actually starts scrolling.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleView = () => {
    window.open(personalInfo.resumeFile, "_blank");
    setResumeOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeFile;
    link.download = "Nagila_Goutham_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setResumeOpen(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden"
    >
      {/* Ambient background glow — distinguishes hero from the rest of the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[5%] w-[30rem] h-[30rem] rounded-full bg-violet-400/15 dark:bg-violet-700/20 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open to Software Development Internships
            </div>

            {/* Name renders once, statically — no animation on the name itself */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-[1.05]">
              Nagila{" "}
              <span className="text-gradient">Goutham</span>
            </h1>

            {/* Typing animation lives only here, on the subtitle */}
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-mono mb-3 h-7 flex items-center">
              {typedSubtitle}
              <span className="inline-block w-[2px] h-5 bg-indigo-500 ml-1 animate-blink" />
            </p>

            <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-medium mb-6">
              {personalInfo.tagline}
            </p>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-9">
              {personalInfo.intro}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative" ref={dropRef}>
                <button
                  onClick={() => setResumeOpen((v) => !v)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5"
                >
                  <FileText size={15} />
                  Resume
                  <ChevronDown size={14} className={`transition-transform duration-200 ${resumeOpen ? "rotate-180" : ""}`} />
                </button>
                {resumeOpen && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
                    <button
                      onClick={handleView}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Eye size={14} className="text-indigo-500" />
                      View Resume
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2.5 w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-800"
                    >
                      <Download size={14} className="text-indigo-500" />
                      Download PDF
                    </button>
                  </div>
                )}
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Github size={15} />
                GitHub
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <LeetCodeIcon size={15} />
                LeetCode
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={15} />
                Contact
              </a>
            </div>
          </div>

          {/* Right: Signature element — a terminal showing who he is, in his own medium */}
          <div className="relative animate-slide-up lg:justify-self-end w-full max-w-md">
            {/* Soft purple glow ring around the terminal */}
            <div className="absolute -inset-3 bg-indigo-500/20 dark:bg-indigo-500/25 blur-2xl rounded-2xl -z-10" />

            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-indigo-900/10 dark:shadow-black/40 bg-[#0d1117]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-[11px] text-gray-400 font-mono">goutham.dev — zsh</span>
              </div>
              {/* Terminal body — content is static after the page's initial render */}
              <div className="px-6 py-6 font-mono text-[13px] leading-[1.8]">
                <p className="text-gray-400">
                  <span className="text-[#27c93f]">goutham@cbit</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-[#79b8ff]">~</span>
                  <span className="text-gray-500">$ </span>
                  whoami
                </p>
                <p className="text-gray-200 mt-1.5">Nagila Goutham</p>
                <p className="text-gray-200">Full Stack Developer · MERN</p>

                <p className="text-gray-400 mt-4">
                  <span className="text-[#27c93f]">goutham@cbit</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-[#79b8ff]">~</span>
                  <span className="text-gray-500">$ </span>
                  cat stats.json
                </p>
                <div className="mt-1.5 text-gray-200">
                  <p>{"{"}</p>
                  <p className="pl-4">
                    <span className="text-[#ff7b72]">"cgpa"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#a5d6ff]">9.62</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#ff7b72]">"leetcode_solved"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#a5d6ff]">500+</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#ff7b72]">"streak_days"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#a5d6ff]">400+</span>,
                  </p>
                  {/* <p className="pl-4">
                    <span className="text-[#ff7b72]">"stack"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#a5d6ff]">"MERN"</span>,
                  </p> */}
                  <p className="pl-4">
                    <span className="text-[#ff7b72]">"Projects"</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-[#a5d6ff]">4</span>
                  </p>
                  <p>{"}"}</p>
                </div>

                <p className="text-gray-400 mt-4 mb-2 flex items-center gap-1">
                  <span className="text-[#27c93f]">goutham@cbit</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-[#79b8ff]">~</span>
                  <span className="text-gray-500">$</span>
                  <span className="inline-block w-2 h-3.5 bg-gray-300 ml-1 animate-blink" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — bounces gently, fades out once the user scrolls */}
      <div
        className={`max-w-6xl mx-auto w-full mt-14 px-0 transition-opacity duration-500 ${
          hasScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <a
          href="#about"
          className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors w-fit animate-soft-bounce"
        >
          <ChevronDown size={14} />
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
