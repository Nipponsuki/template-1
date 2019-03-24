import React from "react";
import "./Line5.scss";
import image from "../../assets/images/cute.jpg";

const Line5 = () => {
  return (
    <div className="five-line">
      <div className="image">
        <img src={image} alt="animal" />
      </div>
      <div className="box">
        <h1>Spectacular photos of Our World</h1>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
};

export default Line5;
