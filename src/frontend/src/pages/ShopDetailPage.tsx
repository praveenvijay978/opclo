import { CategoryBadge } from "@/components/CategoryBadge";
import { OpenClosedBadge } from "@/components/OpenClosedBadge";
import { StarRating } from "@/components/StarRating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddReview,
  useFavorites,
  useReviews,
  useShopById,
  useToggleFavorite,
} from "@/hooks/useShops";
import type { Review } from "@/types";
import { useParams } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  Phone,
  Share2,
  Star,
  Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { SiInstagram } from "react-icons/si";
import { toast } from "sonner";

function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 || 12;
  return `${hr}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function getTimeRemaining(targetTime: string): string {
  const now = new Date();
  const [h, m] = targetTime.split(":").map(Number);
  const target = new Date();
  target.setHours(h, m, 0, 0);
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return "";
  const hrs = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins}m`;
}

function timeToMinutes(t: string): number {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function getRelativeTime(createdAt: bigint): string {
  const ms = Number(createdAt) / 1_000_000;
  const diff = Date.now() - ms;
  if (diff < 60000) return "Just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
}

const TODAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function ShopDetailPage() {
  const { shopId } = useParams({ from: "/shop/$shopId" });
  const { data: shop, isLoading } = useShopById(BigInt(shopId));
  const { data: reviewsRaw } = useReviews(BigInt(shopId));
  const reviews: Review[] = Array.isArray(reviewsRaw)
    ? (reviewsRaw as Review[])
    : [];
  const { data: favorites = [] } = useFavorites();
  const addReview = useAddReview();
  const toggleFavorite = useToggleFavorite();

  const [photoIndex, setPhotoIndex] = useState(0);
  const [reviewStars, setReviewStars] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [countdown, setCountdown] = useState("");

  const isFavorited = useMemo(
    () => favorites.some((f) => f.id === shop?.id),
    [favorites, shop],
  );

  // Update countdown every minute
  useEffect(() => {
    if (!shop) return;
    const update = () => {
      if (shop.isOpen) {
        setCountdown(getTimeRemaining(shop.closingTime));
      } else {
        setCountdown(getTimeRemaining(shop.openingTime));
      }
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, [shop]);

  if (isLoading) {
    return (
      <div className="p-4 space-y-3">
        <Skeleton className="h-64 w-full rounded-none" />
        <div className="px-4 space-y-3">
          <Skeleton className="h-8 w-2/3" />
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-28 w-full rounded-2xl" />
          <Skeleton className="h-20 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (!shop) {
    return (
      <div
        className="flex flex-col items-center justify-center py-20 px-4 text-center"
        data-ocid="shop.not_found"
      >
        <span className="text-6xl mb-4">🏪</span>
        <h2 className="font-display font-bold text-xl">Shop not found</h2>
        <p className="text-sm text-muted-foreground mt-1">
          This shop may have been removed
        </p>
      </div>
    );
  }

  const nowMinutes = new Date().getHours() * 60 + new Date().getMinutes();
  const _openMinutes = timeToMinutes(shop.openingTime);
  const closeMinutes = timeToMinutes(shop.closingTime);
  const isClosingSoon =
    shop.isOpen &&
    closeMinutes - nowMinutes > 0 &&
    closeMinutes - nowMinutes <= 30;

  const photos = shop.photoKeys.length > 0 ? shop.photoKeys : [];
  const hasPhotos = photos.length > 0;
  const todayName = TODAY_NAMES[new Date().getDay()];

  const instagramId =
    Array.isArray(shop.instagramId) && shop.instagramId.length > 0
      ? shop.instagramId[0]
      : typeof shop.instagramId === "string" && shop.instagramId
        ? shop.instagramId
        : null;

  const handleFavorite = async () => {
    try {
      await toggleFavorite.mutateAsync(shop.id);
      toast.success(
        isFavorited ? "Removed from favorites" : "Added to favorites!",
      );
    } catch {
      toast.error("Please log in to save favorites");
    }
  };

  const handleShare = () => {
    navigator
      .share?.({ title: shop.name, url: window.location.href })
      .catch(() => null);
  };

  const handleGetDirections = () => {
    window.open(
      `https://maps.google.com/?q=${encodeURIComponent(shop.address)}`,
      "_blank",
    );
  };

  const handleMapView = () => {
    window.open(
      `https://maps.google.com/?q=${shop.latitude},${shop.longitude}`,
      "_blank",
    );
  };

  const handleSubmitReview = async () => {
    if (!reviewText.trim()) {
      toast.error("Please write a comment");
      return;
    }
    try {
      await addReview.mutateAsync({
        shopId: shop.id,
        stars: BigInt(reviewStars),
        comment: reviewText,
      });
      toast.success("Review submitted!");
      setReviewText("");
      setReviewStars(5);
    } catch {
      toast.error("Failed to submit review. Please log in.");
    }
  };

  return (
    <div className="pb-8">
      {/* ── HERO PHOTO GALLERY ── */}
      <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
        {hasPhotos ? (
          <img
            src={photos[photoIndex]}
            alt={`${shop.name} ${photoIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-9xl opacity-20">🏪</span>
          </div>
        )}

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

        {/* open/closed badge — bottom-left, prominent */}
        <div className="absolute bottom-4 left-4 z-10">
          <OpenClosedBadge
            isOpen={shop.isOpen}
            closingSoon={isClosingSoon}
            size="lg"
          />
        </div>

        {/* Photo dots navigation */}
        {hasPhotos && photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setPhotoIndex((i) => Math.max(0, i - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center"
              aria-label="Previous photo"
              data-ocid="shop.photo_prev"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>
            <button
              type="button"
              onClick={() =>
                setPhotoIndex((i) => Math.min(photos.length - 1, i + 1))
              }
              className="absolute right-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur rounded-full flex items-center justify-center"
              aria-label="Next photo"
              data-ocid="shop.photo_next"
            >
              <ChevronRight size={16} className="text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {photos.map((photo, i) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => setPhotoIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === photoIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Photo ${i + 1}`}
                  data-ocid={`shop.photo_dot.${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Top-right action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Favorite button */}
          <button
            type="button"
            onClick={handleFavorite}
            className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center transition-transform hover:scale-110"
            aria-label={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
            data-ocid="shop.favorite_button"
          >
            <Heart
              size={18}
              className={
                isFavorited ? "fill-red-500 text-red-500" : "text-white"
              }
            />
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="w-10 h-10 bg-black/40 backdrop-blur rounded-full flex items-center justify-center"
            aria-label="Share shop"
            data-ocid="shop.share_button"
          >
            <Share2 size={15} className="text-white" />
          </button>
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* ── SHOP NAME + RATING ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display font-black text-2xl text-foreground leading-tight">
            {shop.name}
          </h1>
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <CategoryBadge category={shop.category} size="md" />
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span className="font-bold text-sm text-foreground">
                {shop.rating.toFixed(1)}
              </span>
              <span className="text-muted-foreground text-xs">
                ({Number(shop.reviewCount)} reviews)
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── OPEN/CLOSED STATUS CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div
            className={`rounded-2xl border-2 p-4 ${
              shop.isOpen
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
            data-ocid="shop.status_card"
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  className={`font-display font-black text-xl ${
                    shop.isOpen ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {shop.isOpen ? "✅ OPEN NOW" : "🔴 CLOSED"}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {todayName} · Opens {formatTime(shop.openingTime)} – Closes{" "}
                  {formatTime(shop.closingTime)}
                </div>
              </div>
              {countdown && (
                <div
                  className={`text-right ${
                    shop.isOpen ? "text-green-700" : "text-amber-600"
                  }`}
                >
                  <div className="flex items-center gap-1 font-bold text-sm">
                    <Clock size={13} />
                    {shop.isOpen ? "Closes in" : "Opens in"}
                  </div>
                  <div className="font-black text-lg">{countdown}</div>
                </div>
              )}
            </div>
            {isClosingSoon && (
              <div className="mt-3 pt-3 border-t border-amber-200">
                <p className="text-xs text-amber-700 font-semibold text-center">
                  ⏰ Closing soon — visit before {formatTime(shop.closingTime)}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* ── ADDRESS CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div
            className="bg-card rounded-2xl border border-border p-4"
            data-ocid="shop.address_card"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-orange-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Address
                </p>
                <p className="text-sm text-foreground leading-snug">
                  {shop.address}
                </p>
              </div>
            </div>
            <Button
              type="button"
              onClick={handleGetDirections}
              className="mt-3 w-full"
              variant="outline"
              data-ocid="shop.directions_button"
            >
              <MapPin size={15} className="mr-1.5" />
              Get Directions
              <ExternalLink size={13} className="ml-auto opacity-60" />
            </Button>
          </div>
        </motion.div>

        {/* ── PHONE CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <div
            className="bg-card rounded-2xl border border-border p-4"
            data-ocid="shop.phone_card"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  Phone
                </p>
                <p className="text-sm text-foreground font-semibold">
                  {shop.phone}
                </p>
              </div>
              <a
                href={`tel:${shop.phone}`}
                className="flex-shrink-0"
                data-ocid="shop.call_button"
              >
                <Button
                  type="button"
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Call
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── INSTAGRAM CARD ── */}
        {instagramId && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
          >
            <a
              href={`https://instagram.com/${instagramId}`}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="shop.instagram_link"
              className="block"
            >
              <div className="bg-card rounded-2xl border border-border p-4 hover:border-pink-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                    <SiInstagram size={18} className="text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      Instagram
                    </p>
                    <p className="text-sm font-semibold text-pink-600">
                      @{instagramId}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground" />
                </div>
              </div>
            </a>
          </motion.div>
        )}

        {/* ── TODAY'S OFFERS ── */}
        {shop.offers && shop.offers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            <div
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 p-4"
              data-ocid="shop.offers_section"
            >
              <h2 className="font-display font-bold text-base text-orange-700 mb-3 flex items-center gap-2">
                <Tag size={16} className="text-orange-500" />
                Today's Offers
                <Badge className="bg-orange-500 text-white text-xs ml-auto">
                  {shop.offers.length}
                </Badge>
              </h2>
              <div className="space-y-2">
                {shop.offers.map((offer, i) => (
                  <div
                    key={offer.slice(0, 20) || `offer-${i}`}
                    className="flex items-start gap-2 bg-white rounded-xl p-3 border border-orange-100"
                    data-ocid={`shop.offer.${i + 1}`}
                  >
                    <span className="text-lg flex-shrink-0">🏷️</span>
                    <p className="text-sm text-foreground font-medium leading-snug">
                      {offer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── MAP SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
        >
          <div
            className="bg-card rounded-2xl border border-border overflow-hidden"
            data-ocid="shop.map_section"
          >
            <button
              type="button"
              onClick={handleMapView}
              className="w-full h-36 relative overflow-hidden cursor-pointer p-0 block text-left"
              aria-label="View on Google Maps"
              data-ocid="shop.map_preview"
            >
              {/* Grid map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,#94a3b8,#94a3b8 1px,transparent 1px,transparent 32px)",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-500 shadow-lg flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <div className="bg-white/90 backdrop-blur rounded-lg px-3 py-1 shadow">
                  <p className="text-xs font-semibold text-foreground">
                    {shop.latitude.toFixed(4)}, {shop.longitude.toFixed(4)}
                  </p>
                </div>
              </div>
            </button>
            <div className="p-3">
              <Button
                type="button"
                onClick={handleMapView}
                className="w-full"
                variant="outline"
                data-ocid="shop.view_on_map_button"
              >
                <ExternalLink size={14} className="mr-1.5" />
                View on Map
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ── REVIEWS SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="bg-card rounded-2xl border border-border p-4"
            data-ocid="shop.reviews_section"
          >
            <h2 className="font-display font-bold text-base text-foreground mb-4 flex items-center gap-2">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              Reviews
              <span className="ml-auto text-xs font-normal text-muted-foreground">
                {Number(shop.reviewCount)} total
              </span>
            </h2>

            {/* Submit review */}
            <div
              className="bg-muted/40 rounded-xl p-3 mb-4"
              data-ocid="shop.review_form"
            >
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                Share your experience
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button
                    key={`rstar-${s}`}
                    type="button"
                    onClick={() => setReviewStars(s)}
                    aria-label={`Rate ${s} stars`}
                    data-ocid={`shop.review_star.${s}`}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={24}
                      className={`transition-colors ${
                        s <= reviewStars
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground fill-none"
                      }`}
                    />
                  </button>
                ))}
                <span className="text-sm font-bold ml-1">{reviewStars}/5</span>
              </div>
              <Textarea
                placeholder="What did you think?"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="text-sm min-h-[72px] resize-none"
                data-ocid="shop.review_input"
              />
              <Button
                type="button"
                onClick={handleSubmitReview}
                disabled={addReview.isPending || !reviewText.trim()}
                className="mt-2 w-full"
                data-ocid="shop.review_submit_button"
              >
                {addReview.isPending ? "Submitting..." : "Submit Review"}
              </Button>
            </div>

            {/* Review list */}
            {reviews.length === 0 ? (
              <div
                className="text-center py-6"
                data-ocid="shop.reviews_empty_state"
              >
                <span className="text-3xl">💬</span>
                <p className="text-sm text-muted-foreground mt-2">
                  No reviews yet — be the first!
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {reviews.map((review, i) => (
                  <div
                    key={`review-${Number(review.id)}`}
                    className="border-t border-border pt-3 first:border-0 first:pt-0"
                    data-ocid={`shop.review_item.${i + 1}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <StarRating
                        rating={Number(review.stars)}
                        size="sm"
                        showValue={false}
                      />
                      <span className="text-xs text-muted-foreground">
                        {getRelativeTime(review.createdAt)}
                      </span>
                    </div>
                    {review.comment && (
                      <p className="text-sm text-foreground leading-snug">
                        {review.comment}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
