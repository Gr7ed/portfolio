import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <button
      className={`group w-full overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] text-start shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl hover:shadow-[var(--accent)]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
