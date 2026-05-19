import { ShopCard } from "@/components/ShopCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFavorites, useToggleFavorite } from "@/hooks/useShops";
import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

function FavoritesSkeleton() {
  return (
    <div className="px-4 space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-card rounded-2xl border border-border p-4 space-y-3"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-3/4 rounded-lg" />
              <div className="flex gap-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-28 rounded" />
            <Skeleton className="h-4 w-4 rounded" />
          </div>
          <Skeleton className="h-4 w-2/3 rounded" />
        </div>
      ))}
    </div>
  );
}

function EmptyFavorites() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center px-8 py-20 text-center"
      data-ocid="favorites.empty_state"
    >
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center">
          <Heart size={44} className="text-red-300" strokeWidth={1.5} />
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2.4,
            ease: "easeInOut",
          }}
          className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-200 flex items-center justify-center"
        >
          <span className="text-base">💛</span>
        </motion.div>
      </div>

      <h2 className="font-display font-bold text-xl text-foreground mb-2">
        No favorites yet
      </h2>
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-[240px]">
        Tap the <Heart size={13} className="inline fill-red-400 text-red-400" />{" "}
        heart on any shop to save it here for quick access.
      </p>

      <Link to="/">
        <Button
          data-ocid="favorites.browse_button"
          className="gap-2 rounded-2xl px-6 py-5 text-sm font-semibold shadow-md"
        >
          <ShoppingBag size={16} />
          Browse Shops
        </Button>
      </Link>
    </motion.div>
  );
}

export default function FavoritesPage() {
  const { data: favorites = [], isLoading } = useFavorites();
  const toggleFavorite = useToggleFavorite();

  const favoritedIds = new Set(favorites.map((s) => s.id));

  return (
    <div className="pb-6" data-ocid="favorites.page">
      {/* Page header */}
      <div className="px-4 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
              <Heart size={18} className="fill-red-500 text-red-500" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground leading-tight">
                My Favorites
              </h1>
              <p className="text-xs text-muted-foreground">Your saved shops</p>
            </div>
          </div>

          {!isLoading && favorites.length > 0 && (
            <Badge
              variant="secondary"
              className="rounded-full px-3 py-1 text-xs font-semibold bg-red-50 text-red-600 border border-red-100"
              data-ocid="favorites.count_badge"
            >
              {favorites.length} saved
            </Badge>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mx-4 mb-4" />

      {/* Content */}
      {isLoading ? (
        <FavoritesSkeleton />
      ) : favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <motion.div
          className="px-4 space-y-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {favorites.map((shop, index) => (
            <ShopCard
              key={shop.id.toString()}
              shop={shop}
              index={index}
              isFavorited={favoritedIds.has(shop.id)}
              onToggleFavorite={(id) => toggleFavorite.mutate(id)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
