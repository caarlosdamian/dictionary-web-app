import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Toggle } from "../toogle/Toggle";
import { Select } from "../select/Select";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "./Header.scss";

export const Header = () => {
  const { dark } = useAppSelector((state: RootState) => state.theme);

  return (
    <header className={`header-container ${dark && "dark"}`}>
      <img src={Logo} alt="logo" className="header-logo-img" />
      <div className="right-container">
        <Select />
        <div className="divider-line"></div>
        <Toggle />
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
      </div>
    </header>
  );
};
