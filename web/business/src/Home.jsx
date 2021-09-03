import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import business from "./images/img -1.jpg";
const Home = () => {
  return (
    <>
    <Common name="Grow your business with" 
     imgsrc={business} visit="/service" 
     btname="Get Started"/>
    </>
  );
};

export default Home;
