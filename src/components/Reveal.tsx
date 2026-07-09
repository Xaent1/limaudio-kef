import type { ReactNode } from "react";
import { useReveal } from "../lib/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

// Обёртка для плавного появления снизу вверх
export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
