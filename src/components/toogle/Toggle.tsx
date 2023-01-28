import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleDarkMode } from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import "./Toggle.scss";

export const Toggle = () => {
  const { dark } = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`toggle-container ${dark ? "dark" : ""}`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};
