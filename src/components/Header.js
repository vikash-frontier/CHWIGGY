import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("Login");

  const onTextChanged = () => {
    setText(text === "Login" ? "Logout" : "Login");
  };
  console.log("Header Render");

  useEffect(() => {
    console.log("UseEffect render");
  }, [text]);

  return (
    <div className="header">
      <div className="logo">
        <h3>CHWIGGY</h3>
      </div>
      <div className="nav-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button style={{ cursor: "pointer" }} onClick={onTextChanged}>
            {text}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
