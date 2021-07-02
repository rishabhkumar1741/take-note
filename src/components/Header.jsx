import React from "react";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <h1>Notes</h1>
      </div>
    </>
  );
};

export default Header;
