import { useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Icon from "./components/Icon";
import Reveal from "./components/Reveal";
import LeadForm from "./components/LeadForm";
import {
  whyKef,
  uniqBenefits,
  designAccents,
  roomReveal,
  steps,
  dealerAccents,
  formats,
  faqs,
} from "./data";

import showroom from "./assets/products/showroom.png";
import uniqDetail from "./assets/products/uniq-detail.png";
import vinyl from "./assets/products/vinyl.jpg";
import ls50w2shelf from "./assets/products/ls50w2-shelf.jpg";
import shelfLife from "./assets/products/ls50meta-life.jpg";
import listening from "./assets/products/listening.jpg";

const scrollToContact = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

/* ============ Экран 1 — Hero ============ */
function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <img src={showroom} alt="Шоурум LIMAUDIO с акустикой KEF" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      <div className="container-x relative py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-pattern bg-black/30 px-4 py-1.5 font-body text-xs text-brand-gray backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-white" />
            Официальный дилер KEF
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.06] text-brand-white sm:text-5xl lg:text-6xl">
            KEF. Звук, который раскрывается в вашем пространстве.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl font-body text-lg text-brand-gray">
            Официальный дилер KEF. Подбираем и настраиваем британскую акустику под
            вашу комнату, интерьер и музыку — и остаёмся рядом на всё время, пока
            система живёт у вас дома.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-white px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-gray"
            >
              Подобрать акустику KEF
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#showroom" className="inline-flex items-center gap-2 font-body text-sm text-brand-white underline-offset-4 hover:underline">
              Послушать в шоуруме
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-brand-gray/60 sm:flex">
        <span className="font-body text-[10px] uppercase tracking-[0.3em]">Листайте</span>
        <span className="h-10 w-px animate-pulse bg-brand-gray/40" />
      </div>
    </section>
  );
}

/* ============ Section label ============ */
function Label({ children, light }: { children: string; light?: boolean }) {
  return (
    <p className={`heading-tracked text-xs ${light ? "text-brand-mute" : "text-brand-gray"}`}>{children}</p>
  );
}

/* ============ Экран 2 — Почему KEF ============ */
function WhyKef() {
  return (
    <section id="why" className="border-t border-brand-pattern/40 bg-brand-black py-24">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <Label>Почему KEF</Label>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-white sm:text-4xl">
              С 1961 года KEF задаёт эталон британского звука.
            </h2>
            <p className="mt-5 max-w-lg font-body text-brand-gray">
              KEF — британская инженерная школа, чьи решения десятилетиями
              определяют, как звучит домашняя акустика высокого класса.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyKef.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-brand-pattern bg-white/[0.02] p-6 transition hover:border-brand-gray/50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-pattern text-brand-white">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-brand-white">{f.title}</h3>
                  <p className="mt-2 font-body text-sm text-brand-gray">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={150} className="relative">
          <div className="overflow-hidden rounded-3xl border border-brand-pattern bg-gradient-to-b from-[#141414] to-black">
            <img src={uniqDetail} alt="Драйвер KEF Uni-Q крупным планом" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Экран 3 — Uni-Q (светлая) ============ */
function UniQ() {
  return (
    <section id="uniq" className="bg-brand-light py-24 text-brand-ink">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Label light>Uni-Q: звук из одной точки</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
            Звук из одной точки — сцена, которая стоит на месте.
          </h2>
          <p className="mt-5 max-w-md font-body text-brand-mute">
            В акустике KEF высокочастотный излучатель расположен в центре
            среднечастотного, поэтому звук исходит из единого источника. Сцена
            собирается точно, а любимое место для прослушивания перестаёт быть
            единственным.
          </p>
          <div className="mt-8 grid gap-5">
            {uniqBenefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-ink text-brand-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-brand-ink">{b.title}</h3>
                    <p className="mt-1 font-body text-sm text-brand-mute">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white">
            <img src={uniqDetail} alt="Схема единого источника звука Uni-Q" className="w-full object-cover" />
            {/* деликатная схема «из одной точки» */}
            <svg viewBox="0 0 200 200" className="pointer-events-none absolute inset-0 h-full w-full opacity-70" aria-hidden="true">
              <g fill="none" stroke="#ffffff" strokeWidth="1">
                <circle cx="100" cy="100" r="26" opacity="0.5" />
                <circle cx="100" cy="100" r="46" opacity="0.3" />
                <circle cx="100" cy="100" r="66" opacity="0.18" />
              </g>
              <circle cx="100" cy="100" r="5" fill="#ffffff" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Экран 4 — Дизайн (светлая) ============ */
function Design() {
  const shots = [
    { src: vinyl, alt: "KEF в гостиной с винилом" },
    { src: ls50w2shelf, alt: "KEF на полке в интерьере" },
    { src: shelfLife, alt: "KEF в рабочем пространстве" },
  ];
  return (
    <section className="border-t border-black/5 bg-brand-light py-24 text-brand-ink">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Label light>Дизайн и интерьер</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-ink sm:text-4xl">
            Акустика, которую хочется оставить на виду.
          </h2>
          <p className="mt-4 font-body text-brand-mute">
            KEF работает вместе с интерьером: чистые формы, богатые отделки и цвета,
            которые сочетаются с деревом, камнем, металлом и светом вашего пространства.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group overflow-hidden rounded-3xl border border-black/10">
                <img src={s.src} alt={s.alt} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {designAccents.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <h3 className="font-heading text-lg font-semibold text-brand-ink">{a.title}</h3>
                <p className="mt-2 font-body text-sm text-brand-mute">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 5 — Помещение раскрывает технику (ключевой) ============ */
function RoomReveals() {
  return (
    <section id="room" className="relative overflow-hidden border-t border-brand-pattern/40 bg-brand-black py-24">
      <img src={showroom} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <Label>Главное</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-white sm:text-[2.6rem]">
            Звук на 80% создаёт помещение. KEF раскрывается там, где комнату посчитали.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-lg text-brand-gray">
            В акустику KEF заложен большой потенциал. Полностью его отдаёт комната,
            где акустику рассчитали, разместили и настроили под ваше пространство.
          </p>
          <p className="mt-4 max-w-2xl font-body text-brand-gray">
            Инженер LIMAUDIO начинает с вашей комнаты: считает акустику, разбирает
            геометрию и материалы, определяет точки размещения. Дальше согласует
            тракт под KEF — усиление, питание, коммутацию, — монтирует систему и
            настраивает её по приборам. Так KEF звучит на полную именно у вас.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roomReveal.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-brand-pattern bg-white/[0.02] p-7">
                <span className="font-heading text-sm text-brand-gray/50">0{i + 1}</span>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-white text-brand-black">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-brand-white">{r.title}</h3>
                <p className="mt-2 font-body text-sm text-brand-gray">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-lg bg-brand-white px-8 py-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-black transition hover:bg-brand-gray"
          >
            Рассчитать акустику под мою комнату
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Экран 6 — Как мы подбираем (светлая) ============ */
function HowWePick() {
  return (
    <section className="bg-brand-light py-24 text-brand-ink">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Label light>Как мы подбираем KEF под вас</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
            Систему на базе KEF собираем под вашу комнату и вашу музыку.
          </h2>
          <p className="mt-4 font-body text-brand-mute">
            Путь от первого разговора до звука, который живёт у вас дома.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 90}>
              <div className="relative h-full rounded-2xl border border-black/10 bg-white p-7">
                <span className="font-heading text-5xl font-light text-black/10">{s.n}</span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-brand-ink">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-brand-mute">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 7 — Дилер и сопровождение ============ */
function DealerSupport() {
  return (
    <section className="border-t border-brand-pattern/40 bg-brand-black py-24">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-brand-pattern">
            <img src={listening} alt="Инженер LIMAUDIO с клиентом" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: "shield" as const, t: "Дилер" },
              { icon: "check" as const, t: "Гарантия" },
              { icon: "support" as const, t: "Инженер" },
            ].map((b) => (
              <div key={b.t} className="flex flex-col items-center gap-2 rounded-xl border border-brand-pattern bg-white/[0.02] py-4">
                <Icon name={b.icon} className="h-5 w-5 text-brand-white" />
                <span className="font-body text-xs text-brand-gray">{b.t}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Label>Доверие и сопровождение</Label>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-white sm:text-4xl">
              Официальный дилер KEF. Персональный инженер остаётся с вами.
            </h2>
            <p className="mt-5 max-w-lg font-body text-brand-gray">
              Оригинальная техника по прямому контракту, заводская гарантия и живая
              поддержка на всё время жизни системы.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {dealerAccents.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-brand-pattern bg-white/[0.02] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-pattern text-brand-white">
                    <Icon name={a.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-brand-white">{a.title}</h3>
                  <p className="mt-2 font-body text-sm text-brand-gray">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 8 — Форматы (светлая) ============ */
function Formats({ onPick }: { onPick: (s: string) => void }) {
  return (
    <section id="formats" className="border-t border-black/5 bg-brand-light py-24 text-brand-ink">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <Label light>Форматы KEF под любую комнату</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-ink sm:text-4xl">
            Для каждой комнаты — свой KEF.
          </h2>
          <p className="mt-4 font-body text-brand-mute">
            Акустику подбираем под сценарий: музыка, кино, повседневный звук и
            решения, встроенные в интерьер.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 90}>
              <button
                onClick={() => onPick(f.scenario)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white text-left transition hover:border-black/25 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <img src={f.image} alt={f.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-brand-ink">{f.title}</h3>
                  <p className="mt-3 flex-1 font-body text-sm text-brand-mute">{f.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-[0.16em] text-brand-ink transition group-hover:gap-3">
                    Подобрать под этот сценарий
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 9 — Шоурум ============ */
function Showroom() {
  return (
    <section id="showroom" className="relative overflow-hidden border-t border-brand-pattern/40 bg-brand-black py-24">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-brand-pattern">
            <img src={showroom} alt="Зона прослушивания в шоуруме LIMAUDIO" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Label>Прослушивание в шоуруме</Label>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-white sm:text-4xl">
              Услышьте KEF в подготовленном помещении.
            </h2>
            <p className="mt-5 font-body text-brand-gray">
              В шоуруме LIMAUDIO в Казани акустику KEF можно послушать в комнате с
              точной акустической подготовкой — так, как она звучит в правильно
              собранной системе.
            </p>
            <p className="mt-4 font-body text-brand-gray">
              Прослушивание — способ выбрать акустику на слух и услышать разницу до
              решения. Принесите любимые записи и оцените сцену, тембр и присутствие
              вживую.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <LeadForm kind="прослушивание" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 10 — FAQ (светлая) ============ */
function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-brand-light py-24 text-brand-ink">
      <div className="container-x max-w-3xl">
        <Reveal className="text-center">
          <Label light>Вопросы перед решением</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-ink sm:text-4xl">
            Ответим на главные вопросы заранее.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-6 text-left">
                  <span className="font-heading text-lg font-medium text-brand-ink">{f.q}</span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-brand-ink transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Icon name="plus" className="h-4 w-4" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <p className="overflow-hidden font-body text-brand-mute">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ Экран 11 — Финальный призыв ============ */
function FinalCta({ scenario, onClear }: { scenario?: string; onClear: () => void }) {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-brand-pattern/40 bg-brand-black py-24">
      <img src={shelfLife} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Label>Заявка на подбор</Label>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight text-brand-white sm:text-4xl">
            Подберём KEF, который раскроется именно в вашем доме.
          </h2>
          <p className="mt-5 max-w-md font-body text-brand-gray">
            Оставьте контакты — инженер LIMAUDIO разберёт вашу комнату, музыку и
            ориентир по бюджету и предложит систему на базе KEF под вас.
          </p>
          <ul className="mt-8 space-y-3 font-body text-sm text-brand-gray">
            {["Расчёт акустики под вашу комнату", "Официальная гарантия KEF", "Пожизненное сопровождение инженера"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-white text-brand-black">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-body text-sm text-brand-gray">
            Рядом с Казанью?{" "}
            <a href="#showroom" className="text-brand-white underline underline-offset-4">
              Запишитесь на прослушивание
            </a>
            .
          </p>
        </Reveal>
        <Reveal delay={150}>
          <LeadForm kind="подбор" scenario={scenario} onClearScenario={onClear} />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ Footer ============ */
function Footer() {
  return (
    <footer className="border-t border-brand-pattern/60 bg-brand-black py-14">
      <div className="container-x grid gap-10 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo withText={false} />
            <span className="font-heading text-base font-semibold tracking-[0.3em] text-brand-white">LIMAUDIO</span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm text-brand-gray/70">
            Аудиовизуальные пространства. Официальный дилер KEF: подбор, расчёт
            помещения, настройка и пожизненное сопровождение.
          </p>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-white">Контакты</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-gray">
            <li><a href="tel:+78430000000" className="transition hover:text-brand-white">+7 (843) 000-00-00</a></li>
            <li><a href="mailto:info@limaudio.ru" className="transition hover:text-brand-white">info@limaudio.ru</a></li>
            <li className="text-brand-gray/70">Казань, шоурум LIMAUDIO (адрес уточняется)</li>
            <li className="flex gap-4 pt-2">
              <a href="#" className="transition hover:text-brand-white">Telegram</a>
              <a href="#" className="transition hover:text-brand-white">WhatsApp</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-white">Документы</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-brand-gray">
            <li><a href="#" className="transition hover:text-brand-white">Политика конфиденциальности</a></li>
            <li><a href="#" className="transition hover:text-brand-white">Согласие на обработку данных</a></li>
            <li><a href="#" className="transition hover:text-brand-white">Основной сайт LIMAUDIO</a></li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-brand-pattern/40 pt-6">
        <p className="font-body text-xs text-brand-gray/50">
          © {new Date().getFullYear()} LIMAUDIO. KEF — торговая марка KEF Audio (UK) Ltd.
        </p>
      </div>
    </footer>
  );
}

/* ============ Mobile sticky CTA ============ */
function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-pattern/60 bg-black/90 p-3 backdrop-blur-md lg:hidden">
      <button
        onClick={scrollToContact}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-white px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-black"
      >
        Подобрать акустику KEF
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function App() {
  const [scenario, setScenario] = useState<string | undefined>(undefined);

  const pick = (s: string) => {
    setScenario(s);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-brand-black">
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <WhyKef />
        <UniQ />
        <Design />
        <RoomReveals />
        <HowWePick />
        <DealerSupport />
        <Formats onPick={pick} />
        <Showroom />
        <Faq />
        <FinalCta scenario={scenario} onClear={() => setScenario(undefined)} />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
