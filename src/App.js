import React, { Component} from "react";
import "./App.css";
import Game from "./tic-tac-toe/TicTacToe.js"
class App extends Component {
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <Game />
      </div>
    );
  }
}

export default App;