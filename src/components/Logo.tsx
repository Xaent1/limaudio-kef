type LogoProps = {
  withText?: boolean;
  className?: string;
  markColor?: string;
};

// Монограмма LA — Limaudio. Слева «L», справа «A» с диагональной ногой и скосом.
export default function Logo({
  withText = true,
  className = "",
  markColor = "currentColor",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Limaudio"
        role="img"
      >
        <g fill={markColor}>
          {/* L — стойка */}
          <path d="M40 50 H125 V310 H40 Z" />
          {/* L — опора / общий низ */}
          <path d="M40 250 H320 V310 H40 Z" />
          {/* A — правая стойка со скосом */}
          <path d="M250 50 H298 L320 74 V310 H250 Z" />
          {/* A — диагональная нога */}
          <path d="M250 95 L250 165 L215 250 L150 250 Z" />
        </g>
      </svg>
      {withText && (
        <span className="font-heading text-lg font-semibold tracking-[0.32em] text-brand-white">
          LIMAUDIO
        </span>
      )}
    </div>
  );
}
