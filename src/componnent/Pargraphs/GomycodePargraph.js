import React from "react";
import "../../App.css";
import "./Pargraph.css";
import logo2 from "../../image/gomycodelogo.webp";
const GomycodePargraph = () => {
  return (
    <>
      {/* Raqame Intro */}
      <section className="gomucodeProg">
        <div style={{ paddingLeft: "1%" }}>
          <h2>GO MY CODE INTRO</h2>
          <p>
            GOMYCODE aims to be a pan-African educational platform that helps{" "}
            <br />
            the talents of tomorrow to improve their digital skills through
            affordable and quality <br /> training and the assistance of the
            best instructors.
          </p>
        </div>
        <img src={logo2} width="400px" alt="raqamelogo"></img>
      </section>
    </>
  );
};
export default GomycodePargraph;
