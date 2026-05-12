import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
}

const variants = {
  primary: "bg-gradient-to-r from-brand-800 to-brand-700 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
  secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900",
  outline: "border-2 border-brand-700 text-brand-700 hover:bg-brand-700 hover:text-white",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-brand-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled = false,
  icon
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {icon}
      {children}
    </button>
  );
}