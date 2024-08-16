import React from "react";
import BrinteIcon from "@/assets/icons/brinte.svg?react";
import CircleAlert from "@/assets/icons/circle-alert.svg?react";
import { navLinks, contacts, legal } from "@/constants/contact.jsx";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-overlay">
      <div className="flex md:flex-row flex-col justify-between lg:px-[309px] md:px-20 px-6 md:pt-60 pt-40 md:pb-8 pb-6 bg-footerGraphics bg-no-repeat bg-top md:space-y-0 space-y-8">
        <BrinteIcon />
        <div className="grid md:grid-cols-3 gap-8 font-pptelegraph_r">
          <div className="lg:min-w-[139px] md:min-w-20">
            <p className="text-subdued text-xs">RESOURCES</p>
            <div className="">
              {navLinks.slice(0, -1).map((name) => (
                <Link
                  to="/"
                  key={name}
                  className="text-label hover:text-subdued"
                >
                  <p className="font-pptelegraph_r font-medium text-[13px] mt-6">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:min-w-[139px] md:min-w-20">
            <p className="text-subdued text-xs">CONNECT WITH US</p>
            <div className="">
              {contacts.map((item) => (
                <Link
                  to="/"
                  key={item.title}
                  className="text-label hover:text-subdued"
                >
                    <div className="flex items-center space-x-2 mt-6">
                        {item.icon}
                        <p className="font-pptelegraph_r font-medium text-[13px]">
                            {item.title}
                        </p>
                    </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:min-w-[139px] md:min-w-20">
            <p className="text-subdued text-xs">LEGAL</p>
            <div className="">
              {legal.map((name) => (
                <Link
                  to="/"
                  key={name}
                  className="text-label hover:text-subdued"
                >
                  <p className="font-pptelegraph_r font-medium text-[13px] mt-6">
                    {name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-[309px] md:mx-20 mx-6 border-t border-tertiary_highlight flex justify-between md:pt-8 pt-6 text-[13px] font-pptelegraph_r">
        <div className="flex items-center space-x-2">
          <CircleAlert/>
          <p className="text-label">All systems operational</p>
        </div>
        <p className="text-secondary">© Brinte {new Date().getFullYear()}</p>
      </div>
      <div className="lg:px-[309px] md:px-20 px-10 lg:pt-20 lg:pb-[235px] md:pb-52 pb-32 bg-no-repeat bg-bottom bg-footerBg bg-90"></div>
    </section>
  );
};

export default Footer;
