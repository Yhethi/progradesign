import React from "react";

export const EasyAndFastSteps = ({ img, title, color }) => {
  return (
    <div className="easyAndFast__steps__card">
      <div className="easyAndFast__steps__card__img">
        <div
          className="easyAndFast__steps__card__img--background"
          style={{ background: color }}
        >
          <img src={img} alt={img} />
        </div>
      </div>
      <div className="easyAndFast__steps__card__text">
        <div className="easyAndFast___steps__card__title">{title}</div>
        <div className="easyAndFast___steps__card__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
          dolore temporibus amet.
        </div>
      </div>
    </div>
  );
};
