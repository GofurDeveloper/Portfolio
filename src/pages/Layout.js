import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

import "../css/Header.css";

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("aa");
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img
            className="header__logoImg"
            src="https://avatars.mds.yandex.net/i?id=d8a6af7a5d4b480ab096765f27b52e19b0f52658-9220416-images-thumbs&n=13"
            alt="404"
          />
        </div>
        <div className="header__links">
          <Link to="/">Abaut us</Link>

          <Link to="/Features"> Features</Link>

          <Link to="/Team"> Team</Link>

          <Link to="/Services"> Services</Link>

          <Link t0="/Contact"> Contact </Link>
        </div>
        <div className="header__right">
          <Link className="action_btn">Become a deliver</Link>
        </div>
        <div className="BTN" onClick={toggleMenu}>
          {isOpen ? (
            <CgClose size="2.3rem" />
          ) : (
            <GiHamburgerMenu size="2.3rem" />
          )}
        </div>

        <div className={` ${isOpen ? "dropdown_menu" : "show_open"}  `}>
          <Link to="/" onClick={closeMenu}>
            Abaut us
          </Link>

          <Link to="/Features" onClick={closeMenu}>
            Features
          </Link>

          <Link to="/Team" onClick={closeMenu}>
            Team
          </Link>

          <Link to="/Services" onClick={closeMenu}>
            Services
          </Link>

          <Link t0="/Contact" onClick={closeMenu}>
            Contact
          </Link>
          <div className="header__right">
            <Link className="action_btn">Become a deliver</Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default Layout;
