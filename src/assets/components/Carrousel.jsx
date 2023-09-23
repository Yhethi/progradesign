import React, { useEffect, useState } from "react";
import "./carrousel.css";

import emp1 from "../img/emp1.png";
import emp2 from "../img/emp2.png";
import emp3 from "../img/emp3.png";
import emp4 from "../img/emp4.png";
import emp5 from "../img/emp5.png";

const items = [
  {
    src: emp1,
    goTo: "https://www.google.com",
  },
  {
    src: emp2,
    goTo: "https://www.google.com",
  },
  {
    src: emp3,
    goTo: "https://www.google.com",
  },
  {
    src: emp4,
    goTo: "https://www.google.com",
  },
  {
    src: emp5,
    goTo: "https://www.google.com",
  },
];

export const Carrousel = () => {
  const [cards, setCards] = useState([...items, ...items, ...items]);
  useEffect(() => {
    const carrousel__card = document.querySelectorAll(".carrousel__card");
    const translationsWidth = items.length * 220; //(220) 200:Width card + 20:gap
    const time = 20;
    carrousel__card.forEach((item) => {
      item.style.transform = `translateX(-${translationsWidth}px)`;
      item.style.animation = `moveCards ${time}s linear infinite`;
    });
  }, []);

  const goTo = (key) => {
    const url = cards[key].goTo;
    window.open(url, "_blank");
  };

  return (
    <div className="global__carrousel">
      <div className="carrousel">
        {cards.map((item, key) => {
          return (
            <div key={key} className="carrousel__card">
              <img
                src={item.src}
                alt={item.src}
                onClick={() => {
                  goTo(key);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
