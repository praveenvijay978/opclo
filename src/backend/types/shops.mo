module {
  public type ShopCategory = {
    #StreetFood;
    #JuiceShop;
    #Bakery;
    #Restaurant;
    #Cafe;
    #SnackShop;
    #Other : Text;
  };

  public type Shop = {
    id : Nat;
    name : Text;
    category : ShopCategory;
    address : Text;
    phone : Text;
    instagramId : ?Text;
    photoKeys : [Text];
    openingTime : Text;
    closingTime : Text;
    latitude : Float;
    longitude : Float;
    ownerId : Principal;
    isOpen : Bool;
    rating : Float;
    reviewCount : Nat;
    offers : [Text];
    createdAt : Int;
  };

  public type ShopInput = {
    name : Text;
    category : ShopCategory;
    address : Text;
    phone : Text;
    instagramId : ?Text;
    photoKeys : [Text];
    openingTime : Text;
    closingTime : Text;
    latitude : Float;
    longitude : Float;
    offers : [Text];
  };

  public type OwnerProfile = {
    principal_ : Principal;
    shopId : Nat;
    registeredAt : Int;
  };

  public type Review = {
    id : Nat;
    shopId : Nat;
    userId : Principal;
    stars : Nat;
    comment : Text;
    createdAt : Int;
  };

  public type ReviewInput = {
    shopId : Nat;
    stars : Nat;
    comment : Text;
  };

  public type Favorite = {
    userId : Principal;
    shopId : Nat;
  };

  public type StatusNotification = {
    shopId : Nat;
    triggerType : { #Opening; #Closing };
    triggerTime : Int;
  };
}
