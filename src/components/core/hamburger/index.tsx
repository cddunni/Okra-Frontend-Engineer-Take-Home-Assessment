import './_hamburger.scss';
import React from 'react';

interface HamburgerProps {
  active: boolean,
  className: string,
}

export const Hamburger = ({ active, className }: HamburgerProps) => (
  <svg
    className={`ham hamRotate180 ham1 ${active ? 'active' : ''} ${className || ''}`}
    viewBox="0 0 100 100"
    width="60"
  >
    <path
      className="line top"
      d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
      stroke="#202022"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      className="line middle"
      d="m 70,50 h -40"
      stroke="#202022"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      className="line bottom"
      d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
      stroke="#202022"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
