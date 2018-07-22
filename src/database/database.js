// Los Angeles
import inLosAngeles from "./losAngeles/losAngeles";
import inGeneralInformationLosAngeles from "./losAngeles/text/inLosAngeles/generalInformationLosAngeles/inGeneralInformationLosAngeles";
import inWhenToComeLosAngeles from "./losAngeles/text/inLosAngeles/whenToComeLosAngeles/inWhenToComeLosAngeles";
import inAttractionsCloseByLosAngeles from "./losAngeles/text/inLosAngeles/attractionsCloseByLosAngeles/inAttractionsCloseByLosAngeles";
import inAttractionsFartherAwayLosAngeles from "./losAngeles/text/inLosAngeles/attractionsFartherAwayLosAngeles/inAttractionsFartherAwayLosAngeles";
import inDangersAndAnnoyancesLosAngeles from "./losAngeles/text/inLosAngeles/dangersAndAnnoyancesLosAngeles/inDangersAndAnnoyancesLosAngeles";
import inDrinksAndEntertainmentLosAngeles from "./losAngeles/text/inLosAngeles/drinksAndEntertainmentLosAngeles/inDrinksAndEntertainmentLosAngeles";
import inGettingArroundLosAngeles from "./losAngeles/text/inLosAngeles/gettingArroundLosAngeles/inGettingArroundLosAngeles";
import inHowToGetHereLosAngeles from "./losAngeles/text/inLosAngeles/howToGetHereLosAngeles/inHowToGetHereLosAngeles";
import inRestaurantsLosAngeles from "./losAngeles/text/inLosAngeles/restaurantsLosAngeles/inRestaurantsLosAngeles";
import inShoppingLosAngeles from "./losAngeles/text/inLosAngeles/shoppingLosAngeles/inShoppingLosAngeles";
import inThingsToDoLosAngeles from "./losAngeles/text/inLosAngeles/thingsToDoLosAngeles/inThingsToDoLosAngeles";
import inWhereToStayLosAngeles from "./losAngeles/text/inLosAngeles/whereToStayLosAngeles/inWhereToStayLosAngeles";
// San Francisco
import inSanFrancisco from "./sanFrancisco/sanFrancisco";
import inGeneralInformationSanFrancisco from "./sanFrancisco/text/inSanFrancisco/generalInformationSanFrancisco/inGeneralInformationSanFrancisco";
import inWhenToComeSanFrancisco from "./sanFrancisco/text/inSanFrancisco/whenToComeSanFrancisco/inWhenToComeSanFrancisco";
import inAttractionsCloseBySanFrancisco from "./sanFrancisco/text/inSanFrancisco/attractionsCloseBySanFrancisco/inAttractionsCloseBySanFrancisco";
import inAttractionsFartherAwaySanFrancisco from "./sanFrancisco/text/inSanFrancisco/attractionsFartherAwaySanFrancisco/inAttractionsFartherAwaySanFrancisco";
import inDangersAndAnnoyancesSanFrancisco from "./sanFrancisco/text/inSanFrancisco/dangersAndAnnoyancesSanFrancisco/inDangersAndAnnoyancesSanFrancisco";
import inDrinksAndEntertainmentSanFrancisco from "./sanFrancisco/text/inSanFrancisco/drinksAndEntertainmentSanFrancisco/inDrinksAndEntertainmentSanFrancisco";
import inGettingArroundSanFrancisco from "./sanFrancisco/text/inSanFrancisco/gettingArroundSanFrancisco/inGettingArroundSanFrancisco";
import inHowToGetHereSanFrancisco from "./sanFrancisco/text/inSanFrancisco/howToGetHereSanFrancisco/inHowToGetHereSanFrancisco";
import inRestaurantsSanFrancisco from "./sanFrancisco/text/inSanFrancisco/restaurantsSanFrancisco/inRestaurantsSanFrancisco";
import inShoppingSanFrancisco from "./sanFrancisco/text/inSanFrancisco/shoppingSanFrancisco/inShoppingSanFrancisco";
import inThingsToDoSanFrancisco from "./sanFrancisco/text/inSanFrancisco/thingsToDoSanFrancisco/inThingsToDoSanFrancisco";
import inWhereToStaySanFrancisco from "./sanFrancisco/text/inSanFrancisco/whereToStaySanFrancisco/inWhereToStaySanFrancisco";

const level1 = {
  "Los Angeles": inLosAngeles,
  "San Francisco": inSanFrancisco
};

const inner = [
  // Los Angeles
  inGeneralInformationLosAngeles,
  inWhenToComeLosAngeles,
  inAttractionsFartherAwayLosAngeles,
  inDangersAndAnnoyancesLosAngeles,
  inDrinksAndEntertainmentLosAngeles,
  inGettingArroundLosAngeles,
  inHowToGetHereLosAngeles,
  inRestaurantsLosAngeles,
  inShoppingLosAngeles,
  inThingsToDoLosAngeles,
  inWhereToStayLosAngeles,
  inAttractionsCloseByLosAngeles,
  // San Francisco
  inGeneralInformationSanFrancisco,
  inWhenToComeSanFrancisco,
  inAttractionsFartherAwaySanFrancisco,
  inDangersAndAnnoyancesSanFrancisco,
  inDrinksAndEntertainmentSanFrancisco,
  inGettingArroundSanFrancisco,
  inHowToGetHereSanFrancisco,
  inRestaurantsSanFrancisco,
  inShoppingSanFrancisco,
  inThingsToDoSanFrancisco,
  inWhereToStaySanFrancisco,
  inAttractionsCloseBySanFrancisco
];

export { level1, inner };
