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
        let imagewidth = this.props.imagewidth+"%";
        let text = this.props.text;
        let image = this.props.image;
        console.log(imagewidth);
        const style = {
            width: imagewidth
        }
        const styleimage = {
            width: "100%"
        }
        return(
            <div style={style}>
                <div className="promotionsContainer">
                    <img src={image} alt="MickyHalloween" style={styleimage}/>
                    <div>
                        <strong>
                            {text}
                        </strong>
                    </div>
                </div>
            </div>
        );
    }
}


export default DisneyImage;