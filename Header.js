import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import logo from "./logo-sapato.png";

export default class MyHeader extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div class="navibar">
          <div class="flex-container">
            <img src={logo} />
            <h2 class="titulo">LOJA DE CALÇADOS </h2>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById("root"));
