import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn, u as useNavigate, f as Store, e as ue } from "./index-DrGu1WxZ.js";
import { a as createSlot, B as Button } from "./button-JA2JlVVQ.js";
import { I as Input } from "./input-BuRylhEE.js";
import { s as useRegisterShop, m as motion } from "./proxy-D0zob5_p.js";
import { C as CircleCheckBig } from "./circle-check-big-Dpn8TYwC.js";
import { P as Phone, T as Tag } from "./tag-Bcp4X-Jv.js";
import { M as MapPin } from "./map-pin-Bpw5jdUr.js";
import { C as Clock } from "./clock-YYPMyRVs.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
const CATEGORIES = [
  {
    value: "StreetFood",
    label: "Street Food",
    emoji: "🍜",
    color: "bg-orange-500"
  },
  {
    value: "JuiceShop",
    label: "Juice Shop",
    emoji: "🥤",
    color: "bg-green-500"
  },
  { value: "Bakery", label: "Bakery", emoji: "🥐", color: "bg-amber-500" },
  { value: "Restaurant", label: "Restaurant", emoji: "🍽️", color: "bg-red-500" },
  { value: "Cafe", label: "Café", emoji: "☕", color: "bg-amber-900" },
  {
    value: "SnackShop",
    label: "Snack Shop",
    emoji: "🍿",
    color: "bg-yellow-500"
  }
];
const STEPS = ["Shop Details", "Location & Hours", "Photos & Offers"];
function OwnerRegister() {
  const register = useRegisterShop();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(1);
  const [form, setForm] = reactExports.useState({
    name: "",
    category: "StreetFood",
    address: "",
    phone: "",
    instagramId: "",
    openingTime: "09:00",
    closingTime: "21:00",
    latitude: 0,
    longitude: 0,
    locationCaptured: false,
    photos: ["", "", ""],
    offers: [""]
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      ue.error("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((f) => ({
          ...f,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          locationCaptured: true
        }));
        ue.success("Location captured! 📍");
      },
      () => ue.error("Could not get location. Please enable GPS."),
      { enableHighAccuracy: true, timeout: 1e4 }
    );
  };
  const addOffer = () => {
    if (form.offers.length < 5) set("offers", [...form.offers, ""]);
  };
  const removeOffer = (i) => {
    set(
      "offers",
      form.offers.filter((_, idx) => idx !== i)
    );
  };
  const setOffer = (i, val) => {
    const next = [...form.offers];
    next[i] = val;
    set("offers", next);
  };
  const setPhoto = (i, val) => {
    const next = [...form.photos];
    next[i] = val;
    set("photos", next);
  };
  const canProceedStep1 = form.name.trim() && form.address.trim() && form.phone.trim();
  const canProceedStep2 = form.openingTime && form.closingTime;
  const handleNext = () => {
    if (step === 1 && !canProceedStep1) {
      ue.error("Please fill shop name, address, and phone.");
      return;
    }
    if (step === 2 && !canProceedStep2) {
      ue.error("Please set opening and closing times.");
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };
  const handleSubmit = async () => {
    if (!form.name || !form.address || !form.phone) {
      ue.error("Please fill in all required fields.");
      return;
    }
    const input = {
      name: form.name.trim(),
      category: form.category,
      address: form.address.trim(),
      phone: form.phone.trim(),
      instagramId: form.instagramId.trim() ? [form.instagramId.trim()] : [],
      photoKeys: form.photos.filter(Boolean),
      openingTime: form.openingTime,
      closingTime: form.closingTime,
      latitude: form.latitude,
      longitude: form.longitude,
      offers: form.offers.filter(Boolean)
    };
    try {
      await register.mutateAsync(input);
      ue.success("Shop registered on Opclo! 🎉");
      navigate({ to: "/owner" });
    } catch {
      ue.error("Registration failed. Please log in and try again.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { size: 18, className: "text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-xl text-foreground", children: "Register Your Shop" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground ml-12", children: [
        "Step ",
        step,
        " of ",
        STEPS.length,
        " — ",
        STEPS[step - 1]
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mb-6", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => i + 1 < step && setStep(i + 1),
          className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${i + 1 === step ? "bg-orange-500 text-white border-orange-500 shadow-md" : i + 1 < step ? "bg-green-500 text-white border-green-500" : "bg-muted text-muted-foreground border-border"}`,
          "data-ocid": `register.step_${i + 1}_button`,
          children: i + 1 < step ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14 }) : i + 1
        }
      ),
      i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `flex-1 h-1.5 mx-1 rounded-full transition-all ${i + 1 < step ? "bg-green-500" : "bg-border"}`
        }
      )
    ] }, s)) }),
    step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        className: "space-y-5",
        "data-ocid": "register.step1_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "shopName",
                className: "text-sm font-semibold flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Store, { size: 14, className: "text-orange-500" }),
                  " Shop Name *"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "shopName",
                placeholder: "e.g. Raj Street Kitchen",
                value: form.name,
                onChange: (e) => set("name", e.target.value),
                className: "rounded-xl h-11",
                "data-ocid": "register.name_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Shop Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => set("category", cat.value),
                className: `flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all ${form.category === cat.value ? `border-orange-500 ${cat.color} text-white shadow-md scale-105` : "border-border bg-card text-foreground hover:border-orange-300"}`,
                "data-ocid": `register.category_${String(cat.value).toLowerCase()}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: cat.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold leading-tight text-center", children: cat.label })
                ]
              },
              String(cat.value)
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "phone",
                className: "text-sm font-semibold flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-green-500" }),
                  " Phone Number *"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                placeholder: "+91 98765 43210",
                value: form.phone,
                onChange: (e) => set("phone", e.target.value),
                className: "rounded-xl h-11",
                "data-ocid": "register.phone_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "address",
                className: "text-sm font-semibold flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-red-500" }),
                  " Address *"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "address",
                placeholder: "e.g. 12 Market Lane, Anna Nagar",
                value: form.address,
                onChange: (e) => set("address", e.target.value),
                className: "rounded-xl h-11",
                "data-ocid": "register.address_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: handleNext,
              className: "w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base",
              "data-ocid": "register.next_step1_button",
              children: "Continue →"
            }
          )
        ]
      },
      "step1"
    ),
    step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        className: "space-y-5",
        "data-ocid": "register.step2_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-red-500" }),
              " Shop Location"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: handleGetLocation,
                className: `w-full h-12 rounded-xl border-2 gap-2 font-semibold ${form.locationCaptured ? "border-green-500 text-green-700 bg-green-50" : "border-orange-300 text-orange-600"}`,
                "data-ocid": "register.location_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
                  form.locationCaptured ? "Location Captured ✓" : "Use My Live Location"
                ]
              }
            ),
            form.locationCaptured && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground bg-muted px-3 py-2 rounded-lg", children: [
              "📍 ",
              form.latitude.toFixed(5),
              ", ",
              form.longitude.toFixed(5)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-blue-500" }),
              " Opening Time *"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                value: form.openingTime,
                onChange: (e) => set("openingTime", e.target.value),
                className: "w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                "data-ocid": "register.opening_time_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-orange-500" }),
              " Closing Time *"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "time",
                value: form.closingTime,
                onChange: (e) => set("closingTime", e.target.value),
                className: "w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
                "data-ocid": "register.closing_time_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-2xl p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-700 font-semibold", children: "⏰ Smart Alerts Active" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-orange-600 mt-0.5", children: "You'll get a 5-minute notification before opening and closing time to quickly toggle your shop status." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "instagram",
                className: "text-sm font-semibold flex items-center gap-1.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 14, className: "text-pink-500" }),
                  " Instagram Handle",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(optional)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm", children: "@" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "instagram",
                  placeholder: "yourshop.ig",
                  value: form.instagramId,
                  onChange: (e) => set("instagramId", e.target.value.replace("@", "")),
                  className: "rounded-xl h-11 pl-7",
                  "data-ocid": "register.instagram_input"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setStep(1),
                className: "flex-1 py-4 rounded-2xl font-semibold",
                "data-ocid": "register.back_step2_button",
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleNext,
                className: "flex-1 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold",
                "data-ocid": "register.next_step2_button",
                children: "Continue →"
              }
            )
          ] })
        ]
      },
      "step2"
    ),
    step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        className: "space-y-5",
        "data-ocid": "register.step3_panel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 14, className: "text-purple-500" }),
              " Shop Photos",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground font-normal", children: "(up to 3 photo names/keys)" })
            ] }),
            form.photos.map((ph, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable fixed-length array
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: `Photo ${i + 1} name or key`,
                    value: ph,
                    onChange: (e) => setPhoto(i, e.target.value),
                    className: "rounded-xl h-10 pr-10",
                    "data-ocid": `register.photo_${i + 1}_input`
                  }
                ),
                ph && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPhoto(i, ""),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive",
                    "aria-label": "Clear photo",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 })
                  }
                )
              ] }, `photo-slot-${i}`)
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { className: "text-sm font-semibold flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14, className: "text-orange-500" }),
                " Today's Offers"
              ] }),
              form.offers.length < 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: addOffer,
                  className: "text-xs text-orange-600 font-semibold flex items-center gap-1 hover:text-orange-800",
                  "data-ocid": "register.add_offer_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
                    " Add"
                  ]
                }
              )
            ] }),
            form.offers.map((offer, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable fixed-length array
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    placeholder: `Offer ${i + 1} — e.g. 20% off on weekdays`,
                    value: offer,
                    onChange: (e) => setOffer(i, e.target.value),
                    className: "rounded-xl h-10 flex-1",
                    "data-ocid": `register.offer_${i + 1}_input`
                  }
                ),
                form.offers.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => removeOffer(i),
                    className: "text-muted-foreground hover:text-destructive shrink-0",
                    "aria-label": "Remove offer",
                    "data-ocid": `register.remove_offer_${i + 1}_button`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 })
                  }
                )
              ] }, `offer-slot-${i}`)
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground mb-2", children: "Review & Confirm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Shop", value: form.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Category", value: String(form.category) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Phone", value: form.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryRow, { label: "Address", value: form.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SummaryRow,
              {
                label: "Hours",
                value: `${form.openingTime} — ${form.closingTime}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              SummaryRow,
              {
                label: "Location",
                value: form.locationCaptured ? `${form.latitude.toFixed(4)}, ${form.longitude.toFixed(4)}` : "Not set"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setStep(2),
                className: "flex-1 py-4 rounded-2xl font-semibold",
                "data-ocid": "register.back_step3_button",
                children: "← Back"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleSubmit,
                disabled: register.isPending,
                className: "flex-1 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold gap-2",
                "data-ocid": "register.submit_button",
                children: register.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" }) : "Submit Shop 🎉"
              }
            )
          ] })
        ]
      },
      "step3"
    )
  ] });
}
function SummaryRow({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground truncate ml-4 max-w-[60%] text-right", children: value || "—" })
  ] });
}
export {
  OwnerRegister as default
};
