import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/GFlogo-white.svg';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About Me</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Contact</Link>
      </div>
      <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  );
};

export default Navbar;
