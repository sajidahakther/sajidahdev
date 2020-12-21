import React from "react";
import { Link } from "react-scroll";
import LogoImg from "../../assets/svg/star.svg";
import MobileMenuIcon from "../../assets/svg/mobile-menu.svg";
import "./navbar.sass";

const desktopNav = (props) => (
  <nav className={`navbar ${!props.userIsScrolled ? "navbar--large" : ""}`}>
    <div className="wrapper flex-s-between">
      <Link
        className="nav-icon"
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <img src={LogoImg} alt="logo" />
      </Link>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;
