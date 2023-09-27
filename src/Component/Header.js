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
        <div>
          <button
            className="App-Home"
            onClick={() =>
              this.setState({
                selectedComponent: "Home"
              })
            }
          >
          Home
          </button>

          <button
            className="App-Home"
            onClick={() =>
              this.setState({
                selectedComponent: "About"
              })
            }
          >
          About
          </button>
          
          <button
            className="App-Home"
            onClick={() =>
              this.setState({
                selectedComponent: "Contact"
              })
            }
          >
          Contact Us
          </button>
          
          <button
            className="App-Home"
            onClick={() =>
              this.setState({
                selectedComponent: "Register"
              })
            }
          >
          Register
          </button>
        </div>
        <Display selectState = {this.state.selectedComponent} ></Display>
      </>
    );
  }
}

export default Header;
