import React, { useEffect, useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button style={{ cursor: "pointer" }} onClick={onTextChanged}>
            {text}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
