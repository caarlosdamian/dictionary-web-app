import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "./Meaning.scss";

export const Meaning = ({ definitions }: any) => {
  const {
    theme: { dark, value },
    search: { data },
  } = useAppSelector((state: RootState) => state);

  console.log(definitions);
  return (
    <div className="meaning">
      <span className={`meaning-title ${value}`}>Meaning</span>
      <div className="meaning-list">
        <div className="meaning-list-inner">
          {definitions?.map((item: any) => (
            <div key={item.definition} className="meaning-list-inner-wrapper">
              <div className="meaning-list-inner-wrapper-circle">
                <div className="meaning-list-inner-wrapper-circle-inner"></div>
              </div>
              <span
                className={`meaning-list-inner-wrapper-item ${value} ${
                  dark ? "dark" : ""
                }`}
              >
                {item.definition}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
