import { useState, useEffect } from "react";
import axios from "axios";

const useRestaurants = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Stores the list of restaurants being displayed after filtering/searching

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://namastedev.com/api/v1/listRestaurants",
      );

      const restaurants =
        response?.data?.data?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
      setFilteredRestaurants(restaurants || []);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurants;
