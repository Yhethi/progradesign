import React from "react";
import "./topSelling.css";
import city1 from "../img/city1.png";
import city2 from "../img/city2.png";
import city3 from "../img/city3.png";
import { TopSellingCard } from "./TopSellingCard";

export const TopSelling = () => {
  return (
    <div className="global__topSelling">
      <div className="topSelling__title">
        <h3>Top Selling</h3>
        <h1>Top Destinations</h1>
      </div>
      <div className="topSelling__flexCards">
        <TopSellingCard
          img={city1}
          title={"Rome, Italy"}
          amount={"55.42k"}
          days={"10"}
        />
        <TopSellingCard
          img={city2}
          title={"London, UK"}
          amount={"4.2k"}
          days={"12"}
        />
        <TopSellingCard
          img={city3}
          title={"Full Europe"}
          amount={"15k"}
          days={"28"}
        />
      </div>
    </div>
  );
};
