import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Search, d as Skeleton } from "./index-DrGu1WxZ.js";
import { S as ShopCard } from "./ShopCard-BlwHUsIf.js";
import { I as Input } from "./input-BuRylhEE.js";
import { n as useSearchShops, m as motion } from "./proxy-D0zob5_p.js";
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
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const RECENT = ["Street food", "Juice bar", "Anna Nagar", "Mylapore"];
function SearchPage() {
  const [query, setQuery] = reactExports.useState("");
  const { data: results = [], isLoading } = useSearchShops(query);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-4", "data-ocid": "search.input", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Search,
        {
          size: 18,
          className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          autoFocus: true,
          placeholder: "Search shops, streets, food…",
          className: "pl-10 pr-10 rounded-2xl bg-muted border-0 text-base h-12",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      ),
      query && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setQuery(""),
          className: "absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-border",
          "aria-label": "Clear",
          "data-ocid": "search.clear_button",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15, className: "text-muted-foreground" })
        }
      )
    ] }),
    !query && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5", children: "Popular searches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: RECENT.map((term) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setQuery(term),
          className: "bg-muted text-foreground text-sm px-3 py-1.5 rounded-full border border-border hover:border-primary/40 transition-all",
          "data-ocid": "search.suggestion",
          children: term
        },
        term
      )) })
    ] }),
    query && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: isLoading ? "Searching…" : `${results.length} results for "${query}"` }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "search.loading_state", children: [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-36 w-full rounded-2xl" }, n)) }) : query && results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center py-16 text-center",
        "data-ocid": "search.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: "😕" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base", children: "No results found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Try a different keyword or browse categories" })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "search.results", children: results.map((shop, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShopCard, { shop, index: i })
      },
      shop.id.toString()
    )) })
  ] });
}
export {
  SearchPage as default
};
