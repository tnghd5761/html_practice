import react from "react";

export default class Ex1 extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            text : "밤"
        };
    }
    
    render(){
        return(
            <body>
                <ul>
                    <button onClick={function(e){
                        e.preventDefault();
                        document.querySelector('body').style.backgroundColor='black';
                        document.querySelector('body').style.color='white';
                    }}>{this.state.text}</button>
                    <button onClick={function(e){
                        e.preventDefault();
                        document.querySelector('body').style.backgroundColor='white';
                        document.querySelector('body').style.color='black';
                    }}>낮</button>

                    <li>kang</li>
                    <li>su</li>
                    <li>hong</li>
                </ul>
            </body>
        );
    }
}