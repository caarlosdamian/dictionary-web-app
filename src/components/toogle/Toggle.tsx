import React, { useState } from "react";
import "./Toggle.scss";

export const Toggle = () => {
  const [active, setActive] = useState(false); // this will be in redux
  return (
    <div
      className={`toggle-container ${active ? "active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <div className="toggle-circle"></div>
    </div>
  );
};
