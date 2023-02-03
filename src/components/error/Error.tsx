import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./Error.scss";

export const Error = () => {
  const { dark, value } = useTheme();
  return (
    <div className="error-container">
      <span className="error-icon">😕</span>
      <h1 className={`error-header ${value} ${dark ? "dark" : ""}`}>
        No Definitions Found
      </h1>
      <h3 className={`error-subtitle ${value}`}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </h3>
    </div>
  );
};
