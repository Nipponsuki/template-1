import React from "react";
import Header from "./Header";
import Line1 from "./Line1";
import Line2 from "./Line2";
import Line3 from "./Line3";
import Line4 from "./Line4";
import Line5 from "./nat/Line5";
import Line6 from "./nat/Line6";
import Footer from "./nat/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Line1 />
      <Line2 />
      <Line4 />
      <Line3 />
      <Line5 />
      <Line6 />
      <Footer />
    </div>
  );
};

export default Home;
