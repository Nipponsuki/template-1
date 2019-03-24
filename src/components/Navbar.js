import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="navBtn">WildLife</h1>
      </Link>
      <Link to="/nav" style={{ textDecoration: "none", color: "white" }}>
        <h1 className="navBtn">☵</h1>
      </Link>
    </nav>
  );
};

export default Navigation;
