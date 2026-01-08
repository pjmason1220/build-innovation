interface ServiceCardProps {
  title: string;
  price?: string;
  duration?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function ServiceCard({
  title,
  price,
  duration,
  description,
  features,
  highlighted = false,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-lg p-8 ${
        highlighted
          ? "bg-primary text-white shadow-xl ring-2 ring-primary scale-105"
          : "bg-white shadow-md hover:shadow-lg transition-shadow"
      }`}
    >
      {highlighted && (
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-sm font-semibold text-white">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      {price && (
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {duration && (
            <span className={`ml-2 ${highlighted ? "text-gray-200" : "text-gray-500"}`}>
              {duration}
            </span>
          )}
        </div>
      )}

      <p className={`mb-6 ${highlighted ? "text-gray-100" : "text-gray-600"}`}>
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`h-6 w-6 mr-2 flex-shrink-0 ${
                highlighted ? "text-gold" : "text-secondary"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className={highlighted ? "text-gray-100" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
