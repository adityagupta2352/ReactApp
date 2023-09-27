import React, { Component } from "react";
class Count extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h2>Count: {this.props.count1}</h2>
      </div>
    );
  }
}
export default Count;
