import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwo } =
    resInfo.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories[0].card.card);

  return (
    <div className="text-center">
      <h1 className=" font-extrabold my-8 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(" ")}</h3>
      <h3 className="font-bold text-lg">Cost for Two: {costForTwo / 100}</h3>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
