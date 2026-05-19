import { ShopCard } from "@/components/ShopCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useShopsByCategory } from "@/hooks/useShops";
import {
  CATEGORY_EMOJIS,
  CATEGORY_LABELS,
  type Shop,
  type ShopCategory,
} from "@/types";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Map as MapIcon,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

type FilterTab = "all" | "open" | "closed";

const FILTER_TABS: {
  id: FilterTab;
  label: string;
  color: string;
  activeClass: string;
}[] = [
  {
    id: "all",
    label: "All",
    color: "",
    activeClass: "bg-primary text-primary-foreground border-primary",
  },
  {
    id: "open",
    label: "🟢 Open Now",
    color: "green",
    activeClass: "bg-green-500 text-white border-green-500",
  },
  {
    id: "closed",
    label: "🔴 Closed",
    color: "red",
    activeClass: "bg-red-500 text-white border-red-500",
  },
];

function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      <Skeleton className="h-1.5 w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-2/3 rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-1/2 rounded-lg" />
      </div>
    </div>
  );
}

export default function ShopListPage() {
  const { categoryId } = useParams({ from: "/category/$categoryId" });
  const navigate = useNavigate();
  const category = categoryId as ShopCategory;
  const { data: shops = [], isLoading } = useShopsByCategory(category);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterTab>("all");

  const label = CATEGORY_LABELS[categoryId] ?? categoryId;
  const emoji = CATEGORY_EMOJIS[categoryId] ?? "🏪";

  const filtered = useMemo(() => {
    let result: Shop[] = [...shops];

    // Filter by open/closed
    if (filter === "open") result = result.filter((s) => s.isOpen);
    else if (filter === "closed") result = result.filter((s) => !s.isOpen);

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q),
      );
    }

    // Sort: open first
    result.sort((a, b) => {
      if (a.isOpen === b.isOpen) return 0;
      return a.isOpen ? -1 : 1;
    });

    return result;
  }, [shops, search, filter]);

  const openCount = shops.filter((s) => s.isOpen).length;
  const closedCount = shops.length - openCount;

  return (
    <div className="relative min-h-[80vh] pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border">
        {/* Top bar */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              aria-label="Back to categories"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-muted hover:bg-accent transition-colors flex-shrink-0"
              data-ocid="shoplist.back_button"
            >
              <ArrowLeft size={18} className="text-foreground" />
            </button>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-2xl leading-none">{emoji}</span>
                <div className="min-w-0">
                  <h1 className="font-display font-black text-lg text-foreground leading-tight truncate">
                    {label}
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    {isLoading ? (
                      "Loading shops…"
                    ) : (
                      <>
                        <span className="text-green-600 font-semibold">
                          {openCount} open
                        </span>
                        {" · "}
                        <span className="text-red-500 font-semibold">
                          {closedCount} closed
                        </span>
                        {" · "}
                        {shops.length} total
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="flex-shrink-0 font-mono text-xs"
            >
              {shops.length} shops
            </Badge>
          </div>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-3" data-ocid="shoplist.search_input">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <Input
              placeholder={`Search ${label} shops…`}
              className="pl-9 h-10 rounded-xl bg-muted border-0 focus-visible:ring-primary text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className="px-4 pb-3 flex items-center gap-2 overflow-x-auto scrollbar-none"
          data-ocid="shoplist.filter_tabs"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                filter === tab.id
                  ? tab.activeClass
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
              data-ocid={`shoplist.filter.${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
          <div className="ml-auto flex-shrink-0">
            <SlidersHorizontal size={15} className="text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Main list content */}
      <div className="px-4 pt-4">
        {isLoading ? (
          <div className="space-y-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : filtered.length === 0 ? (
          <AnimatePresence>
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
              data-ocid="shoplist.empty_state"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-4xl">
                  {filter === "open" ? "😴" : filter === "closed" ? "🔒" : "🔍"}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-foreground mb-1">
                {filter === "open"
                  ? "No open shops right now"
                  : filter === "closed"
                    ? "No closed shops"
                    : search
                      ? `No results for "${search}"`
                      : "No shops in this category"}
              </h3>
              <p className="text-sm text-muted-foreground max-w-[220px]">
                {filter !== "all"
                  ? "Try switching to 'All' to see every shop"
                  : "Check back later or explore other categories"}
              </p>
              {filter !== "all" && (
                <button
                  type="button"
                  onClick={() => setFilter("all")}
                  className="mt-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
                  data-ocid="shoplist.clear_filter_button"
                >
                  Show all shops
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            className="space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {},
            }}
            data-ocid="shoplist.list"
          >
            {filtered.map((shop, i) => (
              <motion.div
                key={shop.id.toString()}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                }}
                data-ocid={`shoplist.item.${i + 1}`}
              >
                <ShopCard shop={shop} index={i} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Floating Map Button */}
      <Link
        to="/map"
        className="fixed bottom-24 right-4 z-30"
        data-ocid="shoplist.map_button"
      >
        <Button
          type="button"
          size="lg"
          className="rounded-full shadow-lg gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-5 font-semibold"
        >
          <MapIcon size={18} />
          Map view
        </Button>
      </Link>
    </div>
  );
}
