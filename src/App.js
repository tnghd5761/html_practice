import React, { Component } from "react";
import './App.css';
import Ex1 from "./Ex1.js";
import NandD from "./NandD";

class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div>
        <NandD></NandD>
        <ul>
          <p>hello</p>
        </ul>
      </div>
    );
  }
}

export default App;
