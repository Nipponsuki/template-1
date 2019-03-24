import React from "react";
import "./NavigationPage.scss";
import { Link } from "react-router-dom";

const NavigationPage = () => {
  return (
    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            About Us
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Projects
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Contacts
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            <Link className="navigation__link close" to="/">
              Home
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPage;
