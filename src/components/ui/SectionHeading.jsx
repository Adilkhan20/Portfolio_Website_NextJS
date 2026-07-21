export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={`mb-10 max-w-3xl sm:mb-14 ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold tracking-[0.18em] text-teal-300 uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl leading-tight font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
