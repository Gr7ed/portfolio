import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { LocaleProvider, useLocale } from "./i18n";

function LocaleProbe() {
  const { t, locale, direction } = useLocale();
  return (
    <>
      <output data-testid="locale">{locale}</output>
      <output data-testid="direction">{direction}</output>
      <p>{t("home")}</p>
    </>
  );
}

function LanguageToggle() {
  const { toggleLocale, t } = useLocale();
  return <button type="button" onClick={toggleLocale}>{t("languageName")}</button>;
}

describe("localization", () => {
  afterEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  });

  it("switches to Arabic, updates document metadata, and persists the locale", async () => {
    const user = userEvent.setup();

    render(
      <LocaleProvider>
        <LocaleProbe />
        <LanguageToggle />
      </LocaleProvider>,
    );

    await user.click(screen.getByRole("button", { name: "العربية" }));

    expect(screen.getByTestId("locale")).toHaveTextContent("ar");
    expect(screen.getByTestId("direction")).toHaveTextContent("rtl");
    expect(screen.getByText("الرئيسية")).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(window.localStorage.getItem("portfolio-locale")).toBe("ar");
  });

  it("provides an explicit Arabic locale class for localized styling", () => {
    function LocaleClassProbe() {
      const { locale } = useLocale();
      return <div data-testid="app-shell" className={`app-shell locale-${locale}`} />;
    }

    window.localStorage.setItem("portfolio-locale", "ar");
    render(
      <LocaleProvider>
        <LocaleClassProbe />
      </LocaleProvider>,
    );

    expect(screen.getByTestId("app-shell")).toHaveClass("app-shell", "locale-ar");
  });
});
