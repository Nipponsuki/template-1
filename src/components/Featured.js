import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured__heading">
        The best of the <br />
        wildlife photography
      </h1>
      <p className="featured__text">
        Winning images from national and international wildlife photography{" "}
        <br /> competitions of the year
      </p>
      <button className="featured__cta">see more</button>
    </div>
  );
};

export default Featured;
