import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ShopCategory = {
    __kind__: "JuiceShop";
    JuiceShop: null;
} | {
    __kind__: "SnackShop";
    SnackShop: null;
} | {
    __kind__: "StreetFood";
    StreetFood: null;
} | {
    __kind__: "Cafe";
    Cafe: null;
} | {
    __kind__: "Bakery";
    Bakery: null;
} | {
    __kind__: "Other";
    Other: string;
} | {
    __kind__: "Restaurant";
    Restaurant: null;
};
export interface Shop {
    id: bigint;
    latitude: number;
    photoKeys: Array<string>;
    ownerId: Principal;
    name: string;
    createdAt: bigint;
    openingTime: string;
    offers: Array<string>;
    isOpen: boolean;
    longitude: number;
    address: string;
    category: ShopCategory;
    closingTime: string;
    rating: number;
    phone: string;
    reviewCount: bigint;
    instagramId?: string;
}
export interface ShopInput {
    latitude: number;
    photoKeys: Array<string>;
    name: string;
    openingTime: string;
    offers: Array<string>;
    longitude: number;
    address: string;
    category: ShopCategory;
    closingTime: string;
    phone: string;
    instagramId?: string;
}
export interface ReviewInput {
    shopId: bigint;
    comment: string;
    stars: bigint;
}
export interface Review {
    id: bigint;
    shopId: bigint;
    userId: Principal;
    createdAt: bigint;
    comment: string;
    stars: bigint;
}
export interface backendInterface {
    addReview(input: ReviewInput): Promise<Review>;
    extendShopHours(newClosingTime: string): Promise<boolean>;
    getAllShops(): Promise<Array<Shop>>;
    getFavorites(): Promise<Array<Shop>>;
    getOwnerShop(): Promise<Shop | null>;
    getReviews(shopId: bigint): Promise<Array<Review>>;
    getShopById(id: bigint): Promise<Shop | null>;
    getShopsByCategory(category: ShopCategory): Promise<Array<Shop>>;
    initSeed(): Promise<void>;
    registerShop(input: ShopInput): Promise<Shop>;
    searchShops(searchTerm: string): Promise<Array<Shop>>;
    toggleFavorite(shopId: bigint): Promise<boolean>;
    updateShopHours(openingTime: string, closingTime: string): Promise<boolean>;
    updateShopStatus(isOpen: boolean): Promise<boolean>;
}
