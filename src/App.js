import React, { Component } from "react";
import ReactDom from 'react-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  render(){
    return (
      <>
        <title>suhong_practice</title>
        
        <body>
          <div className="d_top"></div>
          <div className="d_menu1">
            <p>hi</p>
          </div>
          <div className="d_con">
            <p>hello</p>
          </div>
          <div className="d_menu2">
            <p>bye</p>
          </div>
          <p className="emptySpace"></p>
        </body>
      </>
    );
  }
}

export default App;