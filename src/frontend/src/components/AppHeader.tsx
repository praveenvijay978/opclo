import { cn } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, Search } from "lucide-react";

const routeTitles: Record<string, string> = {
  "/": "",
  "/favorites": "Favorites",
  "/map": "Nearby Map",
  "/search": "Search",
  "/owner": "Owner Dashboard",
  "/owner/register": "Register Shop",
};

export function AppHeader() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  const title = Object.entries(routeTitles).find(
    ([key]) => key !== "/" && pathname.startsWith(key),
  )?.[1];

  return (
    <header
      className="sticky top-0 z-40 bg-card border-b border-border shadow-sm"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center justify-between px-4 h-14 max-w-[480px] mx-auto">
        {isHome || !title ? (
          <Link
            to="/"
            className="flex items-center gap-1.5"
            data-ocid="header.logo_link"
          >
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-lg font-black leading-none">
                🛝️
              </span>
            </div>
            <span className="text-xl font-black tracking-tight text-primary">
              opclo
            </span>
          </Link>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              aria-label="Go back"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                role="img"
                aria-label="Go back"
              >
                <title>Go back</title>
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <h1
              className={cn("font-display font-bold text-lg text-foreground")}
            >
              {title}
            </h1>
          </div>
        )}

        <div className="flex items-center gap-1">
          <Link
            to="/search"
            className="p-2 rounded-xl hover:bg-muted transition-colors"
            aria-label="Search shops"
            data-ocid="header.search_button"
          >
            <Search size={20} className="text-foreground" />
          </Link>
          <button
            type="button"
            className="p-2 rounded-xl hover:bg-muted transition-colors relative"
            aria-label="Notifications"
            data-ocid="header.notifications_button"
          >
            <Bell size={20} className="text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
