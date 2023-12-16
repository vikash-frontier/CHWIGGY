import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onClickHandle = () => {
    const filtedData = data.filter((item) => item?.info?.avgRating >= 4.5);
    setFilteredData(filtedData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();

    // console.log(
    //   res.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    setData(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return data?.length === 0 ? (
    <Shimmer type="card" />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {"  "}
          <button
            onClick={() => {
              const filteredSearch = data.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredData(filteredSearch);
            }}
          >
            Search
          </button>
        </div>

        <button className="btn" onClick={onClickHandle}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredData?.map((item) => (
          <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
