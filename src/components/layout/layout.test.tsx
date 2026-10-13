import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "./Footer";
import { Header } from "./Header";

describe("Layout components", () => {
  // Header suite: verifies menu state controls and navigation callbacks.
  describe("Header", () => {
    it("exposes the current menu state and toggles it", async () => {
      const user = userEvent.setup();
      const onToggle = vi.fn();

      render(
        <MemoryRouter>
          <Header isOpen={false} onToggle={onToggle} onNavigate={vi.fn()} />
        </MemoryRouter>,
      );

      const menuButton = screen.getByRole("button", { name: "Toggle menu" });
      expect(menuButton).toHaveAttribute("aria-expanded", "false");

      await user.click(menuButton);
      expect(onToggle).toHaveBeenCalledOnce();
    });

    it("calls onNavigate with the selected section hash", async () => {
      const user = userEvent.setup();
      const onNavigate = vi.fn();

      render(
        <MemoryRouter>
          <Header isOpen onToggle={vi.fn()} onNavigate={onNavigate} />
        </MemoryRouter>,
      );

      await user.click(screen.getByRole("button", { name: "Expertise" }));
      expect(onNavigate).toHaveBeenCalledWith("#services");
    });
  });

  // Footer suite: verifies contact content and external social links.
  describe("Footer", () => {
    it("renders the contact email and social destinations", () => {
      render(<Footer />);

      expect(screen.getByRole("contentinfo")).toHaveAttribute("id", "contact");
      expect(
        screen.getByRole("link", { name: /suhail14217@gmail.com/ }),
      ).toHaveAttribute("href", "mailto:suhail14217@gmail.com");
      expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
        "href",
        "https://github.com/Gr7ed",
      );
      expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/suhail-khalil",
      );
    });
  });
});
