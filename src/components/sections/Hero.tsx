import { Button } from "../ui/button";
import { JSX } from "react/jsx-runtime";
import { useReveal } from "../../hooks/useReveal";
import { useLocale } from "../../i18n";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { HeroScene } from "../ui/HeroScene";

export function Hero(): JSX.Element {
  const { t } = useLocale();
  const { elementRef, isVisible } = useReveal<HTMLElement>();
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={elementRef}
      className={clsx("mx-auto grid min-h-dvh w-[calc(100%-2rem)] max-w-6xl items-center gap-12 pb-16 pt-32 sm:w-[calc(100%-3rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-36", "reveal", isVisible && "is-visible")}
      id="home"
    >
      <motion.div
        className="max-w-2xl"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--accent)">{t("location")}</p>
        <h1 className="mt-4 pt-6 text-5xl font-semibold leading-[0.93] tracking-[-0.07em] text-(--ink) sm:text-7xl lg:text-8xl">
          {t("heroTitleBefore")} <em>{t("heroTitleEmphasis")}</em> {t("heroTitleAfter")}
        </h1>
        <p className="mt-6 pt-7 max-w-xl text-lg leading-8 text-(--muted)">{t("heroIntro")}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Button href="/#work">{t("viewProjects")}</Button>
          <a className="text-sm font-bold text-(--accent) transition hover:text-(--ink)" href="mailto:suhail142176@gmail.com">
            {t("getInTouch")} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mt-12 flex max-w-md gap-8 border-t border-(--line) pt-5">
          <span>
            <strong className="block text-2xl font-semibold text-(--ink)">5+</strong> <span className="text-xs text-(--muted)">{t("yearsExperience")}</span>
          </span>
          <span>
            <strong className="block text-2xl font-semibold text-(--ink)">3.60</strong> <span className="text-xs text-(--muted)">{t("gpa")}</span>
          </span>
        </div>
      </motion.div>
      <div className="relative min-h-88 sm:min-h-120">
        <HeroScene />
        <div className="absolute inset-4 rounded-4xl bg-linear-to-br from-(--accent)/25 via-(--accent-secondary)/20 to-transparent blur-2xl" />
        <div className="absolute inset-4 flex rotate-2 items-center justify-center overflow-hidden rounded-4xl border border-(--line) bg-(--visual) p-5 shadow-2xl shadow-black/20" role="img" aria-label={t("secureWorkspace")}>
          <div className="w-[78%] -rotate-2 overflow-hidden rounded-2xl border border-white/15 bg-[#070a1b] shadow-2xl">
            <div className="flex items-center gap-1.5 bg-[#111631] px-3 py-2">
              <span className="size-1.5 rounded-full bg-[#fb7185]" />
              <span className="size-1.5 rounded-full bg-[#fbbf24]" />
              <span className="size-1.5 rounded-full bg-(--accent)" />
              <strong className="ms-auto text-[9px] text-slate-400">secure.build</strong>
            </div>
            <div className="grid min-h-48 grid-cols-[2.4rem_1fr]">
              <div className="bg-[#0c1026] p-3">
                {[1, 2, 3, 4].map((item) => <i className="mb-4 block h-1 w-3 rounded bg-(--accent-secondary)/70" key={item} />)}
              </div>
              <div className="p-5">
                <div className="flex justify-between">
                  <span className="h-2 w-2/5 rounded bg-[#20264d]" />
                  <span className="h-2 w-1/5 rounded bg-(--accent)" />
                </div>
                <div className="mt-6 flex h-24 items-end gap-2">
                  {[30, 55, 42, 78, 62, 92].map((height, index) => <i className="flex-1 rounded-t bg-linear-to-t from-(--accent-secondary) to-(--accent)" style={{ height: `${height}%` }} key={index} />)}
                </div>
                <div className="mt-4 flex gap-2">
                  {[1, 2, 3].map((item) => <span className="h-5 flex-1 rounded bg-[#171d3d]" key={item} />)}
                </div>
              </div>
            </div>
          </div>

          <span className="absolute bottom-4 inset-s-8 text-2xl text-(--accent)">&lt;/&gt;</span>
        </div>
        <span className="absolute bottom-4 inset-e-10 text-left text-xs text-(--muted) rtl:text-right ">
          {t("buildWith")}
          <br />
          <strong className="text-lg text-(--ink)">{t("purpose")}</strong>
        </span>
      </div>
    </section>
  );
}
