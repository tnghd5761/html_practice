import React, { Component } from "react";
import ReactDom from 'react-dom';
import './App.css';
import $ from 'jquery';

var typingBool = false; 
var typingIdx=0; 
var typingTxt = $(".typing-txt").text();
typingTxt = typingTxt.split("");
if(typingBool==false){
  typingBool=true; 
  
  var tyInt = setInterval(typing,150);
} 

function typing(){ 
  if(typingIdx < typingTxt.length){
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++; 
  } else{
    clearInterval(tyInt);

    setTimeout(function(){
      typingBool = false;
      typingIdx = 0;
      typingTxt = $(".typing-txt").text();
      $(".typing").html("")
      tyInt = setInterval(typing, 150);
    }, 2000);
  } 
}

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
          <section className="maincover">
            <div className="d_menu1">
              <p>hi</p>
            </div>
            <div className="d_con">
              <h1>
                <p className="typing-txt">
                  Self Cloning Practice!<html>&nbsp;</html>
                </p>
                <p className="typing"></p>
              </h1>
            </div>
            <div className="d_menu2">
              <p>bye</p>
            </div>
          </section>
        </body>
      </>
    );
  }
}

export default App;