import React from "react";
import "./category.css";
import antena from "../img/antena.png";
import plane from "../img/plane.png";
import microphone from "../img/microphone.png";
import wheel from "../img/wheel.png";
import { CategoryCard } from "./CategoryCard";

const Category = () => {
  return (
    <div className="global__category">
      <div className="category__title">
        <h3>CATEGORY</h3>
        <h1>We Offer Best Services</h1>
      </div>
      <div className="flexBoxes">
        <CategoryCard
          img={antena}
          title={"Calculated Weather"}
          paragraph={
            "Build wicket longer admire do borton vanity itself do in it."
          }
        />
        <CategoryCard
          img={plane}
          title={"Best Flights"}
          paragraph={
            "Engrossed listening. Park gate sell the west hard for the."
          }
        />
        <CategoryCard
          img={microphone}
          title={"Local Events"}
          paragraph={
            "Borton vanity itself do in it. Preferd to men it engrossed listening."
          }
        />
        <CategoryCard
          img={wheel}
          title={"Customization"}
          paragraph={
            "We deliver outsourced aviation services for military customers."
          }
        />
      </div>
    </div>
  );
};

export default Category;
