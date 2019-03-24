import React, { Component } from "react";
import Hero from "./Hero";
import Home from "./Home";

class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <Home />
      </>
    );
  }
}

export default HomePage;
