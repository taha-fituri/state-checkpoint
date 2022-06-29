import React from "react";
import Childe from "./componnent/StatesComponent/Childe";
import { Button } from "react-bootstrap";
import NavBar from "./componnent/NavBar/NavBar";
import RaqamPargraph from "./componnent/Pargraphs/RaqamPargraph";
import ExpertiseParqraph from "./componnent/Pargraphs/ExpertiseParqraph";
import GomycodePargraph from "./componnent/Pargraphs/GomycodePargraph";
import SkillPargraph from "./componnent/Pargraphs/SkillPargraph";
import Singup from "./componnent/StatesComponent/Singup";
import Footer from "./componnent/Footer/Footer";

var skills = [
  {
    titel: "HTML & CSS",
    par: "It is a language designed to specify the overall appearance of webpages as well as the appearance and structure of the text and elements such as images and buttons on webpages and their layout.",
  },
  {
    titel: "JS & JSX",
    par: "It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.",
  },
  {
    titel: "React",
    par: "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the React abstracts away the DOM from you.",
  },
  {
    titel: "Digital marketing",
    par: "Digital marketing is the strategy and processes that connect advertisers with their audiences across digital channels. An advertisement itself is a piece of creative shared via digital inventory - the space a publisher makes .",
  },
];

class App extends React.Component {
  state = {
    show: false,
    veiw: false,
  };
  handleShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  handleShow1 = () => {
    this.setState({
      ...this.state,
      veiw: !this.state.veiw,
    });
  };
  render() {
    return (
      <>
        <NavBar />
        <RaqamPargraph />
        <div className="WhoAmI">
          <h5>
            If you would like to know who designed this page, press the
            corresponding button .
          </h5>
          <Button variant="outline-primary" onClick={this.handleShow}>
            {this.state.show === true ? "Hid Me" : "Show Me"}
          </Button>{" "}
        </div>
        <div className="mydetails">
          {this.state.show === true ? <Childe /> : null}
        </div>
        <ExpertiseParqraph />
        <GomycodePargraph />
        <p style={{ paddingLeft: "10%" }}>
          Upon completion of these educational courses, the student will produce
          some popular experiences in the field of programming as follows
        </p>
        <div className="divcard">
          {skills.map((e, i) => (
            <SkillPargraph e={e} key={i} />
          ))}
        </div>
        <div className="singup">
          <h5>
            If you like this program and want to register for it, all you have
            to do is press this button .
          </h5>
          <Button variant="outline-primary" onClick={this.handleShow1}>
            {this.state.veiw === true ? "Done" : "SingUp"}
          </Button>{" "}
        </div>
        <div className="singupform">
          {this.state.veiw === true ? <Singup /> : null}
        </div>
        <br />
        <Footer />
      </>
    );
  }
}
export default App;
