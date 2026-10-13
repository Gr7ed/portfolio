import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App section navigation", () => {
  it("closes the mobile menu when Home is selected", () => {
    render(
      <MemoryRouter initialEntries={["/#home"]}>
        <App />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    expect(screen.getByRole("button", { name: "Toggle menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    fireEvent.click(screen.getByRole("button", { name: "Home" }));

    expect(screen.getByRole("button", { name: "Toggle menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("scrolls to the current section when its navigation item is clicked again", () => {
    const scrollIntoView = vi.spyOn(HTMLElement.prototype, "scrollIntoView");

    render(
      <MemoryRouter initialEntries={["/#home"]}>
        <App />
      </MemoryRouter>,
    );

    scrollIntoView.mockClear();
    fireEvent.click(screen.getByRole("button", { name: "Home" }));

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});
