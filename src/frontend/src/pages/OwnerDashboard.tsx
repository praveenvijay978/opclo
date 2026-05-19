import { OpenClosedBadge } from "@/components/OpenClosedBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  useExtendShopHours,
  useOwnerShop,
  useUpdateShopHours,
  useUpdateShopStatus,
} from "@/hooks/useShops";
import { getCategoryLabel } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  CheckCircle,
  Clock,
  Heart,
  PlusCircle,
  Star,
  Store,
  Timer,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// Parse "HH:MM" into today's Date
function parseTimeToday(time: string): Date {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

function minutesUntil(target: Date): number {
  return (target.getTime() - Date.now()) / 60000;
}

export default function OwnerDashboard() {
  const { data: shop, isLoading } = useOwnerShop();
  const updateStatus = useUpdateShopStatus();
  const extendHours = useExtendShopHours();
  const updateHours = useUpdateShopHours();

  const [extendTime, setExtendTime] = useState("");
  const [extendSuccess, setExtendSuccess] = useState(false);
  const [newOpenTime, setNewOpenTime] = useState("");
  const [newCloseTime, setNewCloseTime] = useState("");
  const [hoursSuccess, setHoursSuccess] = useState(false);
  const [, setTick] = useState(0);

  // Tick every 30s for notification checks
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 30000);
    return () => clearInterval(t);
  }, []);

  // Pre-populate update fields when shop loads
  useEffect(() => {
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
      return { type: "opening" as const, minsToOpen };
    if (minsToClose >= 0 && minsToClose <= 5)
      return { type: "closing" as const, minsToClose };
    return null;
  })();

  const handleToggleStatus = async () => {
    if (!shop) return;
    try {
      await updateStatus.mutateAsync(!shop.isOpen);
      toast.success(
        shop.isOpen ? "Shop marked as Closed" : "Shop is now Open! 🎉",
      );
    } catch {
      toast.error("Failed to update status. Please log in.");
    }
  };

  const handleExtend = async () => {
    if (!extendTime) return;
    try {
      await extendHours.mutateAsync(extendTime);
      setExtendSuccess(true);
      toast.success(`Closing time extended to ${extendTime}! ⏰`);
      setTimeout(() => setExtendSuccess(false), 4000);
    } catch {
      toast.error("Failed to extend hours.");
    }
  };

  const handleUpdateHours = async () => {
    if (!newOpenTime || !newCloseTime) return;
    try {
      await updateHours.mutateAsync({
        openingTime: newOpenTime,
        closingTime: newCloseTime,
      });
      setHoursSuccess(true);
      toast.success("Hours updated successfully!");
      setTimeout(() => setHoursSuccess(false), 4000);
    } catch {
      toast.error("Failed to update hours.");
    }
  };

  if (isLoading) {
    return (
      <div
        className="p-4 flex flex-col items-center justify-center py-20"
        data-ocid="owner.loading_state"
      >
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full" />
        <p className="mt-4 text-muted-foreground text-sm">
          Loading your shop...
        </p>
      </div>
    );
  }

  if (!shop) {
    return (
      <div className="px-4 pt-4" data-ocid="owner.empty_state">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-8 text-center mt-2"
        >
          <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Store size={38} className="text-white" />
          </div>
          <h2 className="font-display font-black text-2xl text-foreground mb-2">
            Register Your Shop
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
            Put your shop on Opclo and let thousands of customers know when
            you're open today.
          </p>
          <Link to="/owner/register" data-ocid="owner.register_button">
            <Button className="rounded-2xl px-8 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base gap-2 shadow-md">
              <PlusCircle size={18} />
              Get Started Free
            </Button>
          </Link>
        </motion.div>

        <div className="mt-6 space-y-3">
          {[
            {
              icon: <Bell size={18} className="text-orange-500" />,
              title: "5-min Pre-Close Alerts",
              desc: "Smart notifications before closing time",
            },
            {
              icon: <Star size={18} className="text-yellow-500" />,
              title: "Ratings & Reviews",
              desc: "Build trust with customer reviews",
            },
            {
              icon: <TrendingUp size={18} className="text-green-500" />,
              title: "Peak Day Extensions",
              desc: "Extend hours on busy days in one tap",
            },
            {
              icon: <Heart size={18} className="text-red-500" />,
              title: "Customer Favourites",
              desc: "See who's saved your shop",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 bg-card rounded-2xl border border-border p-4"
            >
              <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0">
                {icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-8 space-y-4" data-ocid="owner.dashboard">
      {/* Shop Name Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-5 text-white shadow-lg"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-orange-100 text-xs font-medium mb-1">
              Your Shop
            </p>
            <h2 className="font-display font-black text-xl truncate">
              {shop.name}
            </h2>
            <span className="inline-block mt-1.5 bg-white/20 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {getCategoryLabel(shop.category)}
            </span>
          </div>
          <OpenClosedBadge isOpen={shop.isOpen} size="lg" />
        </div>
      </motion.div>

      {/* 5-min Notification Banner */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-2xl p-4 border-2 flex items-center gap-3 ${
            notification.type === "opening"
              ? "bg-green-50 border-green-400"
              : "bg-orange-50 border-orange-400"
          }`}
          data-ocid="owner.notification_banner"
        >
          <Bell
            size={22}
            className={
              notification.type === "opening"
                ? "text-green-600"
                : "text-orange-600"
            }
          />
          <div className="flex-1 min-w-0">
            <p
              className={`font-bold text-sm ${notification.type === "opening" ? "text-green-800" : "text-orange-800"}`}
            >
              {notification.type === "opening"
                ? "⏰ Almost time to open!"
                : "🔔 Closing soon!"}
            </p>
            <p className="text-xs text-muted-foreground">
              {notification.type === "opening"
                ? "Ready to open your shop for customers?"
                : "Keep open or close now?"}
            </p>
          </div>
          <Button
            type="button"
            size="sm"
            className={`rounded-xl font-bold px-3 ${
              notification.type === "opening"
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
            onClick={handleToggleStatus}
            data-ocid={
              notification.type === "opening"
                ? "owner.open_button"
                : "owner.close_button"
            }
          >
            {notification.type === "opening" ? "Open Now" : "Close Now"}
          </Button>
        </motion.div>
      )}

      {/* OPEN / CLOSED Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card border border-border rounded-3xl p-5"
        data-ocid="owner.status_card"
      >
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
          Shop Status
        </p>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className={`font-display font-black text-2xl ${shop.isOpen ? "text-green-600" : "text-red-500"}`}
            >
              {shop.isOpen ? "Your shop is OPEN" : "Your shop is CLOSED"}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {shop.isOpen
                ? "Customers can see you're open"
                : "Tap to open for customers"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleToggleStatus}
            disabled={updateStatus.isPending}
            className={`w-16 h-9 rounded-full transition-all duration-300 relative shadow-inner ${
              shop.isOpen ? "bg-green-500" : "bg-red-400"
            } ${updateStatus.isPending ? "opacity-60" : "cursor-pointer"}`}
            aria-label={shop.isOpen ? "Close shop" : "Open shop"}
            data-ocid="owner.status_toggle"
          >
            <span
              className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 ${
                shop.isOpen ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>

        {/* Large action button */}
        <Button
          type="button"
          onClick={handleToggleStatus}
          disabled={updateStatus.isPending}
          className={`w-full mt-4 py-5 rounded-2xl font-bold text-base gap-2 ${
            shop.isOpen
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          data-ocid="owner.toggle_button"
        >
          {updateStatus.isPending ? (
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
          ) : shop.isOpen ? (
            "Close My Shop"
          ) : (
            "Open My Shop 🟢"
          )}
        </Button>
      </motion.div>

      {/* Hours Card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-card border border-border rounded-3xl p-5"
        data-ocid="owner.hours_card"
      >
        <div className="flex items-center gap-2 mb-3">
          <Clock size={16} className="text-primary" />
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Shop Hours
          </p>
        </div>
        <p className="font-display font-bold text-xl text-foreground">
          {shop.openingTime} — {shop.closingTime}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Daily operating hours
        </p>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-3 gap-3"
        data-ocid="owner.stats_row"
      >
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center">
          <Star size={18} className="text-amber-500 mx-auto mb-1" />
          <p className="font-bold text-lg text-foreground">
            {shop.rating.toFixed(1)}
          </p>
          <p className="text-xs text-muted-foreground">Rating</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 text-center">
          <TrendingUp size={18} className="text-blue-500 mx-auto mb-1" />
          <p className="font-bold text-lg text-foreground">
            {Number(shop.reviewCount)}
          </p>
          <p className="text-xs text-muted-foreground">Reviews</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-3 text-center">
          <Heart size={18} className="text-red-500 mx-auto mb-1" />
          <p className="font-bold text-lg text-foreground">—</p>
          <p className="text-xs text-muted-foreground">Favourites</p>
        </div>
      </motion.div>

      {/* Extend Hours */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-card border border-border rounded-3xl p-5"
        data-ocid="owner.extend_hours_card"
      >
        <div className="flex items-center gap-2 mb-1">
          <Timer size={16} className="text-orange-500" />
          <p className="font-semibold text-sm text-foreground">
            Extend Closing Time
          </p>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Peak day? Stay open longer tonight.
        </p>

        {extendSuccess ? (
          <div
            className="flex items-center gap-2 bg-green-50 border border-green-300 rounded-xl p-3"
            data-ocid="owner.extend_success"
          >
            <CheckCircle size={16} className="text-green-600" />
            <p className="text-sm font-semibold text-green-700">
              Closing time extended! ⏰
            </p>
          </div>
        ) : (
          <div className="flex gap-2">
            <label htmlFor="owner-extend-time" className="sr-only">
              Extend closing time
            </label>
            <input
              id="owner-extend-time"
              type="time"
              value={extendTime}
              onChange={(e) => setExtendTime(e.target.value)}
              className="flex-1 h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="owner.extend_time_input"
            />
            <Button
              type="button"
              onClick={handleExtend}
              disabled={extendHours.isPending || !extendTime}
              className="rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 shrink-0"
              data-ocid="owner.extend_button"
            >
              {extendHours.isPending ? "..." : "Extend"}
            </Button>
          </div>
        )}
      </motion.div>

      {/* Update Hours */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card border border-border rounded-3xl p-5"
        data-ocid="owner.update_hours_card"
      >
        <div className="flex items-center gap-2 mb-1">
          <Clock size={16} className="text-blue-500" />
          <p className="font-semibold text-sm text-foreground">
            Update Daily Hours
          </p>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Change your regular opening and closing times.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label
              htmlFor="owner-open-time"
              className="text-xs font-medium text-muted-foreground mb-1 block"
            >
              Opening Time
            </label>
            <input
              id="owner-open-time"
              type="time"
              value={newOpenTime}
              onChange={(e) => setNewOpenTime(e.target.value)}
              className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="owner.open_time_input"
            />
          </div>
          <div>
            <label
              htmlFor="owner-close-time"
              className="text-xs font-medium text-muted-foreground mb-1 block"
            >
              Closing Time
            </label>
            <input
              id="owner-close-time"
              type="time"
              value={newCloseTime}
              onChange={(e) => setNewCloseTime(e.target.value)}
              className="w-full h-10 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              data-ocid="owner.close_time_input"
            />
          </div>
        </div>

        {hoursSuccess ? (
          <div
            className="flex items-center gap-2 bg-green-50 border border-green-300 rounded-xl p-3"
            data-ocid="owner.hours_success"
          >
            <CheckCircle size={16} className="text-green-600" />
            <p className="text-sm font-semibold text-green-700">
              Hours updated successfully!
            </p>
          </div>
        ) : (
          <Button
            type="button"
            onClick={handleUpdateHours}
            disabled={updateHours.isPending || !newOpenTime || !newCloseTime}
            className="w-full rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-4"
            data-ocid="owner.update_hours_button"
          >
            {updateHours.isPending ? "Saving..." : "Update Hours"}
          </Button>
        )}
      </motion.div>
    </div>
  );
}
