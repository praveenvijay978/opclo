import List "mo:core/List";
import Types "../types/shops";
import ShopLib "../lib/shops";

mixin (
  shops : List.List<Types.Shop>,
  reviews : List.List<Types.Review>,
  favorites : List.List<Types.Favorite>,
  owners : List.List<Types.OwnerProfile>,
  state : { var nextShopId : Nat; var nextReviewId : Nat; var seeded : Bool },
) {
  // Seed sample data on first use
  private func ensureSeeded() {
    if (not state.seeded) {
      ShopLib.seedSampleData(shops, owners, state);
      state.seeded := true;
    };
  };

  // --- Public shop queries ---

  public query func getAllShops() : async [Types.Shop] {
    ShopLib.getAllShops(shops);
  };

  public query func getShopsByCategory(category : Types.ShopCategory) : async [Types.Shop] {
    ShopLib.getShopsByCategory(shops, category);
  };

  public query func getShopById(id : Nat) : async ?Types.Shop {
    ShopLib.getShopById(shops, id);
  };

  public query func searchShops(searchTerm : Text) : async [Types.Shop] {
    ShopLib.searchShops(shops, searchTerm);
  };

  // --- Owner shop management ---

  public shared ({ caller }) func registerShop(input : Types.ShopInput) : async Types.Shop {
    ensureSeeded();
    ShopLib.registerShop(shops, owners, state, caller, input);
  };

  public shared ({ caller }) func updateShopStatus(isOpen : Bool) : async Bool {
    ShopLib.updateShopStatus(shops, owners, caller, isOpen);
  };

  public shared ({ caller }) func updateShopHours(
    openingTime : Text,
    closingTime : Text,
  ) : async Bool {
    ShopLib.updateShopHours(shops, owners, caller, openingTime, closingTime);
  };

  public shared ({ caller }) func extendShopHours(newClosingTime : Text) : async Bool {
    ShopLib.extendShopHours(shops, owners, caller, newClosingTime);
  };

  public query ({ caller }) func getOwnerShop() : async ?Types.Shop {
    ShopLib.getOwnerShop(shops, owners, caller);
  };

  // --- Reviews ---

  public shared ({ caller }) func addReview(input : Types.ReviewInput) : async Types.Review {
    ShopLib.addReview(reviews, shops, state, caller, input);
  };

  public query func getReviews(shopId : Nat) : async [Types.Review] {
    ShopLib.getReviews(reviews, shopId);
  };

  // --- Favorites ---

  public shared ({ caller }) func toggleFavorite(shopId : Nat) : async Bool {
    ShopLib.toggleFavorite(favorites, caller, shopId);
  };

  public query ({ caller }) func getFavorites() : async [Types.Shop] {
    ShopLib.getFavorites(favorites, shops, caller);
  };

  // --- Init seed ---

  public shared func initSeed() : async () {
    ensureSeeded();
  };
}
