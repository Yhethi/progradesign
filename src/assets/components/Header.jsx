import React, { useEffect, useState } from "react";
import "./header.css";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  window.addEventListener("resize", ({ target }) => {
    console.log(window.innerWidth);
    const menu = document.querySelector(".menu");

    if (window.innerWidth <= 1200) {
      setIsMobile(true);
      menu.style.transform = "translateX(200px)";
      menu.style.scale = "0";
    } else {
      setIsMobile(false);
      menu.style.transform = "translateX(0px)";
      menu.style.scale = "1";
    }
  });

  const showMenu = () => {
    const menu = document.querySelector(".menu");
    if (!menuShow) {
      menu.style.transform = "translateX(0px)";
      menu.style.scale = "1";
      setMenuShow(true);
    } else {
      menu.style.transform = "translateX(200px)";
      menu.style.scale = "0";
      setMenuShow(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <p>Jadoo</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#desitnations">Desitnations</a>
          </li>
          <li>
            <a href="#hotels">Hotels</a>
          </li>
          <li>
            <a href="#flights">Flights</a>
          </li>
          <li>
            <a href="#bookings">Bookings</a>
          </li>
          {isMobile && (
            <>
              <li>
                <a id="loginMobile" href="#login">
                  Login
                </a>
              </li>
              <li>
                <a id="signUpMobile" href="#login">
                  Sign Up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="sign">
        <a id="login" href="#login">
          Login
        </a>
        <a id="signUp" href="#login">
          Sign Up
        </a>
        <p>
          EN <MdKeyboardArrowDown />
        </p>
      </div>
      {isMobile && (
        <>
          <div className="menuMobile" onClick={showMenu}>
            <MdKeyboardArrowDown onClick={showMenu} />
          </div>
        </>
      )}
    </div>
  );
};
