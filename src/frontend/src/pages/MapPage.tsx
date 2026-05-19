import { OpenClosedBadge } from "@/components/OpenClosedBadge";
import { useAllShops } from "@/hooks/useShops";
import { Link } from "@tanstack/react-router";
import { Filter, MapPin, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function MapPage() {
  const { data: shops = [] } = useAllShops();
  const [filter, setFilter] = useState<"all" | "open">("all");
  const filtered = filter === "open" ? shops.filter((s) => s.isOpen) : shops;

  return (
    <div className="px-4 pt-4 pb-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Navigation size={22} className="text-primary" />
          <h1 className="font-display font-black text-xl text-foreground">
            Nearby Shops
          </h1>
        </div>
        <div className="flex gap-2">
          {(["all", "open"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border"
              }`}
              data-ocid={`map.filter.${f}`}
            >
              {f === "all" ? "All" : "✅ Open"}
            </button>
          ))}
        </div>
      </div>

      {/* Map canvas */}
      <div
        className="relative rounded-3xl overflow-hidden border border-border mb-4 h-64 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50"
        data-ocid="map.canvas_target"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 48px)",
          }}
        />
        {/* Simulated shop pins */}
        {filtered.map((shop, i) => {
          const x = 10 + ((i * 37 + 13) % 80);
          const y = 10 + ((i * 53 + 7) % 75);
          return (
            <Link
              key={shop.id.toString()}
              to="/shop/$shopId"
              params={{ shopId: shop.id.toString() }}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%` }}
              data-ocid={`map.marker.${i + 1}`}
            >
              <div className="relative group cursor-pointer">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform group-hover:scale-110 ${
                    shop.isOpen ? "bg-green-500" : "bg-red-400"
                  }`}
                >
                  <MapPin size={14} className="text-white" />
                </div>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-card border border-border rounded-lg px-2 py-1 text-[10px] font-bold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {shop.name}
                </div>
              </div>
            </Link>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-3 left-3 bg-card/90 backdrop-blur rounded-xl px-2.5 py-1.5 flex items-center gap-3 text-xs font-semibold border border-border">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full" /> Open
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 bg-red-400 rounded-full" /> Closed
          </span>
        </div>

        <button
          type="button"
          className="absolute top-3 right-3 bg-card/90 backdrop-blur rounded-xl p-2 border border-border"
          aria-label="My location"
          data-ocid="map.location_button"
          onClick={() =>
            navigator.geolocation?.getCurrentPosition(
              () => null,
              () => null,
            )
          }
        >
          <Navigation size={16} className="text-primary" />
        </button>
      </div>

      {/* Shop list below map */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-semibold text-foreground">
          {filtered.length} shops nearby
        </p>
        <Filter size={15} className="text-muted-foreground" />
      </div>
      <div className="space-y-2.5">
        {filtered.map((shop, i) => (
          <motion.div
            key={shop.id.toString()}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              to="/shop/$shopId"
              params={{ shopId: shop.id.toString() }}
              className="flex items-center gap-3 bg-card rounded-2xl border border-border p-3 hover:shadow-sm transition-all"
              data-ocid={`map.item.${i + 1}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  shop.isOpen ? "bg-green-100" : "bg-red-50"
                }`}
              >
                <MapPin
                  size={18}
                  className={shop.isOpen ? "text-green-600" : "text-red-400"}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground truncate">
                  {shop.name}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {shop.address}
                </p>
              </div>
              <OpenClosedBadge isOpen={shop.isOpen} size="sm" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
