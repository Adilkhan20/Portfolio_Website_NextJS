import Link from "next/link";

const variants = {
  primary:
    "bg-teal-300 text-slate-950 hover:bg-teal-200 focus-visible:ring-teal-300",

  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 focus-visible:ring-white",

  ghost:
    "border border-white/15 text-white hover:border-teal-300 hover:text-teal-300 focus-visible:ring-teal-300",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}) {
  const styles = `
    inline-flex min-h-12 items-center justify-center gap-2 rounded-full
    px-5 py-3 text-sm font-semibold transition duration-200
    hover:-translate-y-0.5 focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-offset-slate-950
    ${variants[variant]}
    ${className}
  `;

  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        className={styles}
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
