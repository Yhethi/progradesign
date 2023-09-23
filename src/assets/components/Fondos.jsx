import React from "react";
import "./fondos.css";
import leftUp from "../img/leftUp.png";
import girl from "../img/girl.png";

export const Fondos = () => {
  return (
    <div className="fondos">
      <div className="leftUp">
        <img id="leftUp" src={leftUp} alt={leftUp} />
      </div>
      <div className="girl">
        <img id="girl" src={girl} alt={girl} />
      </div>
    </div>
  );
};
