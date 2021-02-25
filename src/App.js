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
        
        <div className='backg'>
          <span className='emptySpace'></span>
          <p>hi</p>
          <p>hello</p>
          <p className="emptySpace"></p>
        </div>
      </>
    );
  }
}

export default App;