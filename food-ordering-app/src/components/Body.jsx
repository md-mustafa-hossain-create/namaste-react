import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import SearchBar from "./SearchBar";

const Body = () => {
  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurants();
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 sm:px-8 md:px-16 pt-24 flex flex-col gap-7">
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
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
