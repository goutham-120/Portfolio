import { useEffect, useState } from "react";

/**
 * Cycles through `phrases`, typing each one out character by character,
 * pausing, then deleting and moving to the next. Loops indefinitely.
 * If the user prefers reduced motion, just shows the first phrase statically.
 */
export function useTypewriter(
  phrases,
  { typingSpeed = 55, deletingSpeed = 30, pauseMs = 1600 } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs, reduced]);

  return text;
}
