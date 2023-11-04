import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3>CHWIGGY</h3>
      </div>
      <div className="nav-header">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="card-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"
        alt="meghna-image"
      />
      <h3>Meghana food</h3>
      <h4>Briyani, Fast Food, Asian </h4>
      <p>4.5 star</p>
      <p>30 mins</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
