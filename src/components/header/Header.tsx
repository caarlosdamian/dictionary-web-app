import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Toggle } from "../toogle/Toggle";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <img src={Logo} alt="logo" className="header-logo-img" />
      <Toggle/>
    </header>
  );
};
