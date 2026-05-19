import { cn } from "@/lib/utils";
import type { Shop } from "@/types";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { CategoryBadge } from "./CategoryBadge";
import { OpenClosedBadge } from "./OpenClosedBadge";
import { StarRating } from "./StarRating";

interface ShopCardProps {
  shop: Shop;
  index?: number;
  isFavorited?: boolean;
  onToggleFavorite?: (id: bigint) => void;
  className?: string;
}

function isClosingSoon(closingTime: string): boolean {
  const now = new Date();
  const [h, m] = closingTime.split(":").map(Number);
  const closing = new Date();
  closing.setHours(h, m, 0, 0);
  const diffMs = closing.getTime() - now.getTime();
  return diffMs > 0 && diffMs < 30 * 60 * 1000;
}

export function ShopCard({
  shop,
  index = 0,
  isFavorited = false,
  onToggleFavorite,
  className,
}: ShopCardProps) {
  const closingSoon = shop.isOpen && isClosingSoon(shop.closingTime);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className={cn("group", className)}
    >
      <Link to="/shop/$shopId" params={{ shopId: shop.id.toString() }}>
        <div className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
          {/* Color accent strip */}
          <div
            className={cn(
              "h-1.5 w-full",
              shop.isOpen ? "bg-green-500" : "bg-red-400",
            )}
          />

          <div className="p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-base text-foreground truncate leading-tight">
                  {shop.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  <CategoryBadge category={shop.category} />
                  <OpenClosedBadge
                    isOpen={shop.isOpen}
                    closingSoon={closingSoon}
                    size="sm"
                  />
                </div>
              </div>
              {onToggleFavorite && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    onToggleFavorite(shop.id);
                  }}
                  aria-label={
                    isFavorited ? "Remove from favorites" : "Add to favorites"
                  }
                  className="p-1.5 rounded-full hover:bg-muted transition-colors flex-shrink-0"
                  data-ocid="shop.favorite_toggle"
                >
                  <Heart
                    size={18}
                    className={cn(
                      "transition-colors",
                      isFavorited
                        ? "fill-red-500 text-red-500"
                        : "text-muted-foreground",
                    )}
                  />
                </button>
              )}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <StarRating
                rating={shop.rating}
                reviewCount={Number(shop.reviewCount)}
                size="sm"
              />
              <ChevronRight
                size={16}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </div>

            <div className="mt-2 flex items-start gap-1.5">
              <MapPin size={13} className="text-primary mt-0.5 flex-shrink-0" />
              <p className="text-xs text-muted-foreground truncate">
                {shop.address}
              </p>
            </div>

            {shop.offers.length > 0 && (
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-xs">🎉</span>
                <p className="text-xs text-green-700 font-medium truncate">
                  {shop.offers[0]}
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
