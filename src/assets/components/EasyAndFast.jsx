import React from "react";
import "./easyAndFast.css";
import step1 from "../img/step1.png";
import step2 from "../img/step2.png";
import step3 from "../img/step3.png";
import girl2 from "../img/girl2.png";
import temple from "../img/temple.png";
import { EasyAndFastSteps } from "./EasyAndFastSteps";
import { PiLeafFill } from "react-icons/pi";
import { BsMap } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { BsBuildingsFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export const EasyAndFast = () => {
  return (
    <div className="global__easyAndFast">
      <div className="easyAndFast__left">
        <div className="easyAndFast__title">
          <h3>Easy and Fast</h3>
          <h1>Book Your Next Trip In 3 Easy Steps</h1>
        </div>
        <div className="easyAndFast__steps">
          <EasyAndFastSteps
            img={step1}
            title={"Choose Destination"}
            color={"#F0BB1F"}
          />
          <EasyAndFastSteps
            img={step2}
            title={"Make Payment"}
            color={"#F15A2B"}
          />
          <EasyAndFastSteps
            img={step3}
            title={"Reach Airport on Selected Date"}
            color={"#006380"}
          />
        </div>
      </div>
      <div className="easyAndFast__right">
        <div className="easyAndFast__right__card">
          <div className="easyAndFast__right__card__img">
            <img src={girl2} alt={girl2} />
          </div>
          <div className="easyAndFast__right__card__text">
            <div className="easyAndFast__right__card__text__title">
              <p>Trip To Greece</p>
            </div>
            <div className="easyAndFast__right__card__text__date">
              <p>14-29 June | by Robbin Jole</p>
            </div>
            <div className="easyAndFast__right__card__text__icons">
              <div className="easyAndFast__right__card__text__icons__circle">
                <PiLeafFill />
              </div>
              <div className="easyAndFast__right__card__text__icons__circle">
                <BsMap />
              </div>
              <div className="easyAndFast__right__card__text__icons__circle">
                <IoIosSend />
              </div>
            </div>
            <div className="easyAndFast__right__card__text__peopleNumber">
              <BsBuildingsFill /> <p>24 people going</p>
              <div className="easyAndFast__right__card__text__peopleNumber__container">
                <div className="easyAndFast__right__card__text__peopleNumber__container__circleFavorite">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
            <div className="easyAndFast__right__card__text__miniCard">
              <div className="easyAndFast__right__card__text__miniCard__img">
                <img src={temple} alt={temple} />
              </div>
              <div className="easyAndFast__right__card__text__miniCard__info">
                <p className="easyAndFast__right__card__text__miniCard__info--gray">Orgoing</p>
                <h3>Trip To Rome</h3>
                <div className="easyAndFast__right__card__text__miniCard__info__porcentage">
                  <p className="easyAndFast__right__card__text__miniCard__info__porcentage--gray">40%</p>
                  <p>Completed</p>
                </div>
                <div className="easyAndFast__right__card__text__miniCard__info__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
