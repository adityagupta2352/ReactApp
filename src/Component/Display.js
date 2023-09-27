import { Component } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./ContactUs";
import Register from "./Register";

class Display extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        {this.props.selectState === "Home" ? (
          <Home />
        ) : this.props.selectState === "About" ? (
          <About />
        ) : this.props.selectState === "Contact" ? (
          <Contact />
        ) : this.props.selectState === "Register" ? (
          <Register />
        ) : null}
      </>
    );
  }
}
export default Display;
