import List "mo:core/List";
import ShopsTypes "types/shops";
import ShopsApiMixin "mixins/shops-api";

actor {
  let shops = List.empty<ShopsTypes.Shop>();
  let reviews = List.empty<ShopsTypes.Review>();
  let favorites = List.empty<ShopsTypes.Favorite>();
  let owners = List.empty<ShopsTypes.OwnerProfile>();
  let state = { var nextShopId : Nat = 1; var nextReviewId : Nat = 1; var seeded : Bool = false };

  include ShopsApiMixin(shops, reviews, favorites, owners, state);
};
