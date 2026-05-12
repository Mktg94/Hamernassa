import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "info" | "new" | "featured";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-slate-100 text-slate-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  info: "bg-brand-100 text-brand-700",
  new: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white",
  featured: "bg-gradient-to-r from-brand-600 to-brand-700 text-white",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}