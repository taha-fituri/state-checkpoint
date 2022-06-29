import React from "react";
import "../../App.css";
import "./Pargraph.css";
import { Card } from "react-bootstrap";
const SkillPargraph = (props) => {
  return (
    <>
      {/* Raqame Intro */}
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Body>
          <Card.Title>
            {" "}
            <Card.Header>{props.e.titel}</Card.Header>
          </Card.Title>
          <Card.Text>{props.e.par}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SkillPargraph;
