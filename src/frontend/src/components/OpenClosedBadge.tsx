import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

interface OpenClosedBadgeProps {
  isOpen: boolean;
  closingSoon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function OpenClosedBadge({
  isOpen,
  closingSoon = false,
  size = "md",
  className,
}: OpenClosedBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2",
  };

  const iconSize = { sm: 12, md: 14, lg: 16 }[size];

  if (closingSoon) {
    return (
      <span
        className={cn(
          "inline-flex items-center font-semibold rounded-full",
          "bg-amber-100 text-amber-700 border border-amber-300",
          sizeClasses[size],
          className,
        )}
      >
        <Clock size={iconSize} className="flex-shrink-0" />
        Closing Soon
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full",
        isOpen
          ? "bg-green-100 text-green-700 border border-green-300"
          : "bg-red-100 text-red-600 border border-red-200",
        sizeClasses[size],
        className,
      )}
    >
      {isOpen ? (
        <CheckCircle2 size={iconSize} className="flex-shrink-0" />
      ) : (
        <XCircle size={iconSize} className="flex-shrink-0" />
      )}
      {isOpen ? "Open" : "Closed"}
    </span>
  );
}
