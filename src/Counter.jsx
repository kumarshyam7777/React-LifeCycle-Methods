import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
      console.log("-----Construcor 1st called.....")
    this.state = {
      count: 0,
    };
    console.log("-------constructor 2nd Called-------");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Get Derived State From Props method called....");
    return <div />;
  }

  componentDidMount() {
    console.log("Component Did Mount Method called ......");
    console.log(`---------------`);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("Render Method.....");
    return (
      <div>
        <h3>Count: {this.state.count} </h3>
        <button
          onClick={this.increment}
          style={{
            backgroundColor: "brown",
            margin: "12px",
            padding: "24px",
          }}
        >
          Increment(+)
        </button>{" "}
        <br /> <hr />
        <button
          style={{
            backgroundColor: "brown",
            margin: "12px",
            padding: "24px",
          }}
          onClick={this.decrement}
        >
          Decrement(-)
        </button>
      </div>
    );
  }
}

export default Counter;
