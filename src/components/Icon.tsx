type IconProps = { name: IconName; className?: string };
export type IconName =
  | "speaker"
  | "wireless"
  | "soundbar"
  | "sub"
  | "headphones"
  | "floor"
  | "shield"
  | "truck"
  | "tune"
  | "phone"
  | "check"
  | "star"
  | "arrow"
  | "quote"
  | "plus"
  | "support"
  | "infinity"
  | "sparkle"
  | "target"
  | "link"
  | "wave";

const paths: Record<IconName, React.ReactNode> = {
  floor: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="9" r="2.4" />
      <circle cx="12" cy="16" r="1.2" />
    </>
  ),
  speaker: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.6" />
      <circle cx="12" cy="16.5" r="1.4" />
    </>
  ),
  wireless: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <path d="M8.5 12a3.5 3.5 0 0 1 7 0" />
      <circle cx="12" cy="12" r="1.2" />
      <path d="M4 18h16" />
    </>
  ),
  soundbar: (
    <>
      <rect x="2" y="9" width="20" height="6" rx="2" />
      <circle cx="7" cy="12" r="1.1" />
      <circle cx="12" cy="12" r="1.1" />
      <circle cx="17" cy="12" r="1.1" />
    </>
  ),
  sub: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.3" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="7" rx="1.6" />
      <rect x="17" y="13" width="4" height="7" rx="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  truck: (
    <>
      <rect x="1" y="6" width="13" height="10" rx="1.5" />
      <path d="M14 9h4l3 3v4h-7z" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  tune: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="8" cy="18" r="2" />
    </>
  ),
  phone: (
    <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L17 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2z" />
  ),
  check: <path d="M5 12l4 4L19 6" />,
  star: (
    <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  quote: (
    <path d="M7 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2H7zM15 7h4v6a4 4 0 0 1-4 4v-2a2 2 0 0 0 2-2h-2z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  support: (
    <>
      <path d="M5 12a7 7 0 0 1 14 0" />
      <rect x="3" y="12" width="3.5" height="7" rx="1.4" />
      <rect x="17.5" y="12" width="3.5" height="7" rx="1.4" />
      <path d="M19 19a4 4 0 0 1-4 3h-2" />
    </>
  ),
  infinity: (
    <path d="M6.5 9a3 3 0 1 0 0 6c1.6 0 2.6-1.2 3.5-3 .9-1.8 1.9-3 3.5-3a3 3 0 1 1 0 6c-1.6 0-2.6-1.2-3.5-3" />
  ),
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  link: (
    <>
      <path d="M9 15l6-6" />
      <path d="M10.5 6.5l1.5-1.5a4 4 0 0 1 5.5 5.5L16 12" />
      <path d="M13.5 17.5l-1.5 1.5a4 4 0 0 1-5.5-5.5L8 12" />
    </>
  ),
  wave: (
    <path d="M3 12c1.5 0 1.5-5 3-5s1.5 10 3 10 1.5-10 3-10 1.5 5 3 5 1.5-3 3-3" />
  ),
};

export default function Icon({ name, className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
