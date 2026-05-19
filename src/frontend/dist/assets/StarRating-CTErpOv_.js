import { c as createLucideIcon, j as jsxRuntimeExports, a as cn } from "./index-DrGu1WxZ.js";
import { g as getCategoryLabel, C as CATEGORY_EMOJIS, b as getCategoryKey, S as Star } from "./types-BtjumCZv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const categoryBg = {
  StreetFood: "bg-orange-100 text-orange-700 border-orange-200",
  JuiceShop: "bg-green-100 text-green-700 border-green-200",
  Bakery: "bg-amber-100 text-amber-700 border-amber-200",
  Restaurant: "bg-red-100 text-red-700 border-red-200",
  Cafe: "bg-yellow-100 text-yellow-700 border-yellow-200",
  SnackShop: "bg-purple-100 text-purple-700 border-purple-200",
  Other: "bg-muted text-muted-foreground border-border"
};
function CategoryBadge({
  category,
  size = "sm",
  className
}) {
  const key = getCategoryKey(category);
  const label = getCategoryLabel(category);
  const emoji = CATEGORY_EMOJIS[key] ?? "🏪";
  const colors = categoryBg[key] ?? categoryBg.Other;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        size === "sm" ? "text-xs px-2 py-0.5" : "text-sm px-3 py-1",
        colors,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: emoji }),
        label
      ]
    }
  );
}
function StarRating({
  rating,
  max = 5,
  size = "md",
  showValue = true,
  reviewCount,
  className,
  interactive = false,
  onChange
}) {
  const starSize = { sm: 12, md: 15, lg: 20 }[size];
  const textSize = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("inline-flex items-center gap-1", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: Array.from({ length: max }).map((_, i) => {
      const starValue = i + 1;
      const filled = i < Math.floor(rating);
      const partial = !filled && i < rating;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => interactive && (onChange == null ? void 0 : onChange(i + 1)),
          className: cn(
            "focus:outline-none",
            interactive && "cursor-pointer hover:scale-110 transition-transform",
            !interactive && "cursor-default"
          ),
          "aria-label": interactive ? `Rate ${i + 1} stars` : void 0,
          tabIndex: interactive ? 0 : -1,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              size: starSize,
              className: cn(
                "transition-colors",
                filled || partial ? "text-amber-400 fill-amber-400" : "text-muted-foreground fill-none"
              ),
              style: partial ? { clipPath: `inset(0 ${(1 - rating % 1) * 100}% 0 0)` } : void 0
            }
          )
        },
        `star-${starValue}`
      );
    }) }),
    showValue && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-semibold text-foreground", textSize), children: rating.toFixed(1) }),
    reviewCount !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("text-muted-foreground", textSize), children: [
      "(",
      Number(reviewCount),
      ")"
    ] })
  ] });
}
export {
  ChevronRight as C,
  StarRating as S,
  CategoryBadge as a
};
