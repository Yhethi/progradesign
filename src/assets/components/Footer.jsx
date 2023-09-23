import React from "react";
import "./footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import apks from "../img/apks.png";

export const Footer = () => {
  return (
    <div className="global__footer">
      <div className="footer__up">
        <div className="footer__up__logo">
          <h1>Jadoo.</h1>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="footer__up__menu">
          <h1 className="footer__up__menu__title">Company</h1>
          <div className="footer__up__menu__subMenu">
            <h2>About</h2>
            <h2>Careers</h2>
            <h2>Mobile</h2>
          </div>
        </div>
        <div className="footer__up__menu">
          <h1 className="footer__up__menu__title">Contact</h1>
          <div className="footer__up__menu__subMenu">
            <h2>Help/FAQ</h2>
            <h2>Press</h2>
            <h2>Affilates</h2>
          </div>
        </div>
        <div className="footer__up__menu">
          <h1 className="footer__up__menu__title">More</h1>
          <div className="footer__up__menu__subMenu">
            <h2>Airlinefees</h2>
            <h2>Airline</h2>
            <h2>Low fare tips</h2>
          </div>
        </div>
        <div className="footer__up__social">
          <div className="footer__up__social__up">
            <div className="footer__up__social__up__icon" id="faceboook">
              <BiLogoFacebook />
            </div>
            <div className="footer__up__social__up__icon" id="instagram">
              <BsInstagram />
            </div>
            <div className="footer__up__social__up__icon" id="twiter">
              <AiOutlineTwitter />
            </div>
          </div>
          <h3 className="footer__up__social__center">Discover our app</h3>
          <div className="footer__up__social__apks">
            <img src={apks} alt={apks} />
          </div>
          <div className="footer__up__social__down"></div>
        </div>
      </div>
      <div className="footer__down">All rights reserved@jadoo.co</div>
    </div>
  );
};
