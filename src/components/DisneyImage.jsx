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
        let subtitle = this.props.subtitle;
        let color = {
        }
        const subtitletext = {
            fontSize: "1.2vw",
            textAlign: "center",
            marginTop: "15px"
        }
        const breakT = {
            margin: "0 0 15px 0"
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
        
        const styletext={
            fontSize: "2vw"
        }
        return(
            <div className="promotionsContainer" style={styletext}>
                    <img src={image} alt="MickyHalloween" className="promotionsImage"/>
                    <div className="promotionsText" style={color}>
                        <strong style={breakT}>
                            {text}
                        </strong>
                        <br/>
                        <div style={subtitletext}>{subtitle}</div>
                    </div>
                    
            </div>
        );
    }
}


export default DisneyImage;