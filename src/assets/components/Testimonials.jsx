import React, { useEffect, useState } from "react";
import "./testimonials.css";
import people1 from "../img/people1.png";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

export const Testimonials = () => {
  const [saveNumber, setSaveNumber] = useState(0);
  let size = window.innerWidth;

  window.addEventListener("resize", () => {
    size = window.innerWidth;
    console.log(size);
  });

  const cardsPosition = () => {
    const cards = document.querySelectorAll(".testimonials__right__card");
    size = window.innerWidth;

    if (size <= 576) {
      cards.forEach((item, key) => {
        if (key !== 0) {
          item.style.position = "absolute";
          item.style.bottom = "55px";
          item.style.left = "50px";
          item.style.lineHeight = "26px";
          item.style.background = "white";
          item.style.width = "95%";
          item.style.borderRadius = "15px";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.paddingBottom = "230px";
          item.style.zIndex = "0";
          item.style.height = "250px";
          item.style.display = "flex";
        }
      });
    } else {
      cards.forEach((item, key) => {
        if (key !== 0) {
          item.style.position = "absolute";
          item.style.bottom = "55px";
          item.style.left = "50px";
          item.style.lineHeight = "26px";
          item.style.background = "white";
          item.style.width = "498.5px";
          item.style.borderRadius = "15px";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.paddingBottom = "230px";
          item.style.zIndex = "0";
          item.style.height = "250px";
          item.style.display = "flex";
        }
      });
    }
  };

  const changeCard = ({ target }, number, type) => {
    const cards = document.querySelectorAll(".testimonials__right__card");
    const points = document.querySelectorAll(".testimonials__left__point");
    size = window.innerWidth;

    let handleNumber = number;
    if (type === "arrow") {
      if (number === 0) {
        handleNumber = saveNumber - 1;
      } else if (number === 1) {
        handleNumber = saveNumber + 1;
      }
      if (handleNumber < 0) {
        handleNumber = cards.length - 1;
      } else if (handleNumber > cards.length - 1) {
        handleNumber = 0;
      }
      setSaveNumber(handleNumber);
    } else {
      setSaveNumber(number);
    }

    points.forEach((item, key) => {
      if (key !== handleNumber) {
        item.style.background = "gray";
      } else {
        item.style.background = "purple";
      }
    });
    console.log(size);
    if (size <= 576) {
      console.log("entra");
      cards.forEach((item, key) => {
        if (key !== handleNumber) {
          item.style.position = "absolute";
          item.style.bottom = "55px";
          item.style.left = "50px";
          item.style.lineHeight = "26px";
          item.style.background = "white";
          item.style.width = "95%";
          item.style.borderRadius = "15px";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.paddingBottom = "230px";
          item.style.zIndex = "0";
          item.style.transform = "translateZ(-1000px)";
          item.style.height = "250px";
          item.style.display = "flex";
        } else {
          item.style.background = "white";
          item.style.width = "95%";
          item.style.height = "250px";
          item.style.borderRadius = "25px";
          item.style.marginTop = "0px";
          item.style.position = "absolute";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.transform = "translateZ(1000px)";
          item.style.zIndex = "1";
          item.style.left = "0px";
          item.style.bottom = "130px";
        }
      });
    } else {
      console.log("entra2");

      cards.forEach((item, key) => {
        if (key !== handleNumber) {
          item.style.position = "absolute";
          item.style.bottom = "55px";
          item.style.left = "50px";
          item.style.lineHeight = "26px";
          item.style.background = "white";
          item.style.width = "498.5px";
          item.style.borderRadius = "15px";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.paddingBottom = "230px";
          item.style.zIndex = "0";
          item.style.transform = "translateZ(-1000px)";
          item.style.height = "250px";
          item.style.display = "flex";
        } else {
          item.style.background = "white";
          item.style.width = "498.5px";
          item.style.height = "250px";
          item.style.borderRadius = "25px";
          item.style.marginTop = "0px";
          item.style.position = "absolute";
          item.style.padding = "35px";
          item.style.paddingLeft = "30px";
          item.style.paddingTop = "40px";
          item.style.transform = "translateZ(1000px)";
          item.style.zIndex = "1";
          item.style.left = "0px";
          item.style.bottom = "130px";
        }
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      cardsPosition();
    }, 100);
  }, []);

  return (
    <div className="global__testimonials">
      <div className="testimonials__left">
        <div className="testimonials__title">
          <h3>TESTIMONIALS</h3>
          <h1>What People Say About Us.</h1>
        </div>
        <div className="testimonials__left__points">
          <div
            className="testimonials__left__point"
            onClick={(e) => {
              changeCard(e, 0, "point");
            }}
          ></div>
          <div
            className="testimonials__left__point"
            onClick={(e) => {
              changeCard(e, 1, "point");
            }}
          ></div>
          <div
            className="testimonials__left__point"
            onClick={(e) => {
              changeCard(e, 2, "point");
            }}
          ></div>
        </div>
      </div>
      <div className="testimonials__right">
        <div className="testimonials__right__card">
          <div className="testimonials__right__card__img">
            <img src={people1} alt={people1} />
          </div>
          <div className="testimonials__right__card__text">
            <p>
              A. "On the Windows talking painted pasture yet itr express parties
              use. Sure last upon ha same as knew next. Of believed or diverted
              no."
            </p>
            <div className="testimonials__right__card__text__namePeople">
              <h4>Mike Taylor</h4>
              <p>Lahre, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="testimonials__right__card">
          <div className="testimonials__right__card__img">
            <img src={people1} alt={people1} />
          </div>
          <div className="testimonials__right__card__text">
            <p>
              B. "On the Windows talking painted pasture yet itr express parties
              use. Sure last upon ha same as knew next. Of believed or diverted
              no."
            </p>
            <div className="testimonials__right__card__text__namePeople">
              <h4>Chris Thomas</h4>
              <p>Lahre, Pakistan</p>
            </div>
          </div>
        </div>
        <div className="testimonials__right__card">
          <div className="testimonials__right__card__img">
            <img src={people1} alt={people1} />
          </div>
          <div className="testimonials__right__card__text">
            <p>
              C. "On the Windows talking painted pasture yet itr express parties
              use. Sure last upon ha same as knew next. Of believed or diverted
              no."
            </p>
            <div className="testimonials__right__card__text__namePeople">
              <h4>Mike Taylor</h4>
              <p>CEO of Red Button</p>
            </div>
          </div>
        </div>
        <div className="testimonials__right__arrows">
          <button
            className="testimonials__right__arrows__arrow"
            onClick={(e) => {
              changeCard(e, 0, "arrow");
            }}
          >
            <FiChevronUp />
          </button>

          <button
            className="testimonials__right__arrows__arrow"
            onClick={(e) => {
              changeCard(e, 1, "arrow");
            }}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};
