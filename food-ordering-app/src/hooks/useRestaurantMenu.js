import { useEffect, useState } from "react";
import axios from "axios";

import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  useEffect(() => {
    fetchData();
  }, [resId]);

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        MENU_API +
          resId +
          "&catalog_qa=undefined&query=Pizza&submitAction=ENTER",
      );

      setRestaurantMenu(response?.data?.data);
    } catch (error) {}
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
