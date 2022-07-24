import React, { Component } from "react";
import "./index.css";

class App extends Component {
  state = {
    numero: 0
  };

  add = () => {
    if (this.state.numero < 10) {
      this.setState({
        numero: this.state.numero + 1
      });
    }
  };

  sub = () => {
    if (this.state.numero > 0) {
      this.setState({
        numero: this.state.numero - 1
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="title">
          <h2>Contador</h2>
          <span>/* 0 a 10 */</span>
        </div>
        <div className="counter">
          <h2>Contador</h2>
          <h3>{this.state.numero}</h3>
          <div className="area-buttons">
            <button className="sub" onClick={this.sub}>
              {" "}
              -{" "}
            </button>
            <button className="add" onClick={this.add}>
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
