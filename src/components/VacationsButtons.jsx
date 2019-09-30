import React, { Component } from "react";
import ReactDOM from "react-dom";
import { relative, isAbsolute } from "path";

class VacationsButtons extends Component{
    render(){
        let icon = this.props.icon;
        let text =  this.props.text;
        const buttons = {
            marginRight: "35px"
        }
        const style = {
            fontSize:"42px"
        }
        const size ={
            fontSize: "11px"
        }
        return(
            <div style={buttons}>
                <button className="VacationButtons">
                    <i className={icon} style={style}></i>
                </button>
                <br/>
                <span style={size}>
                    {text}
                </span>
            </div>
        );
    }
}
export default VacationsButtons;