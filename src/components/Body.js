import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
const Body = () => {
  return (
    <div className="body-container">
      <button className="btn">Top Rated Restaurant</button>
      <div className="res-container">
        {resObj.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
