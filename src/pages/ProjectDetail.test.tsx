import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ProjectDetail } from "./ProjectDetail";
import { projects } from "../data/projects";

function LocationProbe() {
  const location = useLocation();
  return <output data-testid="location">{location.pathname}{location.hash}</output>;
}

describe("ProjectDetail page", () => {
  it("uses bundled asset URLs for every project image", () => {
    for (const project of projects) {
      expect(project.image).not.toContain("../src/");
      expect(project.hero ?? project.image).not.toContain("../src/");
    }
  });

  // Detail suite: verifies a known project renders its content and back link.
  describe("known project", () => {
    it("renders project metadata, tags, image, and work navigation", async () => {
      const user = userEvent.setup();

      render(
        <MemoryRouter initialEntries={["/projects/oldagram"]}>
          <Routes>
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
          <LocationProbe />
        </MemoryRouter>,
      );

      expect(screen.getByRole("heading", { name: "Quizzical" })).toBeInTheDocument();
      expect(screen.getByText("React quiz application")).toBeInTheDocument();
      expect(screen.getByText("Open Trivia DB")).toBeInTheDocument();
      expect(screen.getByAltText("Quizzical preview")).toBeInTheDocument();

      await user.click(screen.getByRole("button", { name: /Back to all work/ }));
      expect(screen.getByTestId("location")).toHaveTextContent("/#work");
    });
  });

  // Missing-project suite: verifies the explicit not-found state and recovery action.
  describe("unknown project", () => {
    it("renders a recovery action for an invalid project id", async () => {
      const user = userEvent.setup();

      render(
        <MemoryRouter initialEntries={["/projects/missing"]}>
          <Routes>
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
          <LocationProbe />
        </MemoryRouter>,
      );

      expect(screen.getByText("That project does not exist.")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: /Back home/ }));
      expect(screen.getByTestId("location")).toHaveTextContent("/");
    });
  });
});
