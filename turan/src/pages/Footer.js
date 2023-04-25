import React from "react";
import "../css/Footer.css";
import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer__conteyner">
        <h1 className="footer__title">Our contacts</h1>
        <div className="contact">
          <div className="phone">
            <HiPhoneArrowUpRight color="blue" className="phone_icon" />
            <p className="phone_p"> +9989 99 988-88-93</p>
            <HiOutlineEnvelope color="#FFFFFF" className="envelope_icon" />
            <p className="envelope_p">abdugofurdehqonov527@gmail.com</p>
          </div>
          <div className="socialNetworks">
            <div className="instagram">
              <BsInstagram className="aaa" color="white" size="3 rem" />
            </div>
            <div className="twitter instagram">
              {" "}
              <a href="https://twitter.com/home" target="__blank">
                <BsTwitter className="aaa" color="white" size="3rem" />
              </a>
            </div>
            <div className="fesabook instagram">
              <a href="https://github.com/GofurDeveloper" target="__blank">
                <VscGithub className="aaa" color="white" size="3rem" />
              </a>
            </div>
            <div className="telegram instagram">
              <a href="https://t.me/Gofur_0123" target="__blank">
                <FaTelegramPlane className="aaa" color="white" size="3rem" />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
