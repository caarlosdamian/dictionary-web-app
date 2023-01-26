import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Toggle } from "../toogle/Toggle";
import Moon from "../../assets/images/icon-moon.svg";
import { Select } from "../select/Select";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <img src={Logo} alt="logo" className="header-logo-img" />
      <div className="right-container">
        <Select />
        <div className="divider-line"></div>
        <Toggle />
        <img src={Moon} />
      </div>
    </header>
  );
};
