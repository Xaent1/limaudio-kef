import { useState } from "react";
import Icon from "./Icon";

// Заявки уходят на почту через FormSubmit (https://formsubmit.co) — без бэкенда.
const LEAD_EMAIL = "bly19081998@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${LEAD_EMAIL}`;

type Kind = "подбор" | "прослушивание";

type LeadFormProps = {
  kind?: Kind;
  scenario?: string;
  onClearScenario?: () => void;
  theme?: "dark" | "light";
};

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadForm({
  kind = "подбор",
  scenario,
  onClearScenario,
  theme = "dark",
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", phone: "", about: "" });

  const isListen = kind === "прослушивание";
  const light = theme === "light";

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Тип: isListen ? "Запись на прослушивание" : "Подбор акустики KEF",
          Имя: form.name,
          Телефон: form.phone,
          ...(scenario ? { Сценарий: scenario } : {}),
          [isListen ? "День_город" : "О_комнате"]: form.about || "—",
          _subject: isListen
            ? "Запись на прослушивание KEF — LIMAUDIO"
            : "Заявка на подбор KEF — LIMAUDIO",
          _template: "table",
        }),
      });
      const data = await res.json().catch(() => null);
      const ok = res.ok && (data?.success === true || data?.success === "true");
      setStatus(ok ? "ok" : "error");
      if (ok) setForm({ name: "", phone: "", about: "" });
    } catch {
      setStatus("error");
    }
  };

  const cardBg = light ? "border-black/10 bg-white" : "border-brand-pattern bg-white/[0.03]";
  const titleColor = light ? "text-brand-ink" : "text-brand-white";
  const subColor = light ? "text-brand-mute" : "text-brand-gray";

  if (status === "ok") {
    return (
      <div className={`flex flex-col items-center rounded-2xl border p-10 text-center ${cardBg}`}>
        <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-white text-brand-black ring-1 ring-black/10">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className={`heading-tracked text-xl ${titleColor}`}>Заявка принята</h3>
        <p className={`mt-3 max-w-sm font-body ${subColor}`}>
          {isListen
            ? "Согласуем удобное время прослушивания в шоуруме LIMAUDIO и свяжемся с вами."
            : "Инженер LIMAUDIO свяжется с вами, разберёт комнату и предложит систему на базе KEF."}
        </p>
      </div>
    );
  }

  const field = light
    ? "w-full rounded-lg border border-black/15 bg-black/[0.02] px-4 py-3.5 font-body text-brand-ink placeholder:text-brand-mute/70 outline-none transition focus:border-brand-ink/60 focus:ring-1 focus:ring-black/10"
    : "w-full rounded-lg border border-brand-pattern bg-black/40 px-4 py-3.5 font-body text-brand-white placeholder:text-brand-gray/60 outline-none transition focus:border-brand-white/70 focus:ring-1 focus:ring-white/20";

  return (
    <form onSubmit={handleSubmit} className={`grid gap-4 rounded-2xl border p-6 sm:p-8 ${cardBg}`}>
      {scenario && (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-brand-white/20 bg-brand-white/5 px-4 py-3">
          <span className={`font-body text-sm ${light ? "text-brand-ink" : "text-brand-white"}`}>
            Сценарий: <span className="font-medium">{scenario}</span>
          </span>
          {onClearScenario && (
            <button type="button" onClick={onClearScenario} className={`text-xs ${subColor} hover:underline`}>
              сбросить
            </button>
          )}
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <input required value={form.name} onChange={update("name")} placeholder="Имя" className={field} />
        <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="Телефон" className={field} />
      </div>
      <textarea
        value={form.about}
        onChange={update("about")}
        placeholder={isListen ? "Удобный день, время и город" : "Коротко о комнате или задаче"}
        rows={3}
        className={`${field} resize-none`}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-white px-6 py-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-brand-black ring-1 ring-black/5 transition hover:bg-brand-gray disabled:opacity-60"
      >
        {status === "sending"
          ? "Отправляем…"
          : isListen
            ? "Записаться на прослушивание"
            : "Подобрать акустику KEF"}
        {status !== "sending" && (
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-red-500">
          Не удалось отправить. Позвоните нам или попробуйте ещё раз.
        </p>
      )}
      <p className={`font-body text-xs ${light ? "text-brand-mute/80" : "text-brand-gray/70"}`}>
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  );
}
