import React from "react";
import "../../App.css";
import card1 from "../../Images/card1.jpg";
import card2 from "../../Images/card2.jpg";
import card3 from "../../Images/card3.jpg";
import card4 from "../../Images/card4.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

const Card = () => {
  return (
    <>
      {/* Card Code */}
      <div className="cardsection">
        <MDBCard style={{ maxWidth: "22rem", backgroundColor: "#EEEEEE" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={card1} fluid alt="card1" height="500px" />
            <a href="#test">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Leichtauf High</MDBCardTitle>
            <MDBCardText>
              This oil is popular and recommended for owners of cars whose
              engines range between 12 - 18
            </MDBCardText>
            <MDBBtn href="#">Buy</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ maxWidth: "22rem", backgroundColor: "#EEEEEE" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={card2} fluid alt="card2" height="500px" />
            <a href="#test">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Molygen</MDBCardTitle>
            <MDBCardText>
              This oil is popular and recommended for owners of cars whose
              engines range between 20 - 27
            </MDBCardText>
            <MDBBtn href="#">Buy</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ maxWidth: "22rem", backgroundColor: "#EEEEEE" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={card3} fluid alt="card3" height="500px" />
            <a href="#test">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Top-Tec</MDBCardTitle>
            <MDBCardText>
              This oil is popular and recommended for owners of cars whose
              engines range between 30 - 35
            </MDBCardText>
            <MDBBtn href="#">Buy</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ maxWidth: "22rem", backgroundColor: "#EEEEEE" }}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage src={card4} fluid alt="card4" height="500px" />
            <a href="#test">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Super Leichtauf</MDBCardTitle>
            <MDBCardText>
              This oil is popular and recommended for owners of cars whose
              engines range between 20 - 30
            </MDBCardText>
            <MDBBtn href="#">Buy</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </div>
      <nav aria-label="...">
        <MDBPagination circle className="mb-0">
          <MDBPaginationItem>
            <MDBPaginationLink href="#test" tabIndex={-1} aria-disabled="true">
              Previous
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem active>
            <MDBPaginationLink href="#test">
              1 <span className="visually-hidden">(current)</span>
            </MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#test">2</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#test">3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#test">4</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#test">5</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href="#test">Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
        <hr width="50%" style={{ marginLeft: "25%", margingTop: "2%" }}></hr>
      </nav>
    </>
  );
};
export default Card;
