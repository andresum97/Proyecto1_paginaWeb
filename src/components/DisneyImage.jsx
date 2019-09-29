import React, { Component } from "react";
import ReactDOM from "react-dom";
import { relative, isAbsolute } from "path";

class DisneyImage extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        let colortext = this.props.color;
        let text = this.props.text;
        let image = this.props.image;
        let textsize =  this.props.textsize+"vw";
        console.log(textsize);
        let color = {
        }
        if(colortext=="1"){
            color = {
                color:"white",
                fontSize: textsize
            }
        }else{
            color = {
                fontSize: textsize
            }
        }
        console.log(color);
        const styletext={
            fontSize: "2vw"
        }
        return(
            <div className="promotionsContainer" style={styletext}>
                    <img src={image} alt="MickyHalloween" className="promotionsImage"/>
                    <div className="promotionsText" style={color}>
                        <strong>
                            {text}
                        </strong>
                    </div>
            </div>
        );
    }
}


export default DisneyImage;