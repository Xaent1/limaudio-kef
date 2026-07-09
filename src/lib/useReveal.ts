import { useEffect, useRef, useState } from "react";

// Появление элементов при попадании во вьюпорт (IntersectionObserver)
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; once?: boolean }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const once = options?.once ?? true;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: options?.threshold ?? 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once, options?.threshold]);

  return { ref, visible };
}
