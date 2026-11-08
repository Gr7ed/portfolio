import { SectionHeading } from "../layout/SectionHeading";
import { Button } from "../ui/button";
import { JSX } from "react/jsx-runtime";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function About(): JSX.Element {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className={clsx("mx-auto grid w-[calc(100%-2rem)] max-w-6xl gap-6 pt-20 sm:w-[calc(100%-3rem)] sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20", "reveal", isVisible && "is-visible")}
      id="about"
    >
      <div>
        <div className="relative min-h-96 overflow-hidden rounded-3xl border border-(--line) bg-linear-to-br from-(--accent-secondary)/20 to-(--surface) p-6" role="img" aria-label={t("engineeringToolkit")}>
          <div className="relative z-10 rounded-2xl border border-(--line) bg-(--visual)/80 p-5 shadow-2xl shadow-black/15 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-linear-to-br from-(--accent-secondary) to-(--accent) font-bold text-white">SK</span>
              <div>
                <strong className="block text-sm text-(--ink-inverse)">{t("engineeringToolkit")}</strong>
                <small className="mt-1 block text-[11px] text-(--muted-inverse)">{t("curiousByNature")}</small>
              </div>
              <span className="ms-auto size-2 rounded-full bg-(--accent) shadow-[0_0_14px_var(--accent)]" />
            </div>
            <div className="mt-7 h-2 rounded bg-(--visual-muted)" />
            <div className="mt-2 h-2 w-3/5 rounded bg-(--visual-muted)" />
            <div className="mt-7 grid grid-cols-3 gap-2">
              {["JS", "TS", "AI", "SQL", "API", "CI"].map((item) => <span className="rounded-lg bg-(--visual-muted) px-1 py-3 text-center text-xs text-(--accent)" key={item}>{item}</span>)}
            </div>
            <div className="mt-7 flex justify-between border-t border-(--line) pt-4 text-[11px] text-(--muted-inverse)">
              <span>BUILD</span>
              <strong className="text-(--accent)">100%</strong>
            </div>
          </div>
          <span className="absolute inset-e-7 top-9 size-2 rounded-full bg-(--accent) shadow-[0_0_18px_var(--accent)]" />
          <span className="absolute bottom-9 inset-s-7 size-2 rounded-full bg-[#fb7185] shadow-[0_0_18px_#fb7185]" />
        </div>
        <span className="mt-4 block text-xs text-(--muted)">
          {t("curiousByNature")}
          <br />◆ {t("focusedByCraft")}
        </span>
      </div>
      <div className="max-w-xl flex flex-col gap-4">
        <SectionHeading
          eyebrow={t("aboutSuhail")}
          title={<>{t("aboutTitleBefore")} <em>{t("aboutTitleEmphasis")}</em></>}
        />
        <p className="mt-5 text-base leading-7 text-(--muted)">{t("aboutParagraph1")}</p>
        <p className="mt-4 text-base leading-7 text-(--muted)">{t("aboutParagraph2")}</p>
        <Button className="mt-3" href="mailto:suhail142176@gmail.com" variant="outline">
          {t("startConversation")}
        </Button>
      </div>
      <Experience />
      <Skills />
    </section>
  );
}
