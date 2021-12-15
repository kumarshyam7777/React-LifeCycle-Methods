import "./App.css";
import { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  state = {
    visible: true,
  };
  render() {
    return (
      <div className="App">
        <div style={this.state.visible ? {} : { display: "none" }}>
          <Counter />
        </div>
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          Toggle Button
        </button>
      </div>
    );
  }
}

export default App;
