import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterShop } from "@/hooks/useShops";
import type { ShopCategory, ShopInput } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import {
  Camera,
  CheckCircle,
  Clock,
  Instagram,
  MapPin,
  Phone,
  Plus,
  Store,
  Tag,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const CATEGORIES: {
  value: ShopCategory;
  label: string;
  emoji: string;
  color: string;
}[] = [
  {
    value: "StreetFood",
    label: "Street Food",
    emoji: "🍜",
    color: "bg-orange-500",
  },
  {
    value: "JuiceShop",
    label: "Juice Shop",
    emoji: "🥤",
    color: "bg-green-500",
  },
  { value: "Bakery", label: "Bakery", emoji: "🥐", color: "bg-amber-500" },
  { value: "Restaurant", label: "Restaurant", emoji: "🍽️", color: "bg-red-500" },
  { value: "Cafe", label: "Café", emoji: "☕", color: "bg-amber-900" },
  {
    value: "SnackShop",
    label: "Snack Shop",
    emoji: "🍿",
    color: "bg-yellow-500",
  },
];

const STEPS = ["Shop Details", "Location & Hours", "Photos & Offers"];

interface FormState {
  name: string;
  category: ShopCategory;
  address: string;
  phone: string;
  instagramId: string;
  openingTime: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  locationCaptured: boolean;
  photos: string[];
  offers: string[];
}

export default function OwnerRegister() {
  const register = useRegisterShop();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [form, setForm] = useState<FormState>({
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
    offers: [""],
  });

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setForm((f) => ({
          ...f,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          locationCaptured: true,
        }));
        toast.success("Location captured! 📍");
      },
      () => toast.error("Could not get location. Please enable GPS."),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const addOffer = () => {
    if (form.offers.length < 5) set("offers", [...form.offers, ""]);
  };

  const removeOffer = (i: number) => {
    set(
      "offers",
      form.offers.filter((_, idx) => idx !== i),
    );
  };

  const setOffer = (i: number, val: string) => {
    const next = [...form.offers];
    next[i] = val;
    set("offers", next);
  };

  const setPhoto = (i: number, val: string) => {
    const next = [...form.photos];
    next[i] = val;
    set("photos", next);
  };

  const canProceedStep1 =
    form.name.trim() && form.address.trim() && form.phone.trim();
  const canProceedStep2 = form.openingTime && form.closingTime;

  const handleNext = () => {
    if (step === 1 && !canProceedStep1) {
      toast.error("Please fill shop name, address, and phone.");
      return;
    }
    if (step === 2 && !canProceedStep2) {
      toast.error("Please set opening and closing times.");
      return;
    }
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.address || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const input: ShopInput = {
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
      offers: form.offers.filter(Boolean),
    };
    try {
      await register.mutateAsync(input);
      toast.success("Shop registered on Opclo! 🎉");
      navigate({ to: "/owner" });
    } catch {
      toast.error("Registration failed. Please log in and try again.");
    }
  };

  return (
    <div className="px-4 pt-4 pb-10">
      {/* Header */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
            <Store size={18} className="text-white" />
          </div>
          <h1 className="font-display font-black text-xl text-foreground">
            Register Your Shop
          </h1>
        </div>
        <p className="text-xs text-muted-foreground ml-12">
          Step {step} of {STEPS.length} — {STEPS[step - 1]}
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-1.5 mb-6">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <button
              type="button"
              onClick={() => i + 1 < step && setStep(i + 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                i + 1 === step
                  ? "bg-orange-500 text-white border-orange-500 shadow-md"
                  : i + 1 < step
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-muted text-muted-foreground border-border"
              }`}
              data-ocid={`register.step_${i + 1}_button`}
            >
              {i + 1 < step ? <CheckCircle size={14} /> : i + 1}
            </button>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-1.5 mx-1 rounded-full transition-all ${
                  i + 1 < step ? "bg-green-500" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Shop Details */}
      {step === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-5"
          data-ocid="register.step1_panel"
        >
          <div className="space-y-2">
            <Label
              htmlFor="shopName"
              className="text-sm font-semibold flex items-center gap-1.5"
            >
              <Store size={14} className="text-orange-500" /> Shop Name *
            </Label>
            <Input
              id="shopName"
              placeholder="e.g. Raj Street Kitchen"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="rounded-xl h-11"
              data-ocid="register.name_input"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold">Shop Category *</Label>
            <div className="grid grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={String(cat.value)}
                  type="button"
                  onClick={() => set("category", cat.value)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-2xl border-2 transition-all ${
                    form.category === cat.value
                      ? `border-orange-500 ${cat.color} text-white shadow-md scale-105`
                      : "border-border bg-card text-foreground hover:border-orange-300"
                  }`}
                  data-ocid={`register.category_${String(cat.value).toLowerCase()}`}
                >
                  <span className="text-xl">{cat.emoji}</span>
                  <span className="text-xs font-semibold leading-tight text-center">
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-semibold flex items-center gap-1.5"
            >
              <Phone size={14} className="text-green-500" /> Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="rounded-xl h-11"
              data-ocid="register.phone_input"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-sm font-semibold flex items-center gap-1.5"
            >
              <MapPin size={14} className="text-red-500" /> Address *
            </Label>
            <Input
              id="address"
              placeholder="e.g. 12 Market Lane, Anna Nagar"
              value={form.address}
              onChange={(e) => set("address", e.target.value)}
              className="rounded-xl h-11"
              data-ocid="register.address_input"
            />
          </div>

          <Button
            type="button"
            onClick={handleNext}
            className="w-full py-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base"
            data-ocid="register.next_step1_button"
          >
            Continue →
          </Button>
        </motion.div>
      )}

      {/* Step 2: Location & Hours */}
      {step === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-5"
          data-ocid="register.step2_panel"
        >
          {/* Live Location */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-1.5">
              <MapPin size={14} className="text-red-500" /> Shop Location
            </Label>
            <Button
              type="button"
              variant="outline"
              onClick={handleGetLocation}
              className={`w-full h-12 rounded-xl border-2 gap-2 font-semibold ${
                form.locationCaptured
                  ? "border-green-500 text-green-700 bg-green-50"
                  : "border-orange-300 text-orange-600"
              }`}
              data-ocid="register.location_button"
            >
              <MapPin size={16} />
              {form.locationCaptured
                ? "Location Captured ✓"
                : "Use My Live Location"}
            </Button>
            {form.locationCaptured && (
              <p className="text-xs text-muted-foreground bg-muted px-3 py-2 rounded-lg">
                📍 {form.latitude.toFixed(5)}, {form.longitude.toFixed(5)}
              </p>
            )}
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-1.5">
              <Clock size={14} className="text-blue-500" /> Opening Time *
            </Label>
            <input
              type="time"
              value={form.openingTime}
              onChange={(e) => set("openingTime", e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="register.opening_time_input"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-1.5">
              <Clock size={14} className="text-orange-500" /> Closing Time *
            </Label>
            <input
              type="time"
              value={form.closingTime}
              onChange={(e) => set("closingTime", e.target.value)}
              className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="register.closing_time_input"
            />
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3">
            <p className="text-xs text-orange-700 font-semibold">
              ⏰ Smart Alerts Active
            </p>
            <p className="text-xs text-orange-600 mt-0.5">
              You'll get a 5-minute notification before opening and closing time
              to quickly toggle your shop status.
            </p>
          </div>

          {/* Instagram */}
          <div className="space-y-2">
            <Label
              htmlFor="instagram"
              className="text-sm font-semibold flex items-center gap-1.5"
            >
              <Instagram size={14} className="text-pink-500" /> Instagram Handle
              <span className="text-muted-foreground font-normal">
                (optional)
              </span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                @
              </span>
              <Input
                id="instagram"
                placeholder="yourshop.ig"
                value={form.instagramId}
                onChange={(e) =>
                  set("instagramId", e.target.value.replace("@", ""))
                }
                className="rounded-xl h-11 pl-7"
                data-ocid="register.instagram_input"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(1)}
              className="flex-1 py-4 rounded-2xl font-semibold"
              data-ocid="register.back_step2_button"
            >
              ← Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold"
              data-ocid="register.next_step2_button"
            >
              Continue →
            </Button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Photos & Offers */}
      {step === 3 && (
        <motion.div
          key="step3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-5"
          data-ocid="register.step3_panel"
        >
          {/* Photos */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold flex items-center gap-1.5">
              <Camera size={14} className="text-purple-500" /> Shop Photos
              <span className="text-muted-foreground font-normal">
                (up to 3 photo names/keys)
              </span>
            </Label>
            {form.photos.map((ph, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable fixed-length array
              <div key={`photo-slot-${i}`} className="relative">
                <Input
                  placeholder={`Photo ${i + 1} name or key`}
                  value={ph}
                  onChange={(e) => setPhoto(i, e.target.value)}
                  className="rounded-xl h-10 pr-10"
                  data-ocid={`register.photo_${i + 1}_input`}
                />
                {ph && (
                  <button
                    type="button"
                    onClick={() => setPhoto(i, "")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive"
                    aria-label="Clear photo"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Offers */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold flex items-center gap-1.5">
                <Tag size={14} className="text-orange-500" /> Today's Offers
              </Label>
              {form.offers.length < 5 && (
                <button
                  type="button"
                  onClick={addOffer}
                  className="text-xs text-orange-600 font-semibold flex items-center gap-1 hover:text-orange-800"
                  data-ocid="register.add_offer_button"
                >
                  <Plus size={13} /> Add
                </button>
              )}
            </div>
            {form.offers.map((offer, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: stable fixed-length array
              <div key={`offer-slot-${i}`} className="flex gap-2">
                <Input
                  placeholder={`Offer ${i + 1} — e.g. 20% off on weekdays`}
                  value={offer}
                  onChange={(e) => setOffer(i, e.target.value)}
                  className="rounded-xl h-10 flex-1"
                  data-ocid={`register.offer_${i + 1}_input`}
                />
                {form.offers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeOffer(i)}
                    className="text-muted-foreground hover:text-destructive shrink-0"
                    aria-label="Remove offer"
                    data-ocid={`register.remove_offer_${i + 1}_button`}
                  >
                    <Trash2 size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Review Summary */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-4 space-y-1.5">
            <p className="font-semibold text-sm text-foreground mb-2">
              Review & Confirm
            </p>
            <SummaryRow label="Shop" value={form.name} />
            <SummaryRow label="Category" value={String(form.category)} />
            <SummaryRow label="Phone" value={form.phone} />
            <SummaryRow label="Address" value={form.address} />
            <SummaryRow
              label="Hours"
              value={`${form.openingTime} — ${form.closingTime}`}
            />
            <SummaryRow
              label="Location"
              value={
                form.locationCaptured
                  ? `${form.latitude.toFixed(4)}, ${form.longitude.toFixed(4)}`
                  : "Not set"
              }
            />
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(2)}
              className="flex-1 py-4 rounded-2xl font-semibold"
              data-ocid="register.back_step3_button"
            >
              ← Back
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={register.isPending}
              className="flex-1 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-bold gap-2"
              data-ocid="register.submit_button"
            >
              {register.isPending ? (
                <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                "Submit Shop 🎉"
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground truncate ml-4 max-w-[60%] text-right">
        {value || "—"}
      </span>
    </div>
  );
}
