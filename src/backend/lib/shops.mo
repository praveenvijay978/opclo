import List "mo:core/List";
import Principal "mo:core/Principal";
import Time "mo:core/Time";
import Types "../types/shops";
import Nat "mo:core/Nat";

module {
  public type ShopId = Nat;
  public type Shop = Types.Shop;
  public type ShopInput = Types.ShopInput;
  public type Review = Types.Review;
  public type ReviewInput = Types.ReviewInput;
  public type Favorite = Types.Favorite;
  public type OwnerProfile = Types.OwnerProfile;

  // --- Shop CRUD ---

  public func registerShop(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    state : { var nextShopId : Nat },
    caller : Principal,
    input : Types.ShopInput,
  ) : Types.Shop {
    let id = state.nextShopId;
    state.nextShopId += 1;
    let shop : Types.Shop = {
      id;
      name = input.name;
      category = input.category;
      address = input.address;
      phone = input.phone;
      instagramId = input.instagramId;
      photoKeys = input.photoKeys;
      openingTime = input.openingTime;
      closingTime = input.closingTime;
      latitude = input.latitude;
      longitude = input.longitude;
      ownerId = caller;
      isOpen = false;
      rating = 0.0;
      reviewCount = 0;
      offers = input.offers;
      createdAt = Time.now();
    };
    shops.add(shop);
    let owner : Types.OwnerProfile = {
      principal_ = caller;
      shopId = id;
      registeredAt = Time.now();
    };
    owners.add(owner);
    shop;
  };

  public func getShopById(
    shops : List.List<Types.Shop>,
    id : Nat,
  ) : ?Types.Shop {
    shops.find(func(s) { s.id == id });
  };

  public func getAllShops(shops : List.List<Types.Shop>) : [Types.Shop] {
    shops.toArray();
  };

  public func getShopsByCategory(
    shops : List.List<Types.Shop>,
    category : Types.ShopCategory,
  ) : [Types.Shop] {
    shops.filter(func(s) {
      switch (s.category, category) {
        case (#StreetFood, #StreetFood) true;
        case (#JuiceShop, #JuiceShop) true;
        case (#Bakery, #Bakery) true;
        case (#Restaurant, #Restaurant) true;
        case (#Cafe, #Cafe) true;
        case (#SnackShop, #SnackShop) true;
        case (#Other(a), #Other(b)) a == b;
        case _ false;
      };
    }).toArray();
  };

  public func searchShops(
    shops : List.List<Types.Shop>,
    searchTerm : Text,
  ) : [Types.Shop] {
    let lower = searchTerm.toLower();
    shops.filter(func(s) {
      s.name.toLower().contains(#text lower) or
      s.address.toLower().contains(#text lower)
    }).toArray();
  };

  public func getOwnerShop(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    caller : Principal,
  ) : ?Types.Shop {
    switch (owners.find(func(o) { o.principal_ == caller })) {
      case null null;
      case (?owner) shops.find(func(s) { s.id == owner.shopId });
    };
  };

  // --- Shop status ---

  public func updateShopStatus(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    caller : Principal,
    isOpen : Bool,
  ) : Bool {
    switch (owners.find(func(o) { o.principal_ == caller })) {
      case null false;
      case (?owner) {
        shops.mapInPlace(func(s) {
          if (s.id == owner.shopId) { { s with isOpen } } else s
        });
        true;
      };
    };
  };

  public func updateShopHours(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    caller : Principal,
    openingTime : Text,
    closingTime : Text,
  ) : Bool {
    switch (owners.find(func(o) { o.principal_ == caller })) {
      case null false;
      case (?owner) {
        shops.mapInPlace(func(s) {
          if (s.id == owner.shopId) { { s with openingTime; closingTime } } else s
        });
        true;
      };
    };
  };

  public func extendShopHours(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    caller : Principal,
    newClosingTime : Text,
  ) : Bool {
    switch (owners.find(func(o) { o.principal_ == caller })) {
      case null false;
      case (?owner) {
        shops.mapInPlace(func(s) {
          if (s.id == owner.shopId) { { s with closingTime = newClosingTime } } else s
        });
        true;
      };
    };
  };

  // --- Reviews ---

  public func addReview(
    reviews : List.List<Types.Review>,
    shops : List.List<Types.Shop>,
    state : { var nextReviewId : Nat },
    caller : Principal,
    input : Types.ReviewInput,
  ) : Types.Review {
    let id = state.nextReviewId;
    state.nextReviewId += 1;
    let review : Types.Review = {
      id;
      shopId = input.shopId;
      userId = caller;
      stars = input.stars;
      comment = input.comment;
      createdAt = Time.now();
    };
    reviews.add(review);
    // Recalculate shop rating
    let shopReviews = reviews.filter(func(r) { r.shopId == input.shopId });
    let count = shopReviews.size();
    var total : Nat = 0;
    shopReviews.forEach(func(r) { total += r.stars });
    let newRating : Float = if (count == 0) 0.0 else total.toFloat() / count.toFloat();
    shops.mapInPlace(func(s) {
      if (s.id == input.shopId) { { s with rating = newRating; reviewCount = count } } else s
    });
    review;
  };

  public func getReviews(
    reviews : List.List<Types.Review>,
    shopId : Nat,
  ) : [Types.Review] {
    reviews.filter(func(r) { r.shopId == shopId }).toArray();
  };

  // --- Favorites ---

  public func toggleFavorite(
    favorites : List.List<Types.Favorite>,
    caller : Principal,
    shopId : Nat,
  ) : Bool {
    let existing = favorites.findIndex(func(f) { f.userId == caller and f.shopId == shopId });
    switch (existing) {
      case (?idx) {
        let arr = favorites.toArray();
        favorites.clear();
        for (i in arr.keys()) {
          if (i != idx) favorites.add(arr[i]);
        };
        false;
      };
      case null {
        favorites.add({ userId = caller; shopId });
        true;
      };
    };
  };

  public func getFavorites(
    favorites : List.List<Types.Favorite>,
    shops : List.List<Types.Shop>,
    caller : Principal,
  ) : [Types.Shop] {
    let userFavs = favorites.filter(func(f) { f.userId == caller });
    let result = List.empty<Types.Shop>();
    userFavs.forEach(func(f) {
      switch (shops.find(func(s) { s.id == f.shopId })) {
        case (?shop) result.add(shop);
        case null {};
      };
    });
    result.toArray();
  };

  // --- Sample data ---

  public func seedSampleData(
    shops : List.List<Types.Shop>,
    owners : List.List<Types.OwnerProfile>,
    state : { var nextShopId : Nat },
  ) {
    if (shops.size() > 0) return; // idempotent

    let now = Time.now();
    let dummyPrincipal = Principal.fromText("aaaaa-aa");

    type SeedRow = (
      Text,
      Types.ShopCategory,
      Text,
      Text,
      [Text],
      Text,
      Text,
      Float,
      Float,
      Float,
      Nat,
      [Text],
      ?Text,
    );

    let samples : [SeedRow] = [
      (
        "Murugan Idli Shop",
        #StreetFood,
        "17, Anna Salai, Saidapet, Chennai - 600015",
        "+91 98401 12345",
        ["shop-1-photo-1", "shop-1-photo-2"],
        "06:00",
        "22:00",
        13.0118,
        80.2130,
        4.7,
        312,
        ["Buy 2 idli plates get 1 free on weekends", "Combo breakfast for Rs.60 (4 idlis + chutney + sambar)"],
        null,
      ),
      (
        "Fresh Squeeze Juice Bar",
        #JuiceShop,
        "42, T. Nagar, Chennai - 600017",
        "+91 98402 23456",
        ["shop-2-photo-1", "shop-2-photo-2"],
        "08:00",
        "20:00",
        13.0418,
        80.2341,
        4.3,
        178,
        ["10% off on orders above Rs.200", "Free watermelon juice with any combo"],
        ?"freshsqueeze_chennai",
      ),
      (
        "Annamalai Bakery",
        #Bakery,
        "8, Pondy Bazaar, T. Nagar, Chennai - 600017",
        "+91 98403 34567",
        ["shop-3-photo-1", "shop-3-photo-2"],
        "07:00",
        "21:00",
        13.0400,
        80.2329,
        4.5,
        245,
        ["Buy 6 buns get 1 free", "Birthday cake 10% discount on pre-orders"],
        ?"annamalai_bakery",
      ),
      (
        "Saravana Bhavan",
        #Restaurant,
        "21, Nelson Manickam Road, Aminjikarai, Chennai - 600029",
        "+91 98404 45678",
        ["shop-4-photo-1", "shop-4-photo-2", "shop-4-photo-3"],
        "07:00",
        "23:00",
        13.0800,
        80.2290,
        4.8,
        520,
        ["Thali meal at Rs.149 - unlimited refills", "Family pack: 4 meals for Rs.499"],
        ?"saravanabhavan_official",
      ),
      (
        "Filter Coffee Corner",
        #Cafe,
        "3, Mylapore, Chennai - 600004",
        "+91 98405 56789",
        ["shop-5-photo-1", "shop-5-photo-2"],
        "06:00",
        "22:00",
        13.0330,
        80.2690,
        4.6,
        389,
        ["Third coffee free on Monday mornings", "Cold brew combo with snack at Rs.99"],
        null,
      ),
      (
        "Sundari Chaat",
        #SnackShop,
        "56, Velachery Main Road, Velachery, Chennai - 600042",
        "+91 98406 67890",
        ["shop-6-photo-1", "shop-6-photo-2"],
        "15:00",
        "22:00",
        12.9790,
        80.2200,
        4.2,
        156,
        ["Buy 2 pani puri plates get 1 free", "Evening snack combo for Rs.79"],
        ?"sundari_chaat",
      ),
      (
        "Royal Fruit Juice",
        #JuiceShop,
        "11, Anna Nagar East, Chennai - 600102",
        "+91 98407 78901",
        ["shop-7-photo-1", "shop-7-photo-2"],
        "09:00",
        "21:00",
        13.0850,
        80.2100,
        3.9,
        98,
        ["Large juice at price of medium till 6 PM", "Loyalty card: 10th juice free"],
        ?"royalfruit_juice",
      ),
      (
        "Morning Tiffin House",
        #StreetFood,
        "27, Tambaram West, Chennai - 600045",
        "+91 98408 89012",
        ["shop-8-photo-1", "shop-8-photo-2"],
        "05:00",
        "11:00",
        12.9249,
        80.1000,
        4.4,
        203,
        ["Early bird special: dosa + filter coffee for Rs.50 before 7 AM", "Pack of 10 idlis for Rs.90"],
        null,
      ),
    ];

    for ((name, category, address, phone, photoKeys, openingTime, closingTime, lat, lon, rating, reviewCount, offers, instagramId) in samples.values()) {
      let id = state.nextShopId;
      state.nextShopId += 1;
      let shop : Types.Shop = {
        id;
        name;
        category;
        address;
        phone;
        instagramId;
        photoKeys;
        openingTime;
        closingTime;
        latitude = lat;
        longitude = lon;
        ownerId = dummyPrincipal;
        isOpen = true;
        rating;
        reviewCount;
        offers;
        createdAt = now;
      };
      shops.add(shop);
    };
  };
}
