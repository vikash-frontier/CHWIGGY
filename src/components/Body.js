import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
const Body = () => {
  const [data, setData] = useState(resObj);

  const onClickHandle = () => {
    const filtedData = resObj.filter((item) => item.info.avgRating >= 4.5);
    setData(filtedData);
  };

  return (
    <div className="body-container">
      <button className="btn" onClick={onClickHandle}>
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {data.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
