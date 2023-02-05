import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import play from "../../assets/images/icon-play.svg";
import "./Details.scss";
import { Meaning } from "../meaning/Meaning";

export const Details = () => {
  const {
    theme: { dark, value },
    search: { data },
  } = useAppSelector((state: RootState) => state);
  const { word, phonetic, phonetics, meanings } = data[0];
  const { audio } = phonetics[0];
  const { definitions } = meanings[0];
  const newAudio = new Audio(audio);

  return (
    <div className="details-container">
      <div className="details-top-inner-container">
        <div className="details-top-inner-container-left">
          <h1
            className={`details-top-inner-container-left-title ${value} ${
              dark ? "dark" : ""
            }`}
          >
            {word}
          </h1>
          <h3 className={`details-top-inner-container-left-subtitle ${value}`}>
            {phonetic}
          </h3>
        </div>
        <div className="details-top-inner-container-right">
          <img
            src={play}
            onClick={() => newAudio.play()}
            alt="play"
            className="img-play"
          />
        </div>
      </div>
      <div className="details-middle-inner-container">
        <div className="details-middle-inner-container-top"> // this will be on the meaning component 
          <span
            className={`details-middle-inner-container-top-title ${value} ${
              dark ? "dark" : ""
            }`}
          >
            noun 
          </span>
          <div className="details-middle-inner-container-top-line"></div>
        </div>
        {/* <div className="details-middle-inner-container-bottom">
          <span
            className={`details-middle-inner-container-bottom-title ${value}`}
          >
            Meaning
          </span>
          <div className="details-middle-inner-container-bottom-list">
            <div className="details-middle-inner-container-bottom-list-inner">
              {definitions?.map((item: any) => (
                <div
                  key={item.definition}
                  className="details-middle-inner-container-bottom-list-inner-wrapper"
                >
                  <div className="details-middle-inner-container-bottom-list-inner-wrapper-circle">
                    <div className="details-middle-inner-container-bottom-list-inner-wrapper-circle-inner"></div>
                  </div>
                  <span
                    className={`details-middle-inner-container-bottom-list-inner-wrapper-item ${value} ${
                      dark ? "dark" : ""
                    }`}
                  >
                    {item.definition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        <Meaning definitions={definitions} />
      </div>

      <div className="details-mid-bottom-inner-container">
        <div className="details-mid-bottom-inner-container-top">
          <span className="details-mid-bottom-inner-container-title"></span>
          <span className="details-mid-bottom-inner-container-subtitle"></span>
        </div>
        <div className="details-mid-bottom-inner-container-bottom"></div>
      </div>
      <div className="details-bottom-inner-container"></div>
    </div>
  );
};
