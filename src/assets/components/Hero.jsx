import React from "react";
import "./hero.css";
import redLine from "../img/redLine.png";
import { AiFillCaretRight } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero__global">
      <div className="left">
        <h3>BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>
          Travel, enjoy <img id="redLine" src={redLine} alt={redLine} /> and
          live a new and full life
        </h1>
        <p>
          Buil: Wicket longer adminre do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening. Park gate sell they
          west hard for the.
        </p>
        <div className="buttons">
          <button id="findB">Find out more</button>
          <button id="playD">
            <div className="redCircle">
              <AiFillCaretRight />
            </div>
            <p>Play Demo</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
