import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRatingString, city } =
    restaurantMenu?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    restaurantMenu?.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards[1].card
      .card || {};

  return (
    <div className="menu-container">
      {/* Restaurant Header */}
      <div className="max-w-[800px] mx-auto p-4 md:p-8 mt-10 mb-6 border-b border-gray-100">
        <h1 className="text-3xl font-black text-swiggy-dark tracking-tight">
          {name || "Restaurant Name"}
        </h1>
        <p className="text-swiggy-text-muted font-medium text-sm mt-1 italic">
          {cuisines?.join(",")} • {avgRatingString} • {city}
        </p>
      </div>

      <ul className="max-w-[800px] mx-auto p-4">
        {itemCards.map((item) => (
          <MenuItem key={item?.card?.info?.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
