import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans" ><a href="#home" style={{ color: '#a6a6a4' }}>Home</a></li>
        <li className="p__opensans"><a href="#about" style={{ color: '#a6a6a4' }}>About</a></li>
        <li className="p__opensans"><a href="#menu" style={{ color: '#fcfcf7' }}>Menu</a></li>
        <li className="p__opensans"><a href="#awards" style={{ color: '#a6a6a4' }}>Awards</a></li>
        <li className="p__opensans"><a href="#contact" style={{ color: '#a6a6a4' }}>Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans" style={{ color: '#dbbf91' }}>Log In/Registration</a>
        <div />
        <a href="/" className="p__opensans" style={{ color: '#dbbf91' }}>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li ><a href="#home" onClick={() => setToggleMenu(false)} style={{ color: '#dbbf91' }}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)} style={{ color: '#dbbf91' }}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)} style={{ color: '#dbbf91' }}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)} style={{ color: '#dbbf91' }}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)} style={{ color: '#dbbf91' }}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
