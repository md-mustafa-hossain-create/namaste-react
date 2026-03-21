import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import axios from "axios";
import Shimmer from "./Shimmer";
import FilterBtn from "./FilterBtn";
import SearchBar from "./SearchBar";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRestaurants, setListOfRestaurants] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://namastedev.com/api/v1/listRestaurants",
      );

      const restaurants =
        response?.data?.data?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
    } catch (error) {
      console.error(error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-4 sm:px-8 md:px-16 pt-24 flex flex-col gap-7">
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
        <SearchBar />

        <FilterBtn
          listOfRestaurants={listOfRestaurants}
          setListOfRestaurants={setListOfRestaurants}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center sm:justify-items-start">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
