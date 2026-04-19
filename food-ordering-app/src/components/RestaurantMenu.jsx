import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRatingString, city } =
    restaurantMenu?.cards?.[2]?.card?.card?.info || {};

  const category =
    restaurantMenu?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

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

      <div className="max-w-[800px] mx-auto p-4">
        {category.map((cat, index) => (
          <RestaurantCategory
            key={cat?.card?.card?.title || cat?.card?.card?.categoryId}
            data={cat?.card?.card}
            showItems={openIndex === index}
            setOpenIndex={() =>
              openIndex === index ? setOpenIndex(null) : setOpenIndex(index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
