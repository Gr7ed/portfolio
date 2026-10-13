import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";
import { Card } from "./card";
import { SectionHeading } from "../layout/SectionHeading";

describe("UI components", () => {
  // Button suite: verifies link semantics, variants, and content forwarding.
  describe("Button", () => {
    it("renders a primary link by default", () => {
      render(<Button href="/projects">View projects</Button>);

      const button = screen.getByRole("link", { name: "View projects" });
      expect(button).toHaveClass("button", "button-primary");
      expect(button).toHaveAttribute("href", "/projects");
    });

    it("renders the requested variant and forwards link props", () => {
      render(
        <Button href="#contact" variant="outline" aria-label="Contact link">
          Contact
        </Button>,
      );

      const button = screen.getByRole("link", { name: "Contact link" });
      expect(button).toHaveClass("button-outline");
      expect(button).toHaveAttribute("href", "#contact");
    });
  });

  // Card suite: verifies the button wrapper and click behavior used by projects.
  describe("Card", () => {
    it("renders children and handles clicks", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(
        <Card onClick={onClick} aria-label="Open project">
          Project content
        </Card>,
      );

      await user.click(screen.getByRole("button", { name: "Open project" }));
      expect(screen.getByText("Project content")).toBeInTheDocument();
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  // Section heading suite: verifies optional copy and light-theme styling.
  describe("SectionHeading", () => {
    it("renders the eyebrow and title without optional copy", () => {
      render(<SectionHeading eyebrow="About" title="About me" />);

      expect(screen.getByText("About")).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "About me" })).toBeInTheDocument();
      expect(screen.queryByText("Additional copy")).not.toBeInTheDocument();
    });

    it("renders copy and the light class when provided", () => {
      render(
        <SectionHeading
          eyebrow="Services"
          title="What I do"
          copy="Additional copy"
          light
        />,
      );

      expect(screen.getByText("Additional copy")).toBeInTheDocument();
      expect(screen.getByText("Services").parentElement).toHaveClass(
        "section-heading-light",
      );
    });
  });
});
