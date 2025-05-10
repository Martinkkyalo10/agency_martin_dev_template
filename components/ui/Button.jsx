import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "rounded-pill transition-all duration-300 inline-flex items-center justify-center";
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-3 px-6 text-lg",
  };
  const variantClasses = {
    primary:
      "bg-primary border border-primary text-white hover:bg-primary-dark hover:border-primary-dark",
    secondary:
      "bg-secondary border border-secondary text-white hover:bg-secondary-dark hover:border-secondary-dark",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    light: "bg-white border border-gray-200 text-gray-800 hover:bg-gray-100",
    danger:
      "bg-red-500 border border-red-500 text-white hover:bg-red-600 hover:border-red-600",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${
    variantClasses[variant]
  } ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
