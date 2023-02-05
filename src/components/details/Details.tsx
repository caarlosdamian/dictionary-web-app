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
      {meanings.map((item: any) => (
        <Meaning
          header={item.partOfSpeech}
          definitions={item.definitions}
          synonyms={item.synonyms}
        />
      ))}

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
