import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Parent",
      count: 0,
    };
  }
  render() {
    return <div>
      <h1>Parent Component</h1>
      <Child name={this.state.name} />
    </div>;
  }
}

export default Parent;
