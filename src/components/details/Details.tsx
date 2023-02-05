import React, { useMemo } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import play from "../../assets/images/icon-play.svg";
import url from "../../assets/images/icon-new-window.svg";
import "./Details.scss";
import { Meaning } from "../meaning/Meaning";

export const Details = () => {
  const {
    theme: { dark, value },
    search: { data },
  } = useAppSelector((state: RootState) => state);
  const { word, phonetic, phonetics, meanings, sourceUrls } = data[0];
  const audio = useMemo(
    () => phonetics.filter((item: any) => item.audio !== ""),
    [data]
  );
  const newAudio = new Audio(audio[0].audio);

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
      {meanings.map((item: any, index: any) => (
        <Meaning
          key={index}
          header={item.partOfSpeech}
          definitions={item.definitions}
          synonyms={item.synonyms}
        />
      ))}
      <div className="details-bottom-inner-container">
        <div
          className={`details-bottom-inner-container-line ${
            dark ? "dark" : ""
          }`}
        ></div>
        <span className={`details-bottom-inner-container-header ${value}`}>
          Source
        </span>
        {sourceUrls.map((item: any) => (
          <div
            key={item}
            className="details-bottom-inner-container-link-container"
          >
            <a
              href={item}
              target="_blank"
              className={`details-bottom-inner-container-link-container-link ${value} ${
                dark ? "dark" : ""
              }`}
            >
              {item}
            </a>
            <img
              src={url}
              alt="url"
              className="details-bottom-inner-container-link-container-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
