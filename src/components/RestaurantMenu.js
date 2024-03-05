import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    resInfo.data?.cards[2]?.card?.card?.info;
  const menuList =
    resInfo.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;
  console.log("Menulist", menuList[0].card.info);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" ")}</h3>
      <h3>{costForTwo}</h3>
      <h2>MENU</h2>
      <ul>
        {menuList.map((it) => (
          <li key={it.card.info.id}>{it.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
