import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import "./Meaning.scss";

export const Meaning = ({ definitions, header, synonyms }: any) => {
  const {
    theme: { dark, value },
  } = useAppSelector((state: RootState) => state);

  return (
    <div className="meaning-container">
      <div className="meaning-container-top">
        <span
          className={`meaning-container-top-title ${value} ${
            dark ? "dark" : ""
          }`}
        >
          {header}
        </span>
        <div
          className={`meaning-container-top-line ${dark ? "dark" : ""}`}
        ></div>
      </div>
      <div className="meaning-container-bottom">
        <span className={`meaning-container-bottom-title ${value}`}>
          Meaning
        </span>
        <div className="meaning-container-bottom-list">
          <div className="meaning-container-bottom-list-inner">
            {definitions?.map((item: any) => (
              <div
                key={item.definition}
                className="meaning-container-bottom-list-inner-wrapper"
              >
                <div className="meaning-container-bottom-list-inner-wrapper-circle">
                  <div className="meaning-container-bottom-list-inner-wrapper-circle-inner"></div>
                </div>
                <span
                  className={`meaning-container-bottom-list-inner-wrapper-item ${value} ${
                    dark ? "dark" : ""
                  }`}
                >
                  {item.definition}
                </span>
              </div>
            ))}
            {definitions.map(
              (item: any) =>
                item.example !== undefined && (
                  <span
                    key={item.example}
                    className={`meaning-container-bottom-list-inner-example ${value}`}
                  >{`"${item.example}"`}</span>
                )
            )}
          </div>
        </div>
      </div>
      {synonyms.length !== 0 && (
        <div className="meaning-container-synonyms">
          <span className={`meaning-container-synonyms-header ${value}`}>
            Synonyms
          </span>
          {synonyms.map((item: any, index: number) => (
            <span
              key={index}
              className={`meaning-container-synonyms-item ${value}`}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
