import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, R as React, b as useParams, r as reactExports, d as Skeleton, H as Heart, e as ue } from "./index-DrGu1WxZ.js";
import { C as ChevronRight, a as CategoryBadge, S as StarRating } from "./StarRating-CTErpOv_.js";
import { O as OpenClosedBadge } from "./OpenClosedBadge-BEB76fvk.js";
import { B as Badge } from "./badge-BTE8FiTs.js";
import { B as Button } from "./button-JA2JlVVQ.js";
import { g as useShopById, h as useReviews, j as useFavorites, k as useAddReview, l as useToggleFavorite, m as motion } from "./proxy-D0zob5_p.js";
import { S as Star } from "./types-BtjumCZv.js";
import { C as Clock } from "./clock-YYPMyRVs.js";
import { M as MapPin } from "./map-pin-Bpw5jdUr.js";
import { P as Phone, T as Tag } from "./tag-Bcp4X-Jv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function SiInstagram(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" }, "child": [] }] })(props);
}
function formatTime(t) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 || 12;
  return `${hr}:${m.toString().padStart(2, "0")} ${ampm}`;
}
function getTimeRemaining(targetTime) {
  const now = /* @__PURE__ */ new Date();
  const [h, m] = targetTime.split(":").map(Number);
  const target = /* @__PURE__ */ new Date();
  target.setHours(h, m, 0, 0);
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return "";
  const hrs = Math.floor(diff / 36e5);
  const mins = Math.floor(diff % 36e5 / 6e4);
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins}m`;
}
function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function getRelativeTime(createdAt) {
  const ms = Number(createdAt) / 1e6;
  const diff = Date.now() - ms;
  if (diff < 6e4) return "Just now";
  if (diff < 36e5) return `${Math.floor(diff / 6e4)}m ago`;
  if (diff < 864e5) return `${Math.floor(diff / 36e5)}h ago`;
  return `${Math.floor(diff / 864e5)}d ago`;
}
const TODAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function ShopDetailPage() {
  const { shopId } = useParams({ from: "/shop/$shopId" });
  const { data: shop, isLoading } = useShopById(BigInt(shopId));
  const { data: reviewsRaw } = useReviews(BigInt(shopId));
  const reviews = Array.isArray(reviewsRaw) ? reviewsRaw : [];
  const { data: favorites = [] } = useFavorites();
  const addReview = useAddReview();
  const toggleFavorite = useToggleFavorite();
  const [photoIndex, setPhotoIndex] = reactExports.useState(0);
  const [reviewStars, setReviewStars] = reactExports.useState(5);
  const [reviewText, setReviewText] = reactExports.useState("");
  const [countdown, setCountdown] = reactExports.useState("");
  const isFavorited = reactExports.useMemo(
    () => favorites.some((f) => f.id === (shop == null ? void 0 : shop.id)),
    [favorites, shop]
  );
  reactExports.useEffect(() => {
    if (!shop) return;
    const update = () => {
      if (shop.isOpen) {
        setCountdown(getTimeRemaining(shop.closingTime));
      } else {
        setCountdown(getTimeRemaining(shop.openingTime));
      }
    };
    update();
    const interval = setInterval(update, 6e4);
    return () => clearInterval(interval);
  }, [shop]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full rounded-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-2/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-1/3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-28 w-full rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-2xl" })
      ] })
    ] });
  }
  if (!shop) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center justify-center py-20 px-4 text-center",
        "data-ocid": "shop.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-6xl mb-4", children: "🏪" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl", children: "Shop not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "This shop may have been removed" })
        ]
      }
    );
  }
  const nowMinutes = (/* @__PURE__ */ new Date()).getHours() * 60 + (/* @__PURE__ */ new Date()).getMinutes();
  timeToMinutes(shop.openingTime);
  const closeMinutes = timeToMinutes(shop.closingTime);
  const isClosingSoon = shop.isOpen && closeMinutes - nowMinutes > 0 && closeMinutes - nowMinutes <= 30;
  const photos = shop.photoKeys.length > 0 ? shop.photoKeys : [];
  const hasPhotos = photos.length > 0;
  const todayName = TODAY_NAMES[(/* @__PURE__ */ new Date()).getDay()];
  const instagramId = Array.isArray(shop.instagramId) && shop.instagramId.length > 0 ? shop.instagramId[0] : typeof shop.instagramId === "string" && shop.instagramId ? shop.instagramId : null;
  const handleFavorite = async () => {
    try {
      await toggleFavorite.mutateAsync(shop.id);
      ue.success(
        isFavorited ? "Removed from favorites" : "Added to favorites!"
      );
    } catch {
      ue.error("Please log in to save favorites");
    }
  };
  const handleShare = () => {
    var _a;
    (_a = navigator.share) == null ? void 0 : _a.call(navigator, { title: shop.name, url: window.location.href }).catch(() => null);
  };
  const handleGetDirections = () => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(shop.address)}`,
      "_blank"
    );
  };
  const handleMapView = () => {
    window.open(
      `https://maps.google.com/?q=${shop.latitude},${shop.longitude}`,
      "_blank"
    );
  };
  const handleSubmitReview = async () => {
    if (!reviewText.trim()) {
      ue.error("Please write a comment");
      return;
    }
    try {
      await addReview.mutateAsync({
        shopId: shop.id,
        stars: BigInt(reviewStars),
        comment: reviewText
      });
      ue.success("Review submitted!");
      setReviewText("");
      setReviewStars(5);
    } catch {
      ue.error("Failed to submit review. Please log in.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden", children: [
      hasPhotos ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: photos[photoIndex],
          alt: `${shop.name} ${photoIndex + 1}`,
          className: "w-full h-full object-cover transition-all duration-500"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-9xl opacity-20", children: "🏪" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        OpenClosedBadge,
        {
          isOpen: shop.isOpen,
          closingSoon: isClosingSoon,
          size: "lg"
        }
      ) }),
      hasPhotos && photos.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setPhotoIndex((i) => Math.max(0, i - 1)),
            className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center",
            "aria-label": "Previous photo",
            "data-ocid": "shop.photo_prev",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 16, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setPhotoIndex((i) => Math.min(photos.length - 1, i + 1)),
            className: "absolute right-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center",
            "aria-label": "Next photo",
            "data-ocid": "shop.photo_next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, className: "text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5", children: photos.map((photo, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setPhotoIndex(i),
            className: `w-2 h-2 rounded-full transition-all ${i === photoIndex ? "bg-white w-4" : "bg-white/50"}`,
            "aria-label": `Photo ${i + 1}`,
            "data-ocid": `shop.photo_dot.${i + 1}`
          },
          photo
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleFavorite,
            className: "w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center transition-transform hover:scale-110",
            "aria-label": isFavorited ? "Remove from favorites" : "Add to favorites",
            "data-ocid": "shop.favorite_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Heart,
              {
                size: 18,
                className: isFavorited ? "fill-red-500 text-red-500" : "text-white"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleShare,
            className: "w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center",
            "aria-label": "Share shop",
            "data-ocid": "shop.share_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 15, className: "text-white" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-2xl text-foreground leading-tight", children: shop.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryBadge, { category: shop.category, size: "md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-amber-400 text-amber-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm text-foreground", children: shop.rating.toFixed(1) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground text-xs", children: [
                  "(",
                  Number(shop.reviewCount),
                  " reviews)"
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `rounded-2xl border-2 p-4 ${shop.isOpen ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`,
              "data-ocid": "shop.status_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `font-display font-black text-xl ${shop.isOpen ? "text-green-700" : "text-red-600"}`,
                        children: shop.isOpen ? "✅ OPEN NOW" : "🔴 CLOSED"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
                      todayName,
                      " · Opens ",
                      formatTime(shop.openingTime),
                      " – Closes",
                      " ",
                      formatTime(shop.closingTime)
                    ] })
                  ] }),
                  countdown && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `text-right ${shop.isOpen ? "text-green-700" : "text-amber-600"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 font-bold text-sm", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
                          shop.isOpen ? "Closes in" : "Opens in"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-lg", children: countdown })
                      ]
                    }
                  )
                ] }),
                isClosingSoon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-3 border-t border-amber-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-amber-700 font-semibold text-center", children: [
                  "⏰ Closing soon — visit before ",
                  formatTime(shop.closingTime)
                ] }) })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border p-4",
              "data-ocid": "shop.address_card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18, className: "text-orange-500" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-1", children: "Address" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-snug", children: shop.address })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    onClick: handleGetDirections,
                    className: "mt-3 w-full",
                    variant: "outline",
                    "data-ocid": "shop.directions_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 15, className: "mr-1.5" }),
                      "Get Directions",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 13, className: "ml-auto opacity-60" })
                    ]
                  }
                )
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.12 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-card rounded-2xl border border-border p-4",
              "data-ocid": "shop.phone_card",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18, className: "text-green-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: "Phone" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-semibold", children: shop.phone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: `tel:${shop.phone}`,
                    className: "flex-shrink-0",
                    "data-ocid": "shop.call_button",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "button",
                        size: "sm",
                        className: "bg-green-600 hover:bg-green-700 text-white",
                        children: "Call"
                      }
                    )
                  }
                )
              ] })
            }
          )
        }
      ),
      instagramId && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.14 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://instagram.com/${instagramId}`,
              target: "_blank",
              rel: "noopener noreferrer",
              "data-ocid": "shop.instagram_link",
              className: "block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl border border-border p-4 hover:border-pink-300 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiInstagram, { size: 18, className: "text-pink-600" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: "Instagram" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-pink-600", children: [
                    "@",
                    instagramId
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, className: "text-muted-foreground" })
              ] }) })
            }
          )
        }
      ),
      shop.offers && shop.offers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.16 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 p-4",
              "data-ocid": "shop.offers_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-base text-orange-700 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16, className: "text-orange-500" }),
                  "Today's Offers",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-orange-500 text-white text-xs ml-auto", children: shop.offers.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: shop.offers.map((offer, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 bg-white rounded-xl p-3 border border-orange-100",
                    "data-ocid": `shop.offer.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0", children: "🏷️" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium leading-snug", children: offer })
                    ]
                  },
                  offer.slice(0, 20) || `offer-${i}`
                )) })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.18 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border overflow-hidden",
              "data-ocid": "shop.map_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: handleMapView,
                    className: "w-full h-36 relative overflow-hidden cursor-pointer p-0 block text-left",
                    "aria-label": "View on Google Maps",
                    "data-ocid": "shop.map_preview",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 opacity-20",
                          style: {
                            backgroundImage: "repeating-linear-gradient(0deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 32px)"
                          }
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-red-500 shadow-lg flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 20, className: "text-white" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/90 backdrop-blur rounded-lg px-3 py-1 shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground", children: [
                          shop.latitude.toFixed(4),
                          ", ",
                          shop.longitude.toFixed(4)
                        ] }) })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    onClick: handleMapView,
                    className: "w-full",
                    variant: "outline",
                    "data-ocid": "shop.view_on_map_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { size: 14, className: "mr-1.5" }),
                      "View on Map"
                    ]
                  }
                ) })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-2xl border border-border p-4",
              "data-ocid": "shop.reviews_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-base text-foreground mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 16, className: "fill-amber-400 text-amber-400" }),
                  "Reviews",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs font-normal text-muted-foreground", children: [
                    Number(shop.reviewCount),
                    " total"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-muted/40 rounded-xl p-3 mb-4",
                    "data-ocid": "shop.review_form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Share your experience" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
                        [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setReviewStars(s),
                            "aria-label": `Rate ${s} stars`,
                            "data-ocid": `shop.review_star.${s}`,
                            className: "transition-transform hover:scale-110",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Star,
                              {
                                size: 24,
                                className: `transition-colors ${s <= reviewStars ? "fill-amber-400 text-amber-400" : "text-muted-foreground fill-none"}`
                              }
                            )
                          },
                          `rstar-${s}`
                        )),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold ml-1", children: [
                          reviewStars,
                          "/5"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Textarea,
                        {
                          placeholder: "What did you think?",
                          value: reviewText,
                          onChange: (e) => setReviewText(e.target.value),
                          className: "text-sm min-h-[72px] resize-none",
                          "data-ocid": "shop.review_input"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Button,
                        {
                          type: "button",
                          onClick: handleSubmitReview,
                          disabled: addReview.isPending || !reviewText.trim(),
                          className: "mt-2 w-full",
                          "data-ocid": "shop.review_submit_button",
                          children: addReview.isPending ? "Submitting..." : "Submit Review"
                        }
                      )
                    ]
                  }
                ),
                reviews.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "text-center py-6",
                    "data-ocid": "shop.reviews_empty_state",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "💬" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "No reviews yet — be the first!" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: reviews.map((review, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "border-t border-border pt-3 first:border-0 first:pt-0",
                    "data-ocid": `shop.review_item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          StarRating,
                          {
                            rating: Number(review.stars),
                            size: "sm",
                            showValue: false
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: getRelativeTime(review.createdAt) })
                      ] }),
                      review.comment && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-snug", children: review.comment })
                    ]
                  },
                  `review-${Number(review.id)}`
                )) })
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  ShopDetailPage as default
};
