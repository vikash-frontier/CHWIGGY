import React, { ReactFragment } from "react";
import "./shimmer.css";

const Shimmer = (props) => {
  const { type } = props;
  return (
    <>
      {type === "card" && (
        <div className="card-shimmer-container">
          {[...Array(10).keys()].map((item, key) => (
            <div className="card-shimmer" key={key} />
          ))}
        </div>
      )}
    </>
  );
};

export default Shimmer;
