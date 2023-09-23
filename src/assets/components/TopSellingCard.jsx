import React from "react";
import { TbLocationFilled } from "react-icons/tb";

export const TopSellingCard = ({ img, title, amount, days }) => {
  return (
    <div className="topSelling__flexCards__card">
      <div className="topSelling__flexCards__card__img">
        <img src={img} alt={img} />
      </div>
      <div className="topSelling__flexCards__card__nameAmount">
        <p>{title}</p>
        <p>$ {amount}</p>
      </div>
      <div className="topSelling__flexCards__card__days">
        <TbLocationFilled />
        <p>{days} Days Trip</p>
      </div>
    </div>
  );
};
