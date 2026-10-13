import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { About } from "./About";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Work } from "./Work";

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{location.pathname}</output>;
}

describe("Page sections", () => {
  // Hero suite: verifies the primary introduction and conversion links.
  describe("Hero", () => {
    it("renders the introduction, image, and project CTA", () => {
      render(<Hero />);

      expect(screen.getByRole("heading", { name: /Engineering secure digital solutions/ })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: "Secure digital workspace" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "View my projects" })).toHaveAttribute(
        "href",
        "/#work",
      );
    });
  });

  // Services suite: verifies all advertised expertise cards are present.
  describe("Services", () => {
    it("renders the three service offerings", () => {
      render(<Services />);

      expect(screen.getByRole("heading", { name: "Technology with purpose." })).toBeInTheDocument();
      expect(screen.getByText("Full stack development")).toBeInTheDocument();
      expect(screen.getByText("Automation & delivery")).toBeInTheDocument();
      expect(screen.getByText("Infrastructure & security")).toBeInTheDocument();
      expect(screen.getAllByRole("article")).toHaveLength(3);
    });
  });

  // About suite: verifies biography content and contact CTA.
  describe("About", () => {
    it("renders the profile image, copy, and contact action", () => {
      render(<About />);

      expect(screen.getByRole("heading", { name: /Building for today/ })).toBeInTheDocument();
      expect(screen.getByRole("img", { name: "Suhail's engineering toolkit" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Start a conversation" })).toHaveAttribute(
        "href",
        "mailto:suhail14217@gmail.com",
      );
    });
  });

  // Work suite: verifies project cards and navigation to a project detail route.
  describe("Work", () => {
    it("renders every project and navigates when a project is selected", async () => {
      const user = userEvent.setup();

      render(
        <MemoryRouter initialEntries={["/"]}>
          <Work />
          <LocationProbe />
        </MemoryRouter>,
      );

      expect(screen.getAllByRole("button")).toHaveLength(6);
      await user.click(screen.getByRole("button", { name: /Quizzical/ }));
      expect(screen.getByTestId("location")).toHaveTextContent("/projects/oldagram");
    });
  });
});
