import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  reviewCount?: number;
  className?: string;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

export function StarRating({
  rating,
  max = 5,
  size = "md",
  showValue = true,
  reviewCount,
  className,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const starSize = { sm: 12, md: 15, lg: 20 }[size];
  const textSize = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size];

  return (
    <div className={cn("inline-flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }).map((_, i) => {
          const starValue = i + 1;
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <button
              key={`star-${starValue}`}
              type="button"
              onClick={() => interactive && onChange?.(i + 1)}
              className={cn(
                "focus:outline-none",
                interactive &&
                  "cursor-pointer hover:scale-110 transition-transform",
                !interactive && "cursor-default",
              )}
              aria-label={interactive ? `Rate ${i + 1} stars` : undefined}
              tabIndex={interactive ? 0 : -1}
            >
              <Star
                size={starSize}
                className={cn(
                  "transition-colors",
                  filled || partial
                    ? "text-amber-400 fill-amber-400"
                    : "text-muted-foreground fill-none",
                )}
                style={
                  partial
                    ? { clipPath: `inset(0 ${(1 - (rating % 1)) * 100}% 0 0)` }
                    : undefined
                }
              />
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className={cn("font-semibold text-foreground", textSize)}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className={cn("text-muted-foreground", textSize)}>
          ({Number(reviewCount)})
        </span>
      )}
    </div>
  );
}
