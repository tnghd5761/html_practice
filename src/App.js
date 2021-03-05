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
        
        <body className="portal fullscreen">
          <div className="wrap">
            <header className="header">
              <h1>
                <a href="./">Be the one</a>
              </h1>
            </header>
            <div className="container">
                <article className="content">
                  <section className="cover portal_cover">
                    <div className="inner">
                      <h2>
                        <p className="typing-txt">
                          SH Cloning Practice<html>&nbsp;</html>
                        </p>
                        <p className="typing"></p>
                      </h2>
                      <p>I can do</p>
                      <ul>
                        <li>
                          <a className="::after">
                            <div className="::before">
                              Before
                            </div>
                            과거
                            <span>바로가기</span>
                          </a>
                        </li>
                        <li>
                          <a className="::after">
                            <div className="::before">
                              After
                            </div>
                            미래
                            <span>바로가기</span>
                          </a></li>
                      </ul>
                    </div>
                  </section>
                </article>
              </div>
          </div>
        </body>
      </>
    );
  }
}

export default App;