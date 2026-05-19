import { cn } from "@/lib/utils";
import { CATEGORY_EMOJIS, getCategoryKey, getCategoryLabel } from "@/types";
import type { ShopCategory } from "@/types";

interface CategoryBadgeProps {
  category: ShopCategory;
  size?: "sm" | "md";
  className?: string;
}

const categoryBg: Record<string, string> = {
  StreetFood: "bg-orange-100 text-orange-700 border-orange-200",
  JuiceShop: "bg-green-100 text-green-700 border-green-200",
  Bakery: "bg-amber-100 text-amber-700 border-amber-200",
  Restaurant: "bg-red-100 text-red-700 border-red-200",
  Cafe: "bg-yellow-100 text-yellow-700 border-yellow-200",
  SnackShop: "bg-purple-100 text-purple-700 border-purple-200",
  Other: "bg-muted text-muted-foreground border-border",
};

export function CategoryBadge({
  category,
  size = "sm",
  className,
}: CategoryBadgeProps) {
  const key = getCategoryKey(category);
  const label = getCategoryLabel(category);
  const emoji = CATEGORY_EMOJIS[key] ?? "🏪";
  const colors = categoryBg[key] ?? categoryBg.Other;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1",
        colors,
        className,
      )}
    >
      <span>{emoji}</span>
      {label}
    </span>
  );
}
