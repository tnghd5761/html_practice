import React, { Component } from "react";

class NandD extends Component {
    constructor(props){
        super(props);

        this.state = {
            seq : "밤"
        };
    }
    changeSeq = () => {
        var num = this.state.seq;
        var target = document.querySelector('body');
        if(num === "밤"){
            this.setState({
                seq : "낮"
            });
            target.style.backgroundColor='black';
            target.style.color='white';
        } else {
            this.setState({
                seq : "밤"
            });
            target.style.backgroundColor='white';
            target.style.color='black';
        }
    }
    render(){
        return (
            <body>
                <ul>
                    <p></p>
                    <button onClick={this.changeSeq}
                    >{this.state.seq}</button>
                </ul>
            </body>
        );
    }
}

export default NandD;