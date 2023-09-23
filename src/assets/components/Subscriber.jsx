import React from "react";
import "./subscriber.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

export const Subscriber = () => {
  return (
    <div className="global__subscriber">
      <div className="subscriber__card">
        <div className="subscriber__card__send">
          <RiSendPlaneFill />
        </div>
        <div className="subscriber__card__title">
          <h1>
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h1>
        </div>
        <div className="subscriber__card__subscribe">
          <div className="subscriber__card__subscribe__input">
            <input type="text" placeholder="Your Email" />
            <AiOutlineMail />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
