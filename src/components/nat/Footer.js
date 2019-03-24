import React from "react";
import "./Footer.scss";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="pics">
        <img src={image1} alt="animal" />
        <img src={image2} alt="animal" />
        <img src={image3} alt="animal" />
        <img src={image4} alt="animal" />
        <img src={image5} alt="animal" />
        <img src={image6} alt="animal" />
      </div>
      <div className="mail">
        <div className="mail__heading">
          <h1>
            Travel <br />
            with us
          </h1>
        </div>
        <div className="mail__text">
          <p>
            Lorem ipsum is placeholder <br />
            text commonly used <br />
            in the graphic.
          </p>
        </div>
        <div className="mail__input">
          <input placeholder="Enter a valid email address" />
          <button className="mail__cta">Submit</button>
        </div>
      </div>
      <div className="sns">
        <i class="fab fa-facebook" />
        <i class="fab fa-twitter-square" />
        <i class="fab fa-youtube-square" />
        <i class="fab fa-instagram" />
        <i class="fab fa-google-plus-square" />
      </div>
    </footer>
  );
};

export default Footer;
