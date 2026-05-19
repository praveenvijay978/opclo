import { c as createLucideIcon } from "./index-DrGu1WxZ.js";
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
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
const CATEGORY_LABELS = {
  StreetFood: "Street Food",
  JuiceShop: "Juice Shop",
  Bakery: "Bakery",
  Restaurant: "Restaurant",
  Cafe: "Café",
  SnackShop: "Snack Shop"
};
const CATEGORY_EMOJIS = {
  StreetFood: "🍜",
  JuiceShop: "🥤",
  Bakery: "🥐",
  Restaurant: "🍽️",
  Cafe: "☕",
  SnackShop: "🍿"
};
function getCategoryKey(category) {
  if (typeof category === "string") return category;
  return "Other";
}
function getCategoryLabel(category) {
  const key = getCategoryKey(category);
  if (key === "Other" && typeof category === "object") {
    return category.Other;
  }
  return CATEGORY_LABELS[key] ?? key;
}
export {
  CATEGORY_EMOJIS as C,
  Star as S,
  CATEGORY_LABELS as a,
  getCategoryKey as b,
  getCategoryLabel as g
};
