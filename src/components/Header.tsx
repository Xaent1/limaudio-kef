import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";

const links = [
  { href: "#why", label: "Почему KEF" },
  { href: "#uniq", label: "Uni-Q" },
  { href: "#room", label: "Помещение" },
  { href: "#formats", label: "Форматы" },
  { href: "#showroom", label: "Шоурум" },
];

const PHONE = "+7 (843) 000-00-00";
const PHONE_HREF = "tel:+78430000000";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-brand-pattern/60 bg-black/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <Logo withText={false} />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-semibold tracking-[0.3em] text-brand-white">
              LIMAUDIO
            </span>
            <span className="mt-1 hidden font-body text-[10px] uppercase tracking-[0.25em] text-brand-gray/70 sm:block">
              Аудиовизуальные пространства
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-body text-sm text-brand-gray xl:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-brand-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={PHONE_HREF} className="flex items-center gap-2 font-body text-sm text-brand-white transition hover:text-brand-gray">
            <Icon name="phone" className="h-4 w-4" />
            {PHONE}
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-brand-white px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-gray"
          >
            Подобрать акустику KEF
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-pattern text-brand-white lg:hidden"
          aria-label="Меню"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-2 -rotate-45" : "top-4"}`} />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-brand-pattern/40 bg-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-body text-brand-gray transition hover:bg-white/5 hover:text-brand-white"
            >
              {l.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="rounded-lg px-3 py-3 font-body text-brand-white">
            {PHONE}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-brand-white px-5 py-3.5 text-center font-heading text-xs font-semibold uppercase tracking-[0.16em] text-brand-black"
          >
            Подобрать акустику KEF
          </a>
        </nav>
      </div>
    </header>
  );
}
