import { c as createLucideIcon, j as jsxRuntimeExports, H as Heart, d as Skeleton, L as Link } from "./index-DrGu1WxZ.js";
import { S as ShopCard } from "./ShopCard-BlwHUsIf.js";
import { B as Badge } from "./badge-BTE8FiTs.js";
import { B as Button } from "./button-JA2JlVVQ.js";
import { j as useFavorites, l as useToggleFavorite, m as motion } from "./proxy-D0zob5_p.js";
import "./StarRating-CTErpOv_.js";
import "./types-BtjumCZv.js";
import "./OpenClosedBadge-BEB76fvk.js";
import "./clock-YYPMyRVs.js";
import "./map-pin-Bpw5jdUr.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
function FavoritesSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "bg-card rounded-2xl border border-border p-4 space-y-3",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-3/4 rounded-lg" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-20 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-16 rounded-full" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded-full" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-28 rounded" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4 rounded" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-2/3 rounded" })
      ]
    },
    i
  )) });
}
function EmptyFavorites() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 },
      className: "flex flex-col items-center justify-center px-8 py-20 text-center",
      "data-ocid": "favorites.empty_state",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full bg-red-50 border-2 border-red-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 44, className: "text-red-300", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              animate: { scale: [1, 1.2, 1] },
              transition: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2.4,
                ease: "easeInOut"
              },
              className: "absolute -top-1 -right-1 w-8 h-8 rounded-full bg-orange-100 border-2 border-orange-200 flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "💛" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-2", children: "No favorites yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-8 leading-relaxed max-w-[240px]", children: [
          "Tap the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 13, className: "inline fill-red-400 text-red-400" }),
          " ",
          "heart on any shop to save it here for quick access."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "favorites.browse_button",
            className: "gap-2 rounded-2xl px-6 py-5 text-sm font-semibold shadow-md",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { size: 16 }),
              "Browse Shops"
            ]
          }
        ) })
      ]
    }
  );
}
function FavoritesPage() {
  const { data: favorites = [], isLoading } = useFavorites();
  const toggleFavorite = useToggleFavorite();
  const favoritedIds = new Set(favorites.map((s) => s.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-6", "data-ocid": "favorites.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-5 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: "fill-red-500 text-red-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl text-foreground leading-tight", children: "My Favorites" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Your saved shops" })
        ] })
      ] }),
      !isLoading && favorites.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "rounded-full px-3 py-1 text-xs font-semibold bg-red-50 text-red-600 border border-red-100",
          "data-ocid": "favorites.count_badge",
          children: [
            favorites.length,
            " saved"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border mx-4 mb-4" }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(FavoritesSkeleton, {}) : favorites.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyFavorites, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "px-4 space-y-3",
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.07 } }
        },
        children: favorites.map((shop, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ShopCard,
          {
            shop,
            index,
            isFavorited: favoritedIds.has(shop.id),
            onToggleFavorite: (id) => toggleFavorite.mutate(id)
          },
          shop.id.toString()
        ))
      }
    )
  ] });
}
export {
  FavoritesPage as default
};
