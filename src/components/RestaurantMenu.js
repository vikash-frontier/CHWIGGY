import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { MENU_IMG_URL, MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const url = MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER";
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const data = await fetch(url);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo.length === 0) return <Shimmer type="card" />;

  console.log(resInfo);

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const res = Object.keys(
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
  ).includes("itemCards");

  const { itemCards } =
    Object.keys(
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card
    ).includes("itemCards") === true
      ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
          .card
      : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
          .card;

  console.log("Res: ", itemCards);

  return (
    <div>
      <h1>{name}</h1>

      <div>
        {itemCards?.map((item) => {
          const { id, name, price, description, imageId } = item?.card?.info;
          return (
            <div key={id}>
              <div>
                <h2>{name}</h2>
                <p>{price}</p>
                <span>{description}</span>
              </div>
              <img src={MENU_IMG_URL + imageId} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
