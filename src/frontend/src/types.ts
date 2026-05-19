export type ShopCategory =
  | "StreetFood"
  | "JuiceShop"
  | "Bakery"
  | "Restaurant"
  | "Cafe"
  | "SnackShop"
  | { Other: string };

export interface Shop {
  id: bigint;
  name: string;
  category: ShopCategory;
  address: string;
  phone: string;
  instagramId: [] | [string];
  photoKeys: string[];
  openingTime: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  ownerId: string;
  isOpen: boolean;
  rating: number;
  reviewCount: bigint;
  offers: string[];
  createdAt: bigint;
}

export interface Review {
  id: bigint;
  shopId: bigint;
  userId: string;
  stars: bigint;
  comment: string;
  createdAt: bigint;
}

export interface Favorite {
  userId: string;
  shopId: bigint;
}

export interface ShopInput {
  name: string;
  category: ShopCategory;
  address: string;
  phone: string;
  instagramId: [] | [string];
  photoKeys: string[];
  openingTime: string;
  closingTime: string;
  latitude: number;
  longitude: number;
  offers: string[];
}

export interface ReviewInput {
  shopId: bigint;
  stars: bigint;
  comment: string;
}

export const CATEGORY_LABELS: Record<string, string> = {
  StreetFood: "Street Food",
  JuiceShop: "Juice Shop",
  Bakery: "Bakery",
  Restaurant: "Restaurant",
  Cafe: "Café",
  SnackShop: "Snack Shop",
};

export const CATEGORY_EMOJIS: Record<string, string> = {
  StreetFood: "🍜",
  JuiceShop: "🥤",
  Bakery: "🥐",
  Restaurant: "🍽️",
  Cafe: "☕",
  SnackShop: "🍿",
};

export const CATEGORY_COLORS: Record<string, string> = {
  StreetFood: "bg-orange-500",
  JuiceShop: "bg-green-500",
  Bakery: "bg-amber-500",
  Restaurant: "bg-red-500",
  Cafe: "bg-brown-500",
  SnackShop: "bg-yellow-500",
};

export function getCategoryKey(category: ShopCategory): string {
  if (typeof category === "string") return category;
  return "Other";
}

export function getCategoryLabel(category: ShopCategory): string {
  const key = getCategoryKey(category);
  if (key === "Other" && typeof category === "object") {
    return (category as { Other: string }).Other;
  }
  return CATEGORY_LABELS[key] ?? key;
}
