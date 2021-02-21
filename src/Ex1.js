import React, { Component } from "react";
import NandD from "./NandD.js";

class Niday extends Component {
    constructor(props){
        super(props);

        this.state = {
            seq : 0
        };
    }
    changeSeq = () => {
        var num = this.state.seq;
        if(num === 0){
            this.setState({
                seq : 1
            });
            document.querySelector('body').style.backgroundColor='black';
            document.querySelector('body').style.color='white';
        } else {
            this.setState({
                seq : 0
            });
            document.querySelector('body').style.backgroundColor='white';
            document.querySelector('body').style.color='black';
        }
    };
    render(){
        return (
            <div>
                <p></p>
                <button onClick={this.changeSeq}
                >{this.props.title[this.state.seq]}</button>
            </div>
        );
    }
}

export default class Ex1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text : ["밤", "낮"]
        };
    }
    
    render(){
        return(
            
            <body>
                <ul>
                    <li>kang</li>
                    <li>su</li>
                    <li>hong</li>
                    <p></p>
                    <Niday title={this.state.text}></Niday>
                </ul>
            </body>
        );
    }
}