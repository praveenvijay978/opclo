import { ShopCard } from "@/components/ShopCard";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchShops } from "@/hooks/useShops";
import { Search, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const RECENT = ["Street food", "Juice bar", "Anna Nagar", "Mylapore"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const { data: results = [], isLoading } = useSearchShops(query);

  return (
    <div className="px-4 pt-4 pb-2">
      {/* Search bar */}
      <div className="relative mb-4" data-ocid="search.input">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          autoFocus
          placeholder="Search shops, streets, food…"
          className="pl-10 pr-10 rounded-2xl bg-muted border-0 text-base h-12"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-border"
            aria-label="Clear"
            data-ocid="search.clear_button"
          >
            <X size={15} className="text-muted-foreground" />
          </button>
        )}
      </div>

      {!query && (
        <div className="mb-5">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
            Popular searches
          </p>
          <div className="flex flex-wrap gap-2">
            {RECENT.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="bg-muted text-foreground text-sm px-3 py-1.5 rounded-full border border-border hover:border-primary/40 transition-all"
                data-ocid="search.suggestion"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {query && (
        <p className="text-xs text-muted-foreground mb-3">
          {isLoading
            ? "Searching…"
            : `${results.length} results for "${query}"`}
        </p>
      )}

      {isLoading ? (
        <div className="space-y-3" data-ocid="search.loading_state">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-36 w-full rounded-2xl" />
          ))}
        </div>
      ) : query && results.length === 0 ? (
        <div
          className="flex flex-col items-center py-16 text-center"
          data-ocid="search.empty_state"
        >
          <span className="text-5xl mb-3">😕</span>
          <h3 className="font-display font-bold text-base">No results found</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Try a different keyword or browse categories
          </p>
        </div>
      ) : (
        <div className="space-y-3" data-ocid="search.results">
          {results.map((shop, i) => (
            <motion.div
              key={shop.id.toString()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ShopCard shop={shop} index={i} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
