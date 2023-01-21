import React from "react";
import styled from "styled-components";
import flow from "../Images/flow.png";
import Me from "../Images/me.png";
import Gaurav from "../Images/gaurav.jpg";
import Rajat from "../Images/rajat.jpg";
const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");
  h1 {
    margin-top: 0;
    padding: 4vh 0;
    text-align: start;
    margin-left: 5vw;
    font-family: "Noto Sans", sans-serif;
    font-size: min(2.8rem, 5vh);
    color: #a149fa;
  }
  p {
    font-size: min(1.5rem, 4vw);
    text-align: start;
    padding: 0 5vw;
    color: black;
  }
  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: #a149fa;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .col img {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
  }
  span {
    display: inline-block;
    font-weight: 700;
    color: #590696;
  }
  .diagram {
    width: 80%;
    height: 80%;
  }
`;
const About = () => {
  return (
    <Wrapper>
      <h1>About Us</h1>
      <p>
        In today's time! Social media is everywhere. Everyone is addicted to it!
        Even the children. That worries their parents about the content they
        consume on social media and that results in restriction on children for
        using social media. But they do not need to worry now! We have a
        solution!
        <span>
          {" "}
          GreatShare is a content moderated platform that uses ML to detect
          whether the content is safe for the users or not. GreatShare moderates
          content and ensure the exclusion of profanity, threatening language,
          and other unwanted content including photos.
        </span>
        With this platform, kids can enjoy the amusement of social media, and
        parents can be carefree about the content consumed by their kids.
      </p>
      <h2>How GreatShare Works</h2>
      <img src={flow} className="diagram" alt="" />
      <h2>Made By :</h2>
      <div className="row container">
        <div className="col">
          <img src={Gaurav} alt="" />
          <h3>Gaurav Gulati</h3>
        </div>
        <div className="col">
          <img src={Me} alt="Harsh Champion" />
          <h3>Harsh Jha</h3>
        </div>
        <div className="col">
          <img src={Rajat} alt="" />
          <h3>Rajat Jain</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
