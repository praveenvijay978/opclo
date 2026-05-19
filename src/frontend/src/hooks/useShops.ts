import { createActor } from "@/backend";
import type { ReviewInput, Shop, ShopCategory, ShopInput } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function useShopActor() {
  return useActor(createActor);
}

export function useAllShops() {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop[]>({
    queryKey: ["shops", "all"],
    queryFn: async () => {
      if (!actor) return sampleShops;
      const result = await (actor as unknown as ShopActorType).getAllShops();
      return result as Shop[];
    },
    enabled: !isFetching,
    placeholderData: sampleShops,
  });
}

export function useShopsByCategory(category: ShopCategory) {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop[]>({
    queryKey: ["shops", "category", category],
    queryFn: async () => {
      if (!actor) return sampleShops.filter((s) => s.category === category);
      const result = await (
        actor as unknown as ShopActorType
      ).getShopsByCategory(category);
      return result as Shop[];
    },
    enabled: !isFetching,
    placeholderData: sampleShops.filter((s) => s.category === category),
  });
}

export function useShopById(id: bigint) {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop | null>({
    queryKey: ["shops", "id", id.toString()],
    queryFn: async () => {
      if (!actor) return sampleShops.find((s) => s.id === id) ?? null;
      const result = await (actor as unknown as ShopActorType).getShopById(id);
      if (result === null || result === undefined) return null;
      const r = result as Record<string, unknown>;
      if (Array.isArray(r) && r.length === 0) return null;
      if (Array.isArray(r) && r.length === 1) return r[0] as Shop;
      if ("ok" in r) return r.ok as Shop;
      if ("err" in r) return null;
      return result as Shop;
    },
    enabled: !isFetching,
  });
}

export function useSearchShops(query: string) {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop[]>({
    queryKey: ["shops", "search", query],
    queryFn: async () => {
      if (!query.trim()) return [];
      if (!actor) {
        const q = query.toLowerCase();
        return sampleShops.filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.address.toLowerCase().includes(q),
        );
      }
      return (actor as unknown as ShopActorType).searchShops(query) as Promise<
        Shop[]
      >;
    },
    enabled: !!query.trim() && !isFetching,
  });
}

export function useFavorites() {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop[]>({
    queryKey: ["favorites"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as unknown as ShopActorType).getFavorites() as Promise<
        Shop[]
      >;
    },
    enabled: !isFetching,
  });
}

export function useToggleFavorite() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (shopId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).toggleFavorite(
        shopId,
      ) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["favorites"] }),
  });
}

export function useReviews(shopId: bigint) {
  const { actor, isFetching } = useShopActor();
  return useQuery({
    queryKey: ["reviews", shopId.toString()],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as unknown as ShopActorType).getReviews(shopId);
    },
    enabled: !isFetching,
  });
}

export function useAddReview() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ReviewInput) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).addReview(input);
    },
    onSuccess: (_data, vars) =>
      qc.invalidateQueries({ queryKey: ["reviews", vars.shopId.toString()] }),
  });
}

export function useOwnerShop() {
  const { actor, isFetching } = useShopActor();
  return useQuery<Shop | null>({
    queryKey: ["owner", "shop"],
    queryFn: async () => {
      if (!actor) return null;
      const result = await (actor as unknown as ShopActorType).getOwnerShop();
      if (result === null || result === undefined) return null;
      const r = result as Record<string, unknown>;
      if (Array.isArray(r) && r.length === 0) return null;
      if (Array.isArray(r) && r.length === 1) return r[0] as Shop;
      if ("ok" in r) return r.ok as Shop;
      if ("err" in r) return null;
      return result as Shop;
    },
    enabled: !isFetching,
  });
}

export function useRegisterShop() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ShopInput) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).registerShop(
        input,
      ) as Promise<Shop>;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["owner"] });
      qc.invalidateQueries({ queryKey: ["shops"] });
    },
  });
}

export function useUpdateShopStatus() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (isOpen: boolean) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).updateShopStatus(
        isOpen,
      ) as Promise<boolean>;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["owner"] });
      qc.invalidateQueries({ queryKey: ["shops"] });
    },
  });
}

export function useUpdateShopHours() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      openingTime,
      closingTime,
    }: { openingTime: string; closingTime: string }) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).updateShopHours(
        openingTime,
        closingTime,
      ) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["owner"] }),
  });
}

export function useExtendShopHours() {
  const { actor } = useShopActor();
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (newClosingTime: string) => {
      if (!actor) throw new Error("Not connected");
      return (actor as unknown as ShopActorType).extendShopHours(
        newClosingTime,
      ) as Promise<boolean>;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["owner"] }),
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ShopActorType = Record<string, (...args: any[]) => Promise<unknown>>;

// Sample data for development/fallback
export const sampleShops: Shop[] = [
  {
    id: 1n,
    name: "Raj Street Kitchen",
    category: "StreetFood",
    address: "12 Market Lane, Anna Nagar",
    phone: "+91 98765 43210",
    instagramId: ["raj.street.kitchen"],
    photoKeys: [],
    openingTime: "07:00",
    closingTime: "22:00",
    latitude: 13.0827,
    longitude: 80.2707,
    ownerId: "user1",
    isOpen: true,
    rating: 4.5,
    reviewCount: 128n,
    offers: ["Free chutney with every order", "Happy hour 3-5pm: 20% off"],
    createdAt: 0n,
  },
  {
    id: 2n,
    name: "Fresh Squeeze Bar",
    category: "JuiceShop",
    address: "88 Gandhi Road, T. Nagar",
    phone: "+91 98765 43211",
    instagramId: ["freshsqueeze.tn"],
    photoKeys: [],
    openingTime: "08:00",
    closingTime: "20:00",
    latitude: 13.0339,
    longitude: 80.2337,
    ownerId: "user2",
    isOpen: true,
    rating: 4.7,
    reviewCount: 95n,
    offers: ["Buy 2 get 1 free on watermelon juice"],
    createdAt: 0n,
  },
  {
    id: 3n,
    name: "Golden Crust Bakery",
    category: "Bakery",
    address: "5 Patel Street, Mylapore",
    phone: "+91 98765 43212",
    instagramId: [],
    photoKeys: [],
    openingTime: "06:30",
    closingTime: "21:00",
    latitude: 13.0368,
    longitude: 80.2676,
    ownerId: "user3",
    isOpen: false,
    rating: 4.2,
    reviewCount: 67n,
    offers: ["Morning special: croissants at half price before 9am"],
    createdAt: 0n,
  },
  {
    id: 4n,
    name: "Spice Garden Restaurant",
    category: "Restaurant",
    address: "22 Velachery Main Road",
    phone: "+91 98765 43213",
    instagramId: ["spicegarden_chn"],
    photoKeys: [],
    openingTime: "11:00",
    closingTime: "23:00",
    latitude: 12.9818,
    longitude: 80.218,
    ownerId: "user4",
    isOpen: true,
    rating: 4.6,
    reviewCount: 203n,
    offers: ["Family combo for 4 — ₹499 only", "Weekend biryani buffet"],
    createdAt: 0n,
  },
  {
    id: 5n,
    name: "Brew & Bean Café",
    category: "Cafe",
    address: "7 ECR Road, Neelankarai",
    phone: "+91 98765 43214",
    instagramId: ["brewandbean.ecr"],
    photoKeys: [],
    openingTime: "08:00",
    closingTime: "22:00",
    latitude: 12.9716,
    longitude: 80.256,
    ownerId: "user5",
    isOpen: true,
    rating: 4.8,
    reviewCount: 312n,
    offers: ["Free WiFi + refill on filter coffee"],
    createdAt: 0n,
  },
  {
    id: 6n,
    name: "Murali Snack Corner",
    category: "SnackShop",
    address: "3 Cross Street, Adyar",
    phone: "+91 98765 43215",
    instagramId: [],
    photoKeys: [],
    openingTime: "09:00",
    closingTime: "21:30",
    latitude: 13.0063,
    longitude: 80.2564,
    ownerId: "user6",
    isOpen: false,
    rating: 4.3,
    reviewCount: 44n,
    offers: ["Evening special pakoda box — ₹49"],
    createdAt: 0n,
  },
];
