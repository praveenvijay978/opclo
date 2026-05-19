import { j as jsxRuntimeExports, L as Link, a as cn, H as Heart } from "./index-DrGu1WxZ.js";
import { a as CategoryBadge, S as StarRating, C as ChevronRight } from "./StarRating-CTErpOv_.js";
import { O as OpenClosedBadge } from "./OpenClosedBadge-BEB76fvk.js";
import { m as motion } from "./proxy-D0zob5_p.js";
import { M as MapPin } from "./map-pin-Bpw5jdUr.js";
function isClosingSoon(closingTime) {
  const now = /* @__PURE__ */ new Date();
  const [h, m] = closingTime.split(":").map(Number);
  const closing = /* @__PURE__ */ new Date();
  closing.setHours(h, m, 0, 0);
  const diffMs = closing.getTime() - now.getTime();
  return diffMs > 0 && diffMs < 30 * 60 * 1e3;
}
function ShopCard({
  shop,
  index = 0,
  isFavorited = false,
  onToggleFavorite,
  className
}) {
  const closingSoon = shop.isOpen && isClosingSoon(shop.closingTime);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.06, duration: 0.3 },
      className: cn("group", className),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop/$shopId", params: { shopId: shop.id.toString() }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "h-1.5 w-full",
              shop.isOpen ? "bg-green-500" : "bg-red-400"
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground truncate leading-tight", children: shop.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: shop.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  OpenClosedBadge,
                  {
                    isOpen: shop.isOpen,
                    closingSoon,
                    size: "sm"
                  }
                )
              ] })
            ] }),
            onToggleFavorite && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.preventDefault();
                  onToggleFavorite(shop.id);
                },
                "aria-label": isFavorited ? "Remove from favorites" : "Add to favorites",
                className: "p-1.5 rounded-full hover:bg-muted transition-colors flex-shrink-0",
                "data-ocid": "shop.favorite_toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Heart,
                  {
                    size: 18,
                    className: cn(
                      "transition-colors",
                      isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StarRating,
              {
                rating: shop.rating,
                reviewCount: Number(shop.reviewCount),
                size: "sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronRight,
              {
                size: 16,
                className: "text-muted-foreground group-hover:text-primary transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-start gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 13, className: "text-primary mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: shop.address })
          ] }),
          shop.offers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "🎉" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-700 font-medium truncate", children: shop.offers[0] })
          ] })
        ] })
      ] }) })
    }
  );
}
export {
  ShopCard as S
};
