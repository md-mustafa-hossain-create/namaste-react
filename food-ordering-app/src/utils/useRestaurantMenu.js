import { useEffect, useState } from "react";
import axios from "axios";

const useRestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [restaurantMenu, setRestaurantMenu] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=23945&catalog_qa=undefined&query=Pizza&submitAction=ENTER",
      );

      setRestaurantMenu(response?.data?.data);
    } catch (error) {}
  };

  return restaurantMenu;
};

export default useRestaurantMenu;
