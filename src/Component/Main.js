import { Component } from "react";
import Count from "./Count";

class Main extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.setState({ count: 10 });
  }

  render() {
    return (
      <div className="App-header">
        <h1>Welcome to here</h1>
        <h2>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Click Me
          </button>
        </h2>
        <h2>
          <Count count1={this.state.count} />
        </h2>
      </div>
    );
  }
}
export default Main;
