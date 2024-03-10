import { useEffect, useState } from "react";
import RestaurantCard, { withPromoted } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  ResCardPromoted = withPromoted(RestaurantCard);

  useEffect(() => {
    // console.log("in usefeffectbdshn");
    fetchData();
  }, []);

  const fetchData = async () => {
    // console.log("funstoin called");
    const api =
      "http://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(api);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("",listOfRestaurants);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> PLEASE CHECK ONLINE CONNECTIVITY FOR INTERNET. </h1>;
  }

  return listOfRestaurants && listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body  bg-[#faf9f4]">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant"
            className="searchBox p-2 border border-green-500 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-2 p-2 rounded-lg text-green-95"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex m-4 p-4">
          <button
            className="px-4 bg-green-100 m-2 p-2 rounded-lg text-green-95"
            onClick={() => {
              // * Filter logic
              const filteredList = listOfRestaurants?.filter(
                (res) => res.info.avgRating > 4.2
              );
              // console.log("listOfRestaurants", listOfRestaurants);
              // console.log("filtered list", filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants 💥
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <ResCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
