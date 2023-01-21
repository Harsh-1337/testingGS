import React from "react";
import "../CSS/Landing.css";
import {
  HiOutlineChevronDoubleRight,
  HiArrowNarrowRight,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import landinImg1 from "../Images/landingImg1.jpg";
import landinImg2 from "../Images/landingImg2.jpg";
const Landing = () => {
  return (
    <div className="landingParent">
      <div className="landingText">
        <h1>
          Welcome to Great<span id="red">Share.</span>
        </h1>
        <h2>
          A <span id="green">Safe</span> social media for everyone.
        </h2>
        <div className="exploreDiv">
          <Link className="exploreLink" to={"./explore"}>
            Start Exploring
            <HiOutlineChevronDoubleRight className="exploreIcon" />
            <HiArrowNarrowRight className="arrow2" />
          </Link>
        </div>
      </div>
      <div className="landingImages">
        <img src={landinImg1} className="landingImg1" alt="" />
        <img src={landinImg2} className="landingImg2" alt="" />
      </div>
    </div>
  );
};

export default Landing;
