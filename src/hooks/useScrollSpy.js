import { useEffect, useState } from "react";

/**
 * useScrollSpy
 * Watches a list of section ids and returns whichever one currently
 * occupies the middle band of the viewport, so the navbar can highlight
 * the active link as the user scrolls.
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Treat the vertical middle of the viewport as the "active" zone.
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
