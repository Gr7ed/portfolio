import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: "primary" | "outline";
  }
>;

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`button button-${variant} inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
        variant === "primary"
          ? "bg-[var(--accent)] text-[var(--accent-ink)] shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl"
          : "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10"
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
