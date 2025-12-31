import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  href = "/contact",
  children,
  variant = "primary",
  className = "",
  size = "md",
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 shadow-sm hover:shadow-md";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-dark border-2 border-primary hover:border-primary-dark",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-gray-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
