import React from "react";
import myImage from "../../image/myImage.jpeg";

class Childe extends React.Component {
  state = {
    Person: {
      fullName: "Taha Fituri",
      bio: "I am an IT Engineer",
      imgSrc: myImage,
      profession: "Programmer",
    },
    // show: true,
    count: 0,
  };

  componentDidMount = () => {
    this.inc = setInterval(() => {
      this.setState({
        ...this.state,
        count: this.state.count + 1,
      });
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.inc);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { count } = this.state;
    return (
      <>
        <>
          <h1>{fullName}</h1>
          <h1>{bio}</h1>
          <img height="350px" src={imgSrc} alt="Myprofile"></img>
          <h1>{profession}</h1>
          <h1>{count}</h1>
          <br></br>
        </>
      </>
    );
  }
}
export default Childe;
// export { fun };
