import React, { useState } from "react";
import Arrow from "../../assets/images/icon-arrow-down.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSelectedStyle } from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import { styleOptions } from "../../utils";
import "./Select.scss";

export const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleSelect = (item: any) => {
    dispatch(toggleSelectedStyle({ option: item.name, value: item.value }));
  };

  const { selectedOption, value } = useAppSelector(
    (state: RootState) => state.theme
  );
  return (
    <div
      className={`select-container ${""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={`select-label ${value}`}>{selectedOption}</span>
      {isOpen && (
        <div className="select-wrapper">
          {styleOptions.map((item: any) => (
            <span
              key={item.id}
              className={`select-option ${item.value}`}
              onClick={() => handleSelect(item)}
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <img src={Arrow} />
    </div>
  );
};
