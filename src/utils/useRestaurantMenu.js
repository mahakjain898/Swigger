import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
