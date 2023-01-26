import React from "react";
import Arrow from "../../assets/images/icon-arrow-down.svg";
import "./Select.scss";

export const Select = () => {
  return (
    <div className="select-container">
      <span>Mono</span>
      <img src={Arrow} />
    </div>
  );
};
