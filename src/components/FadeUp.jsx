import { useInView } from "../hooks/useInView";

/**
 * Wraps children in a fade-up-on-scroll-into-view animation.
 * `delay` is in ms, used to stagger groups of items.
 */
export default function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
