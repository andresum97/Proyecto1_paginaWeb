import React, { Component } from "react";
import ReactDOM from "react-dom";
import { relative, isAbsolute } from "path";

class AnimatedBack extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const estilo1 = {
            width: "100%",
            height: "0",
            paddingBottom: "56%",
            position: "relative"
        }
        const estilo2 = {
            position:"absolute"
        }
        const text = {
            fontSize: "50px"
        }
        const text2 = {
            fontSize: "20px",
            margin : "0 40px 0 0"
        }
        return(
            <div className="Videodiv">
                {/* <img src="./src/images/Vader.gif" alt="Background" /> */}
                {/* <div style={estilo1}>
                    <iframe src="https://giphy.com/embed/8XSE38HZTBN3q" width="100%" height="100%" style={estilo2} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </div> */}
                <div className="textVideo" style={text}>
                    <em>
                        {this.props.emphazed}
                    </em>
                   <strong style={text}>
                        {this.props.text}
                   </strong>
                </div>
                <div className="subTextVideo">
                    <div style={text2}>
                        {this.props.text2}
                        <div className="fa fa-expand icons"></div>
                    </div>
                    <div style={text2}>
                        {this.props.text3}
                        <div className="fa fa-angle-right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnimatedBack;