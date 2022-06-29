import React from "react";
import "../../App.css";
import "./Pargraph.css";
import logo2 from "../../image/logo2.png";
const RaqamPargraph = () => {
  return (
    <>
      {/* Raqame Intro */}
      <section className="raqamProg">
        <div>
          <h2>RAQAM-E INTRO</h2>
          <p>
            Raqam-e is a tech-oriented community, it promotes tech and coding
            across Libya. <br /> It's a project implemented by Expertise France
            and funded by France to disseminate <br /> the coding culture and
            support Libya in its digital transformation.
          </p>
        </div>
        <img src={logo2} width="400px" alt="raqamelogo"></img>
      </section>
    </>
  );
};
export default RaqamPargraph;
