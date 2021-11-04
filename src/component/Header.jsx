import React from "react";
import "../assets/Header.scss";
import ist from "../assets/ist.png";

function Header() {
  return (
    <div>
      <div className="header__logo">
        <img src={ist} alt="ist-logo" />
        <h1>Donasi</h1>
      </div>
    </div>
  );
}

export default Header;
