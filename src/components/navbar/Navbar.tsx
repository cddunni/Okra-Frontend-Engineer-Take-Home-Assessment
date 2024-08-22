import React, { useState, useEffect } from "react";
import BrinteLogo from "@/assets/svg/brinte.svg?react";
import Beta from "@/assets/svg/beta.svg?react";
import { Link } from "react-router-dom";
import Button from "@/components/button/Button";
import { navLinks } from "@/constants/contact";
import Hamburger from "@/components/hamburger";
import MobileMenu from "@/components/mobileMenu/MobileMenu";
import './_navbar.scss'

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
      isScrolled ? "navbar-scrolled" : ""
    } navbar`}>
      <div
        className='flex-row-between container'
      >
        <div className="logoContainer">
          <BrinteLogo />
          <Beta />
        </div>
        <div className="navlinks">
          {navLinks.map((name) => (
            <Link to="/" key={name} className='font-pptelegraph_r'>
                {name}
            </Link>
          ))}
        </div>
        <div className="navBtn">
          <Button theme="transparent" btnText="Login" />
          <Button theme="secondary" btnText="Join waitlist" />
        </div>
        <div
            className="hamburger"
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
