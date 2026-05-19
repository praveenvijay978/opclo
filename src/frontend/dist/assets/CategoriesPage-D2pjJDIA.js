import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, S as Search, L as Link, a as cn } from "./index-DrGu1WxZ.js";
import { u as useAllShops, a as useActor, m as motion, c as createActor } from "./proxy-D0zob5_p.js";
import { M as MapPin } from "./map-pin-Bpw5jdUr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const CATEGORIES = [
  {
    id: "StreetFood",
    label: "Street Food",
    emoji: "🍜",
    gradient: "from-orange-500 via-orange-400 to-red-400",
    glowColor: "shadow-orange-200"
  },
  {
    id: "JuiceShop",
    label: "Juice Shop",
    emoji: "🧃",
    gradient: "from-green-500 via-emerald-400 to-teal-400",
    glowColor: "shadow-green-200"
  },
  {
    id: "Bakery",
    label: "Bakery",
    emoji: "🥐",
    gradient: "from-amber-500 via-yellow-400 to-amber-300",
    glowColor: "shadow-amber-200"
  },
  {
    id: "Restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    gradient: "from-red-500 via-rose-400 to-pink-400",
    glowColor: "shadow-red-200"
  },
  {
    id: "Cafe",
    label: "Café",
    emoji: "☕",
    gradient: "from-yellow-700 via-amber-600 to-yellow-500",
    glowColor: "shadow-amber-300"
  },
  {
    id: "SnackShop",
    label: "Snack Shop",
    emoji: "🍿",
    gradient: "from-purple-500 via-violet-400 to-purple-300",
    glowColor: "shadow-purple-200"
  }
];
function CategoriesPage() {
  const { data: shops = [], isLoading } = useAllShops();
  const { actor } = useActor(createActor);
  const navigate = useNavigate();
  const [search, setSearch] = reactExports.useState("");
  const seedCalled = reactExports.useRef(false);
  reactExports.useEffect(() => {
    var _a;
    if (!actor || seedCalled.current || isLoading) return;
    if (shops.length === 0) {
      seedCalled.current = true;
      (_a = actor.initSeed) == null ? void 0 : _a.call(actor).catch(() => {
      });
    }
  }, [actor, shops.length, isLoading]);
  const openCount = shops.filter((s) => s.isOpen).length;
  const categoriesWithCounts = CATEGORIES.map((cat) => ({
    ...cat,
    count: shops.filter((s) => s.category === cat.id).length,
    openCount: shops.filter((s) => s.category === cat.id && s.isOpen).length
  }));
  function handleSearchSubmit(e) {
    e.preventDefault();
    if (search.trim()) {
      navigate({ to: "/search", search: { q: search.trim() } });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "sticky top-14 z-30 bg-gradient-to-br from-orange-500 to-red-500 px-4 pt-4 pb-5 shadow-lg",
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-black text-white tracking-tight leading-none", children: "Opclo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-100 text-xs font-medium mt-0.5", children: "Find local shops, open right now" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-white/20 border border-white/30 rounded-full px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-xs font-bold", children: [
                openCount,
                " Open"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSearchSubmit, className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                size: 16,
                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                placeholder: "Search shops, streets, food…",
                className: "w-full bg-white rounded-xl pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-orange-300 transition-all",
                "data-ocid": "home.search_input"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-4 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35 },
          className: "flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2 flex-1 min-w-0",
          "data-ocid": "home.open_count_badge",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-green-800 text-sm font-bold", children: [
              openCount,
              " shops open right now"
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 10 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.35, delay: 0.05 },
          className: "flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, className: "text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-orange-800 text-xs font-semibold", children: [
              shops.length,
              " total"
            ] })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground", children: "Browse by Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground bg-muted rounded-full px-2 py-0.5", children: [
          CATEGORIES.length,
          " types"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: categoriesWithCounts.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, y: 12 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { delay: i * 0.06, duration: 0.3, ease: "easeOut" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/category/$categoryId",
              params: { categoryId: String(cat.id) },
              "data-ocid": `category.item.${i + 1}`,
              className: "block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "relative rounded-2xl overflow-hidden",
                    "hover:scale-[1.03] active:scale-[0.97] transition-transform duration-200",
                    `shadow-lg ${cat.glowColor}`
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: cn(
                        "h-36 flex flex-col items-center justify-center bg-gradient-to-br p-3 gap-1",
                        cat.gradient
                      ),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl drop-shadow-lg filter", children: cat.emoji }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-black text-sm text-center leading-tight drop-shadow", children: cat.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-white/25 text-white text-[10px] font-bold px-2 py-0.5 rounded-full", children: [
                            cat.count,
                            " shops"
                          ] }),
                          cat.openCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-0.5 bg-green-500/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-white rounded-full" }),
                            cat.openCount,
                            " open"
                          ] })
                        ] })
                      ]
                    }
                  )
                }
              )
            }
          )
        },
        String(cat.id)
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-2 pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/map",
        className: "flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl px-4 py-4 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-200",
        "data-ocid": "home.map_link",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white/25 rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 22, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-white", children: "Explore Map" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-orange-100", children: "See all open shops near you" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "text-white/80",
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              role: "img",
              "aria-label": "Go to map",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Go to map" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  CategoriesPage as default
};
