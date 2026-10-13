import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FloatingBubble } from "./FloatingBubble";

describe("FloatingBubble", () => {
  it("appears after scrolling and invokes its action", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
    render(<FloatingBubble onClick={onClick} />);

    expect(screen.queryByRole("button", { name: "Back to home" })).not.toBeInTheDocument();

    Object.defineProperty(window, "scrollY", { configurable: true, value: 300 });
    window.dispatchEvent(new Event("scroll"));

    const button = await screen.findByRole("button", { name: "Back to home" });
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();

    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
    window.dispatchEvent(new Event("scroll"));
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "Back to home" })).not.toBeInTheDocument();
    });
  });

  it("removes its scroll listener when unmounted", () => {
    const removeEventListener = vi.spyOn(window, "removeEventListener");
    const { unmount } = render(<FloatingBubble onClick={vi.fn()} />);

    unmount();

    expect(removeEventListener).toHaveBeenCalledWith("scroll", expect.any(Function));
  });
});
