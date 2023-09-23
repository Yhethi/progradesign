import React from "react";

export const CategoryCard = ({ img, title, paragraph }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={img} alt={img} />
      </div>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__paragraph">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
