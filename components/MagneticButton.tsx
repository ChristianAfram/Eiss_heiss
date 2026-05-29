"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  variant?: "ice" | "ghost" | "ink";
  size?: "md" | "lg";
  className?: string;
};
type LinkProps = BaseProps & { href: string; onClick?: never };
type ButtonProps = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};
type Props = LinkProps | ButtonProps;

export default function MagneticButton(props: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  }
  function handleLeave() {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }

  const variantClasses = {
    ice:
      "bg-ice text-ink border-ink hover:shadow-ice",
    ghost:
      "bg-transparent text-ink border-ink hover:bg-ink hover:text-bone",
    ink:
      "bg-ink text-bone border-ink hover:bg-ice hover:text-ink hover:border-ink",
  }[props.variant ?? "ice"];

  const sizeClasses = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }[props.size ?? "md"];

  const baseClasses = `inline-flex items-center justify-center gap-2 border-2 font-display tracking-[0.18em] uppercase transition-[box-shadow,background-color,color] duration-200 ${variantClasses} ${sizeClasses} ${props.className ?? ""}`;

  const inner = (
    <span
      ref={ref}
      className="transition-transform duration-200 ease-out will-change-transform"
    >
      {props.children}
    </span>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={baseClasses}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={(props as ButtonProps).type ?? "button"}
      onClick={(props as ButtonProps).onClick}
      className={baseClasses}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </button>
  );
}
