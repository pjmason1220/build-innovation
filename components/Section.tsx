interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "primary" | "secondary";
}

export default function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgStyles[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
