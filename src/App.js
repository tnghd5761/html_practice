import React, { Component } from "react";
import './App.css';
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
