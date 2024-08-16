import React, { useState, useEffect } from "react";
import BrinteLogo from "@/assets/svg/brinte.svg?react";
import Beta from "@/assets/svg/beta.svg?react";
import { Link } from "react-router-dom";
import Button from "./button/Button";
import { navLinks } from "@/constants/contact.jsx";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${
      isScrolled ? "border-b border-tertiary_highlight" : ""
    } py-1 lg:py-5 lg:px-16 fixed w-full top-0 left-0 z-20 bg-on_primary`}>
      <div
        className='flex justify-between items-center lg:px-0 md:px-6 px-4'
      >
        <div className="flex space-x-2 items-center">
          <BrinteLogo />
          <Beta />
        </div>
        <div className="lg:flex items-center space-x-4 hidden">
          {navLinks.map((name) => (
            <Link to="/" key={name} className="text-label hover:text-subdued">
              <p className="font-pptelegraph_r font-medium text-sm py-[5px] px-3">
                {name}
              </p>
            </Link>
          ))}
        </div>
        <div className="lg:flex items-center hidden space-x-3">
          <Button theme="transparent" btnText="Login" />
          <Button theme="secondary" btnText="Join waitlist" />
        </div>
        <div
            className="lg:hidden block"
            onClick={() => setShowSlider((prev) => !prev)}
          >
            <Hamburger className="stagger__in--3" active={showSlider} />
          </div>
      </div>
      <MobileMenu showSlider={showSlider} setShowSlider={setShowSlider} />
    </div>
  );
};

export default Navbar;
