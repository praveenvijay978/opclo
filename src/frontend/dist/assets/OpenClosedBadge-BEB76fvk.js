import { c as createLucideIcon, j as jsxRuntimeExports, a as cn } from "./index-DrGu1WxZ.js";
import { C as Clock } from "./clock-YYPMyRVs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
];
const CircleX = createLucideIcon("circle-x", __iconNode);
function OpenClosedBadge({
  isOpen,
  closingSoon = false,
  size = "md",
  className
}) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-sm px-3 py-1 gap-1.5",
    lg: "text-base px-4 py-1.5 gap-2"
  };
  const iconSize = { sm: 12, md: 14, lg: 16 }[size];
  if (closingSoon) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: cn(
          "inline-flex items-center font-semibold rounded-full",
          "bg-amber-100 text-amber-700 border border-amber-300",
          sizeClasses[size],
          className
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: iconSize, className: "flex-shrink-0" }),
          "Closing Soon"
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center font-semibold rounded-full",
        isOpen ? "bg-green-100 text-green-700 border border-green-300" : "bg-red-100 text-red-600 border border-red-200",
        sizeClasses[size],
        className
      ),
      children: [
        isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: iconSize, className: "flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: iconSize, className: "flex-shrink-0" }),
        isOpen ? "Open" : "Closed"
      ]
    }
  );
}
export {
  OpenClosedBadge as O
};
