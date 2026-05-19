import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DrGu1WxZ.js";
import { O as OpenClosedBadge } from "./OpenClosedBadge-BEB76fvk.js";
import { u as useAllShops, m as motion } from "./proxy-D0zob5_p.js";
import { M as MapPin } from "./map-pin-Bpw5jdUr.js";
import "./clock-YYPMyRVs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
];
const Navigation = createLucideIcon("navigation", __iconNode);
function MapPage() {
  const { data: shops = [] } = useAllShops();
  const [filter, setFilter] = reactExports.useState("all");
  const filtered = filter === "open" ? shops.filter((s) => s.isOpen) : shops;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 22, className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-xl text-foreground", children: "Nearby Shops" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "open"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFilter(f),
          className: `px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filter === f ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border"}`,
          "data-ocid": `map.filter.${f}`,
          children: f === "all" ? "All" : "✅ Open"
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative rounded-3xl overflow-hidden border border-border mb-4 h-64 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50",
        "data-ocid": "map.canvas_target",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-20",
              style: {
                backgroundImage: "repeating-linear-gradient(0deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 48px)"
              }
            }
          ),
          filtered.map((shop, i) => {
            const x = 10 + (i * 37 + 13) % 80;
            const y = 10 + (i * 53 + 7) % 75;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop/$shopId",
                params: { shopId: shop.id.toString() },
                className: "absolute",
                style: { left: `${x}%`, top: `${y}%` },
                "data-ocid": `map.marker.${i + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform group-hover:scale-110 ${shop.isOpen ? "bg-green-500" : "bg-red-400"}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 bg-card border border-border rounded-lg px-2 py-1 text-[10px] font-bold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", children: shop.name })
                ] })
              },
              shop.id.toString()
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 left-3 bg-card/90 backdrop-blur rounded-xl px-2.5 py-1.5 flex items-center gap-3 text-xs font-semibold border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 bg-green-500 rounded-full" }),
              " Open"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 bg-red-400 rounded-full" }),
              " Closed"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "absolute top-3 right-3 bg-card/90 backdrop-blur rounded-xl p-2 border border-border",
              "aria-label": "My location",
              "data-ocid": "map.location_button",
              onClick: () => {
                var _a;
                return (_a = navigator.geolocation) == null ? void 0 : _a.getCurrentPosition(
                  () => null,
                  () => null
                );
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 16, className: "text-primary" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
        filtered.length,
        " shops nearby"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { size: 15, className: "text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: filtered.map((shop, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: -8 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.04 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/shop/$shopId",
            params: { shopId: shop.id.toString() },
            className: "flex items-center gap-3 bg-card rounded-2xl border border-border p-3 hover:shadow-sm transition-all",
            "data-ocid": `map.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${shop.isOpen ? "bg-green-100" : "bg-red-50"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MapPin,
                    {
                      size: 18,
                      className: shop.isOpen ? "text-green-600" : "text-red-400"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground truncate", children: shop.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: shop.address })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(OpenClosedBadge, { isOpen: shop.isOpen, size: "sm" })
            ]
          }
        )
      },
      shop.id.toString()
    )) })
  ] });
}
export {
  MapPage as default
};
