import { ArrowUpRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}) => {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-black hover:bg-white",
    secondary:
      "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black",
    outline:
      "border border-white/30 text-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        px-6
        py-3
        text-sm
        font-semibold
        tracking-wide
        transition-all
        duration-300
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default Button;