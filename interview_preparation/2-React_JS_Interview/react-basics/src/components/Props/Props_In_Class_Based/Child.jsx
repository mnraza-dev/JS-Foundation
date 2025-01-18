import { Component } from "react";

class Child extends Component {
  render() {
    return <div>
      <h1>Child Component</h1>

      <h3>Name: {this.props.name}</h3>
      <p>Count: {this.props.count}</p>
    </div>;
  }
}

export default Child;