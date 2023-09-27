import React, { Component } from "react";
import Display from "./Display";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      selectedComponent: "Home"
    };
  }

  render() {
    return (
      <>
        <div id="sidebar">
          <button
            onClick={() =>
              this.setState({
                selectedComponent: "Home"
              })
            }
          >
          Home
          </button>

          <button
            onClick={() =>
              this.setState({
                selectedComponent: "About"
              })
            }
          >
          About
          </button>
          
          <button
            onClick={() =>
              this.setState({
                selectedComponent: "Contact"
              })
            }
          >
          Contact Us
          </button>
          
          <button
            onClick={() =>
              this.setState({
                selectedComponent: "Register"
              })
            }
          >
          Register
          </button>
        </div>
        <div id="displayContent">
          <Display selectState = {this.state.selectedComponent} ></Display>
        </div>
        
      </>
    );
  }
}

export default Header;
