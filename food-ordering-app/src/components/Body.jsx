import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import useRestaurants from "../hooks/useRestaurants";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Poster from "./Poster";

const Body = () => {
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();

  console.log(listOfRestaurants);

  const isOnline = useOnlineStatus();

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-10">
      <div className="px-4 sm:px-8 md:px-16 flex flex-col gap-7">
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <SearchBar
            listOfRestaurants={listOfRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />

          <FilterBtn
            listOfRestaurants={listOfRestaurants}
            setFilteredRestaurants={setFilteredRestaurants}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center sm:justify-items-start">
          {filteredRestaurants.map((restaurant) => {
            const resId = restaurant?.card?.card?.info?.id;
            const promoted = restaurant?.card?.card?.info?.promoted;
            return (
              // 2. Wrap it in a Link! (Put the 'key' on the Link tag)
              <Link key={resId} to={"/restaurant/" + resId} className="w-full">
                {promoted ? (
                  <PromotedRestaurantCard resData={restaurant}  />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
      <Poster />
    </div>
  );
};
export default Body;
