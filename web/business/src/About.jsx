import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import business from "./images/img-2.jpg";
const About = () => {
  return (
    <>
     <Common name="Welcome to About page" 
     imgsrc={business} visit="/contact" 
     btname="Contact Now" />
    </>
  );
};

export default About;
