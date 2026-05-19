import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, LayoutGrid, Map as MapIcon, Search, Store } from "lucide-react";

const tabs = [
  { to: "/", label: "Browse", icon: LayoutGrid, ocid: "nav.browse_tab" },
  { to: "/search", label: "Search", icon: Search, ocid: "nav.search_tab" },
  {
    to: "/favorites",
    label: "Favorites",
    icon: Heart,
    ocid: "nav.favorites_tab",
  },
  { to: "/map", label: "Map", icon: MapIcon, ocid: "nav.map_tab" },
  { to: "/owner", label: "Owner", icon: Store, ocid: "nav.owner_tab" },
] as const;

export function BottomNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-card border-t border-border z-50 safe-bottom"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map(({ to, label, icon: Icon, ocid }) => {
          const isActive =
            to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              data-ocid={ocid}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={cn(
                  "p-1.5 rounded-xl transition-all duration-200",
                  isActive && "bg-primary/10",
                )}
              >
                <Icon
                  size={22}
                  className={cn(isActive && "fill-primary/20")}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-semibold leading-none transition-all",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
