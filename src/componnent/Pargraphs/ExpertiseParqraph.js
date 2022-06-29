import React from "react";
import "../../App.css";
import "./Pargraph.css";
import logo2 from "../../image/Exlogo.png";
const ExpertiseParqraph = () => {
  return (
    <>
      {/* Raqame Intro */}
      <section className="expertiseparg">
        <div style={{ paddingLeft: "3%" }}>
          <h2>EXPERTISE FRANCE INTRO</h2>
          <p>
            Expertise France implements a number of projects in Libya with a
            focus on economic <br /> development, digitalization and governance.
            The ongoing projects are: EU4PSL, Raqam-e and E-nable.
          </p>
        </div>
        <img src={logo2} width="400px" alt="raqamelogo"></img>
      </section>
    </>
  );
};
export default ExpertiseParqraph;
