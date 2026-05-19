import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, f as Store, L as Link, B as Bell, H as Heart, e as ue } from "./index-DrGu1WxZ.js";
import { O as OpenClosedBadge } from "./OpenClosedBadge-BEB76fvk.js";
import { B as Button } from "./button-JA2JlVVQ.js";
import { o as useOwnerShop, p as useUpdateShopStatus, q as useExtendShopHours, r as useUpdateShopHours, m as motion } from "./proxy-D0zob5_p.js";
import { S as Star, g as getCategoryLabel } from "./types-BtjumCZv.js";
import { C as Clock } from "./clock-YYPMyRVs.js";
import { C as CircleCheckBig } from "./circle-check-big-Dpn8TYwC.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
const Timer = createLucideIcon("timer", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
function parseTimeToday(time) {
  const [h, m] = time.split(":").map(Number);
  const d = /* @__PURE__ */ new Date();
  d.setHours(h, m, 0, 0);
  return d;
}
function minutesUntil(target) {
  return (target.getTime() - Date.now()) / 6e4;
}
function OwnerDashboard() {
  const { data: shop, isLoading } = useOwnerShop();
  const updateStatus = useUpdateShopStatus();
  const extendHours = useExtendShopHours();
  const updateHours = useUpdateShopHours();
  const [extendTime, setExtendTime] = reactExports.useState("");
  const [extendSuccess, setExtendSuccess] = reactExports.useState(false);
  const [newOpenTime, setNewOpenTime] = reactExports.useState("");
  const [newCloseTime, setNewCloseTime] = reactExports.useState("");
  const [hoursSuccess, setHoursSuccess] = reactExports.useState(false);
  const [, setTick] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 3e4);
    return () => clearInterval(t);
  }, []);
  reactExports.useEffect(() => {
    if (shop) {
      setNewOpenTime(shop.openingTime);
      setNewCloseTime(shop.closingTime);
    }
  }, [shop]);
  const notification = (() => {
    if (!shop) return null;
    const openTime = parseTimeToday(shop.openingTime);
    const closeTime = parseTimeToday(shop.closingTime);
    const minsToOpen = minutesUntil(openTime);
    const minsToClose = minutesUntil(closeTime);
    if (minsToOpen >= 0 && minsToOpen <= 5)
      return { type: "opening", minsToOpen };
    if (minsToClose >= 0 && minsToClose <= 5)
      return { type: "closing", minsToClose };
    return null;
  })();
  const handleToggleStatus = async () => {
    if (!shop) return;
    try {
      await updateStatus.mutateAsync(!shop.isOpen);
      ue.success(
        shop.isOpen ? "Shop marked as Closed" : "Shop is now Open! 🎉"
      );
    } catch {
      ue.error("Failed to update status. Please log in.");
    }
  };
  const handleExtend = async () => {
    if (!extendTime) return;
    try {
      await extendHours.mutateAsync(extendTime);
      setExtendSuccess(true);
      ue.success(`Closing time extended to ${extendTime}! ⏰`);
      setTimeout(() => setExtendSuccess(false), 4e3);
    } catch {
      ue.error("Failed to extend hours.");
    }
  };
  const handleUpdateHours = async () => {
    if (!newOpenTime || !newCloseTime) return;
    try {
      await updateHours.mutateAsync({
        openingTime: newOpenTime,
        closingTime: newCloseTime
      });
      setHoursSuccess(true);
      ue.success("Hours updated successfully!");
      setTimeout(() => setHoursSuccess(false), 4e3);
    } catch {
      ue.error("Failed to update hours.");
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-4 flex flex-col items-center justify-center py-20",
        "data-ocid": "owner.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm", children: "Loading your shop..." })
        ]
      }
    );
  }
  if (!shop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", "data-ocid": "owner.empty_state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          className: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-8 text-center mt-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { size: 38, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-2xl text-foreground mb-2", children: "Register Your Shop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6 max-w-xs mx-auto", children: "Put your shop on Opclo and let thousands of customers know when you're open today." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/owner/register", "data-ocid": "owner.register_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "rounded-2xl px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base gap-2 shadow-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { size: 18 }),
              "Get Started Free"
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: [
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18, className: "text-orange-500" }),
          title: "5-min Pre-Close Alerts",
          desc: "Smart notifications before closing time"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, className: "text-yellow-500" }),
          title: "Ratings & Reviews",
          desc: "Build trust with customer reviews"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "text-green-500" }),
          title: "Peak Day Extensions",
          desc: "Extend hours on busy days in one tap"
        },
        {
          icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: "text-red-500" }),
          title: "Customer Favourites",
          desc: "See who's saved your shop"
        }
      ].map(({ icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 bg-card rounded-2xl border border-border p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0", children: icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: desc })
            ] })
          ]
        },
        title
      )) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-8 space-y-4", "data-ocid": "owner.dashboard", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-5 text-white shadow-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-orange-100 text-xs font-medium mb-1", children: "Your Shop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-xl truncate", children: shop.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mt-1.5 bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full", children: getCategoryLabel(shop.category) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(OpenClosedBadge, { isOpen: shop.isOpen, size: "lg" })
        ] })
      }
    ),
    notification && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96 },
        animate: { opacity: 1, scale: 1 },
        className: `rounded-2xl p-4 border-2 flex items-center gap-3 ${notification.type === "opening" ? "bg-green-50 border-green-400" : "bg-orange-50 border-orange-400"}`,
        "data-ocid": "owner.notification_banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Bell,
            {
              size: 22,
              className: notification.type === "opening" ? "text-green-600" : "text-orange-600"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `font-bold text-sm ${notification.type === "opening" ? "text-green-800" : "text-orange-800"}`,
                children: notification.type === "opening" ? "⏰ Almost time to open!" : "🔔 Closing soon!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: notification.type === "opening" ? "Ready to open your shop for customers?" : "Keep open or close now?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              className: `rounded-xl font-bold px-3 ${notification.type === "opening" ? "bg-green-500 hover:bg-green-600 text-white" : "bg-orange-500 hover:bg-orange-600 text-white"}`,
              onClick: handleToggleStatus,
              "data-ocid": notification.type === "opening" ? "owner.open_button" : "owner.close_button",
              children: notification.type === "opening" ? "Open Now" : "Close Now"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.1 },
        className: "bg-card border border-border rounded-3xl p-5",
        "data-ocid": "owner.status_card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3", children: "Shop Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-display font-black text-2xl ${shop.isOpen ? "text-green-600" : "text-red-500"}`,
                  children: shop.isOpen ? "Your shop is OPEN" : "Your shop is CLOSED"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: shop.isOpen ? "Customers can see you're open" : "Tap to open for customers" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleToggleStatus,
                disabled: updateStatus.isPending,
                className: `w-16 h-9 rounded-full transition-all duration-300 relative shadow-inner ${shop.isOpen ? "bg-green-500" : "bg-red-400"} ${updateStatus.isPending ? "opacity-60" : "cursor-pointer"}`,
                "aria-label": shop.isOpen ? "Close shop" : "Open shop",
                "data-ocid": "owner.status_toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `absolute top-1 w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${shop.isOpen ? "left-8" : "left-1"}`
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: handleToggleStatus,
              disabled: updateStatus.isPending,
              className: `w-full mt-4 py-5 rounded-2xl font-bold text-base gap-2 ${shop.isOpen ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"}`,
              "data-ocid": "owner.toggle_button",
              children: updateStatus.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" }) : shop.isOpen ? "Close My Shop" : "Open My Shop 🟢"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.15 },
        className: "bg-card border border-border rounded-3xl p-5",
        "data-ocid": "owner.hours_card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest", children: "Shop Hours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl text-foreground", children: [
            shop.openingTime,
            " — ",
            shop.closingTime
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Daily operating hours" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.2 },
        className: "grid grid-cols-3 gap-3",
        "data-ocid": "owner.stats_row",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 18, className: "text-amber-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-foreground", children: shop.rating.toFixed(1) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Rating" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 18, className: "text-blue-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-foreground", children: Number(shop.reviewCount) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Reviews" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-50 border border-red-200 rounded-2xl p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18, className: "text-red-500 mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg text-foreground", children: "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Favourites" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.25 },
        className: "bg-card border border-border rounded-3xl p-5",
        "data-ocid": "owner.extend_hours_card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { size: 16, className: "text-orange-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Extend Closing Time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Peak day? Stay open longer tonight." }),
          extendSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 bg-green-50 border border-green-300 rounded-xl p-3",
              "data-ocid": "owner.extend_success",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "text-green-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700", children: "Closing time extended! ⏰" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "owner-extend-time", className: "sr-only", children: "Extend closing time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "owner-extend-time",
                type: "time",
                value: extendTime,
                onChange: (e) => setExtendTime(e.target.value),
                className: "flex-1 h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                "data-ocid": "owner.extend_time_input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleExtend,
                disabled: extendHours.isPending || !extendTime,
                className: "rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 shrink-0",
                "data-ocid": "owner.extend_button",
                children: extendHours.isPending ? "..." : "Extend"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3 },
        className: "bg-card border border-border rounded-3xl p-5",
        "data-ocid": "owner.update_hours_card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-blue-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Update Daily Hours" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Change your regular opening and closing times." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "owner-open-time",
                  className: "text-xs font-medium text-muted-foreground mb-1 block",
                  children: "Opening Time"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "owner-open-time",
                  type: "time",
                  value: newOpenTime,
                  onChange: (e) => setNewOpenTime(e.target.value),
                  className: "w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                  "data-ocid": "owner.open_time_input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "owner-close-time",
                  className: "text-xs font-medium text-muted-foreground mb-1 block",
                  children: "Closing Time"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  id: "owner-close-time",
                  type: "time",
                  value: newCloseTime,
                  onChange: (e) => setNewCloseTime(e.target.value),
                  className: "w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                  "data-ocid": "owner.close_time_input"
                }
              )
            ] })
          ] }),
          hoursSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-2 bg-green-50 border border-green-300 rounded-xl p-3",
              "data-ocid": "owner.hours_success",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16, className: "text-green-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-green-700", children: "Hours updated successfully!" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: handleUpdateHours,
              disabled: updateHours.isPending || !newOpenTime || !newCloseTime,
              className: "w-full rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-4",
              "data-ocid": "owner.update_hours_button",
              children: updateHours.isPending ? "Saving..." : "Update Hours"
            }
          )
        ]
      }
    )
  ] });
}
export {
  OwnerDashboard as default
};
