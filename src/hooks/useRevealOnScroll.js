import { useEffect, useRef, useState } from "react";

/**
 * useRevealOnScroll
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element enters the viewport. Pair with the `.reveal` /
 * `.reveal-visible` classes defined in index.css.
 *
 * The observer disconnects after the first reveal so the animation only
 * plays once per element, instead of re-triggering on every scroll pass.
 */
export function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
