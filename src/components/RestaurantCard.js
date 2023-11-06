import React from "react";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  return (
    <div>
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img
          className="card-img"
          src={IMG_URL + resData.info.cloudinaryImageId}
          alt="meghna-image"
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <p>{resData.info.avgRating} star</p>
        <p>{resData.info.sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
