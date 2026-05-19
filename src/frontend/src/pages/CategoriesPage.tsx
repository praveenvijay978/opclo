import { createActor } from "@/backend";
import { useAllShops } from "@/hooks/useShops";
import { cn } from "@/lib/utils";
import type { ShopCategory } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { Link, useNavigate } from "@tanstack/react-router";
import { MapPin, Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CategoryConfig {
  id: ShopCategory;
  label: string;
  emoji: string;
  gradient: string;
  glowColor: string;
}

const CATEGORIES: CategoryConfig[] = [
  {
    id: "StreetFood",
    label: "Street Food",
    emoji: "🍜",
    gradient: "from-orange-500 via-orange-400 to-red-400",
    glowColor: "shadow-orange-200",
  },
  {
    id: "JuiceShop",
    label: "Juice Shop",
    emoji: "🧃",
    gradient: "from-green-500 via-emerald-400 to-teal-400",
    glowColor: "shadow-green-200",
  },
  {
    id: "Bakery",
    label: "Bakery",
    emoji: "🥐",
    gradient: "from-amber-500 via-yellow-400 to-amber-300",
    glowColor: "shadow-amber-200",
  },
  {
    id: "Restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    gradient: "from-red-500 via-rose-400 to-pink-400",
    glowColor: "shadow-red-200",
  },
  {
    id: "Cafe",
    label: "Café",
    emoji: "☕",
    gradient: "from-yellow-700 via-amber-600 to-yellow-500",
    glowColor: "shadow-amber-300",
  },
  {
    id: "SnackShop",
    label: "Snack Shop",
    emoji: "🍿",
    gradient: "from-purple-500 via-violet-400 to-purple-300",
    glowColor: "shadow-purple-200",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActorType = Record<string, (...args: any[]) => Promise<unknown>>;

export default function CategoriesPage() {
  const { data: shops = [], isLoading } = useAllShops();
  const { actor } = useActor(createActor);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const seedCalled = useRef(false);

  // Seed sample data if shops list is empty
  useEffect(() => {
    if (!actor || seedCalled.current || isLoading) return;
    if (shops.length === 0) {
      seedCalled.current = true;
      (actor as unknown as ActorType).initSeed?.().catch(() => {});
    }
  }, [actor, shops.length, isLoading]);

  const openCount = shops.filter((s) => s.isOpen).length;

  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: shops.filter((s) => s.category === cat.id).length,
    openCount: shops.filter((s) => s.category === cat.id && s.isOpen).length,
  }));

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      navigate({ to: "/search", search: { q: search.trim() } });
    }
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Orange sticky hero header — Opclo branding + search */}
      <div
        className="sticky top-14 z-30 bg-gradient-to-br from-orange-500 to-red-500 px-4 pt-4 pb-5 shadow-lg"
        data-ocid="home.hero_section"
      >
        {/* Brand row */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight leading-none">
              Opclo
            </h1>
            <p className="text-orange-100 text-xs font-medium mt-0.5">
              Find local shops, open right now
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white text-xs font-bold">
              {openCount} Open
            </span>
          </div>
        </div>

        {/* Global search bar */}
        <form onSubmit={handleSearchSubmit} className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search shops, streets, food…"
            className="w-full bg-white rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-orange-300 transition-all"
            data-ocid="home.search_input"
          />
        </form>
      </div>

      {/* Stats row */}
      <div className="px-4 pt-4 pb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2 flex-1 min-w-0"
            data-ocid="home.open_count_badge"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-green-800 text-sm font-bold">
                {openCount} shops open right now
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2"
          >
            <Sparkles size={14} className="text-orange-500" />
            <span className="text-orange-800 text-xs font-semibold">
              {shops.length} total
            </span>
          </motion.div>
        </div>
      </div>

      {/* Categories grid */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-bold text-base text-foreground">
            Browse by Category
          </h2>
          <span className="text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5">
            {CATEGORIES.length} types
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {categoriesWithCounts.map((cat, i) => (
            <motion.div
              key={String(cat.id)}
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
            >
              <Link
                to="/category/$categoryId"
                params={{ categoryId: String(cat.id) }}
                data-ocid={`category.item.${i + 1}`}
                className="block"
              >
                <div
                  className={cn(
                    "relative rounded-2xl overflow-hidden",
                    "hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200",
                    `shadow-lg ${cat.glowColor}`,
                  )}
                >
                  {/* Full gradient card */}
                  <div
                    className={cn(
                      "h-36 flex flex-col items-center justify-center bg-gradient-to-br p-3 gap-1",
                      cat.gradient,
                    )}
                  >
                    <span className="text-5xl drop-shadow-lg filter">
                      {cat.emoji}
                    </span>
                    <span className="text-white font-black text-sm text-center leading-tight drop-shadow">
                      {cat.label}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-white/25 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {cat.count} shops
                      </span>
                      {cat.openCount > 0 && (
                        <span className="flex items-center gap-0.5 bg-green-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                          {cat.openCount} open
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Explore Map CTA */}
      <div className="px-4 pt-2 pb-6">
        <Link
          to="/map"
          className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-4 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
          data-ocid="home.map_link"
        >
          <div className="w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin size={22} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="font-display font-bold text-sm text-white">
              Explore Map
            </div>
            <div className="text-xs text-orange-100">
              See all open shops near you
            </div>
          </div>
          <svg
            className="text-white/80"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            role="img"
            aria-label="Go to map"
          >
            <title>Go to map</title>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
