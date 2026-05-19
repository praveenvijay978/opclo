import type { backendInterface, Shop, Review } from "../backend";

const mockPrincipal = { toText: () => "aaaaa-aa", _isPrincipal: true } as any;

const sampleShops: Shop[] = [
  {
    id: BigInt(1),
    name: "Sree Krishna Juice Corner",
    address: "12, Gandhi Nagar, Anna Salai, Chennai - 600002",
    phone: "+91 98765 43210",
    category: { __kind__: "JuiceShop", JuiceShop: null },
    isOpen: true,
    openingTime: "08:00",
    closingTime: "21:00",
    rating: 4.5,
    reviewCount: BigInt(128),
    photoKeys: [],
    offers: ["Buy 2 Get 1 Free on Fresh Lime Soda", "10% off on all combos today"],
    latitude: 13.0827,
    longitude: 80.2707,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000000),
    instagramId: "@sree_krishna_juice",
  },
  {
    id: BigInt(2),
    name: "Murugan Idli Shop",
    address: "45, T Nagar, Pondy Bazaar, Chennai - 600017",
    phone: "+91 97654 32109",
    category: { __kind__: "StreetFood", StreetFood: null },
    isOpen: true,
    openingTime: "06:00",
    closingTime: "11:30",
    rating: 4.8,
    reviewCount: BigInt(342),
    photoKeys: [],
    offers: ["Unlimited Idli for ₹60 before 8 AM", "Free sambar with every plate"],
    latitude: 13.0418,
    longitude: 80.2341,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000001),
    instagramId: "@murugan_idli_official",
  },
  {
    id: BigInt(3),
    name: "Annapoorna Bakery",
    address: "78, Coimbatore Road, RS Puram, Coimbatore - 641002",
    phone: "+91 94321 09876",
    category: { __kind__: "Bakery", Bakery: null },
    isOpen: false,
    openingTime: "07:00",
    closingTime: "20:00",
    rating: 4.2,
    reviewCount: BigInt(89),
    photoKeys: [],
    offers: ["Fresh Bread Baked Every Morning", "20% off on birthday cakes"],
    latitude: 11.0168,
    longitude: 76.9558,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000002),
  },
  {
    id: BigInt(4),
    name: "Chai Sutta Bar",
    address: "22, MG Road, Brigade Road, Bengaluru - 560001",
    phone: "+91 80123 45678",
    category: { __kind__: "Cafe", Cafe: null },
    isOpen: true,
    openingTime: "07:00",
    closingTime: "23:00",
    rating: 4.3,
    reviewCount: BigInt(215),
    photoKeys: [],
    offers: ["Student Discount 15% with ID", "Happy Hours 3-5 PM - Buy 1 Get 1"],
    latitude: 12.9716,
    longitude: 77.5946,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000003),
    instagramId: "@chai_sutta_blr",
  },
  {
    id: BigInt(5),
    name: "Saravana Bhavan Snacks",
    address: "101, Avinashi Road, Peelamedu, Coimbatore - 641004",
    phone: "+91 98901 23456",
    category: { __kind__: "SnackShop", SnackShop: null },
    isOpen: true,
    openingTime: "09:00",
    closingTime: "22:00",
    rating: 4.6,
    reviewCount: BigInt(176),
    photoKeys: [],
    offers: ["Samosa + Chai for ₹30", "Evening Special: 4 Vadas for ₹40"],
    latitude: 11.0264,
    longitude: 77.0265,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000004),
  },
  {
    id: BigInt(6),
    name: "Punjabi Dhaba Express",
    address: "55, NH-44, Tambaram, Chennai - 600045",
    phone: "+91 91234 56789",
    category: { __kind__: "Restaurant", Restaurant: null },
    isOpen: false,
    openingTime: "11:00",
    closingTime: "23:30",
    rating: 4.1,
    reviewCount: BigInt(93),
    photoKeys: [],
    offers: ["Unlimited Dal Makhani with any main course", "Free Lassi on orders above ₹300"],
    latitude: 12.9249,
    longitude: 80.1000,
    ownerId: mockPrincipal,
    createdAt: BigInt(1700000000005),
    instagramId: "@punjabi_dhaba_express",
  },
];

const sampleReviews: Review[] = [
  {
    id: BigInt(1),
    shopId: BigInt(1),
    userId: mockPrincipal,
    createdAt: BigInt(1700500000000),
    comment: "Best fresh juice in the city! The sugarcane juice is absolutely divine.",
    stars: BigInt(5),
  },
  {
    id: BigInt(2),
    shopId: BigInt(1),
    userId: mockPrincipal,
    createdAt: BigInt(1700600000000),
    comment: "Very hygienic and fresh. Prices are reasonable.",
    stars: BigInt(4),
  },
];

export const mockBackend: backendInterface = {
  getAllShops: async () => sampleShops,

  getShopsByCategory: async (category) => {
    return sampleShops.filter((s) => s.category.__kind__ === category.__kind__);
  },

  getShopById: async (id) => {
    return sampleShops.find((s) => s.id === id) ?? null;
  },

  searchShops: async (term) => {
    const lower = term.toLowerCase();
    return sampleShops.filter(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        s.address.toLowerCase().includes(lower)
    );
  },

  getFavorites: async () => [sampleShops[0], sampleShops[3]],

  toggleFavorite: async (_shopId) => true,

  getReviews: async (_shopId) => sampleReviews,

  addReview: async (input) => ({
    id: BigInt(99),
    shopId: input.shopId,
    userId: mockPrincipal,
    createdAt: BigInt(Date.now()),
    comment: input.comment,
    stars: input.stars,
  }),

  getOwnerShop: async () => sampleShops[0],

  registerShop: async (input) => ({
    id: BigInt(100),
    ...input,
    isOpen: false,
    rating: 0,
    reviewCount: BigInt(0),
    ownerId: mockPrincipal,
    createdAt: BigInt(Date.now()),
  }),

  updateShopStatus: async (_isOpen) => true,

  updateShopHours: async (_open, _close) => true,

  extendShopHours: async (_newClose) => true,

  initSeed: async () => undefined,
};
