interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${
            light
              ? "bg-white/10 text-water-blue"
              : "bg-blue-50 text-blue-accent"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
