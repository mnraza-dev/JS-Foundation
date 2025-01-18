import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    console.log("Component mounted");
    console.log("when component is loaded, this method is called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Count: {this.state.count}</h1>
        <button
          style={{
            marginLeft: "10px",
            cursor: "pointer",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "12px",
          }}
          onClick={this.incrementCount}
        >
          Increment Count
        </button>
      </div>
    );
  }
}
export default Counter;
