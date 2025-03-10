// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/GFlogo-white.svg';
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="intro" className="desktopMenuListItem">
          Home
        </Link>
        <Link to="about" className="desktopMenuListItem">
          About Me
        </Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
