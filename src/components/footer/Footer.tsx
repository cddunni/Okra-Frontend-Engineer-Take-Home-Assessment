import BrinteIcon from "@/assets/icons/brinte.svg?react";
import CircleAlert from "@/assets/icons/circle-alert.svg?react";
import { navLinks, contacts, legal } from "@/constants/contact";
import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <div className="contact">
        <BrinteIcon />
        <div className="group font-pptelegraph_r">
          <div className="item">
            <p className="title">RESOURCES</p>
            <div className="">
              {navLinks.slice(0, -1).map((name) => (
                <Link
                  to="/"
                  key={name}
                >
                  <p className="contact-type">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="item">
            <p className="title">CONNECT WITH US</p>
            <div className="">
              {contacts.map((item) => (
                <Link
                  to="/"
                  key={item.title}
                  className="text-label hover:text-subdued"
                >
                    <div className="social-media">
                        {item.icon}
                        <p className="font-pptelegraph_r">
                            {item.title}
                        </p>
                    </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="item">
            <p className="title">LEGAL</p>
            <div className="">
              {legal.map((name) => (
                <Link
                  to="/"
                  key={name}
                >
                  <p className="contact-type">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="info font-pptelegraph_r">
        <div className="flex-center space-x-2">
          <CircleAlert/>
          <p className="status">All systems operational</p>
        </div>
        <p className="year">© Brinte {new Date().getFullYear()}</p>
      </div>
      <div className="logo-mark"></div>
    </section>
  );
};

export default Footer;
