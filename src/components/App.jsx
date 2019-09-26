import React, { Component } from "react";
import ReactDOM from "react-dom";
import { relative, isAbsolute } from "path";


class Top1 extends Component{
     constructor(props){
          super(props)
          this.state = {

          }
     }
     render(){
          console.log("Llego aqui");
            
          const firstlink = {
               position: "absolute",
               left: "10px",
               color: "#78899E"
          }
          const rightside = {
               float: "right",
               textAlign: "right",
               color: "#1994D7",
               marginRight: "153px"
          }
          const account = {
               display: "inline-block",
               margin: "0 6px 0 3px"
          }
          const account2 = {
               display: "inline-block",
               margin: "0 6px 0 10px",
               top: "0px"
          }
          const links = {
               color: "#1994D7"
          }
          const world = {
               width: "10px",
               height: "10px",
               top: "10px",
               margin: "0 0 0 10px"
          }
          const input1 = {
               borderRadius: "18px",
               background: "#F8F8F8",
               width: "134px",
               height: "16px",
               fontSize: "9px",
               margin: "0"
          }
          return(
               <div className="container">
                    <a href="http://disney.go.com">
                         <span style={firstlink}>Show Disney.com</span>
                    </a>
                    <div style={rightside}>
                         <div style={account}>
                              {/* <a href="http://disney.go.com"> */}
                                 <span style={links}> Sign In or Create Account</span> 
                              {/* </a> */}
                         </div>
                         <div style={account}>
                              <span>|</span>
                              <img style={world} src="./src/images/world.png" />
                         </div>
                         <div style={account}>
                              <span style={links}> United States (English)</span> 
                         </div>
                         <div style={account2}>
                              <input type="text" style={input1} placeholder="search disneyworld.com"/>
                         </div>       
                    </div>
               </div>
          );
     }
}

class Top2 extends Component{
     constructor(props){
          super(props)
          this.state = {
               // text: this.props.text
          }
     }
     render(){
          return(
               <div className="Tabs">
                    {this.props.text}                 
               </div>
          );
     }
}

class BarPage extends Component{
     render(){
          return(
               <div className="topbar"> 
                         <Top1 />
                         <div className="container2">
                              <img src="./src/images/WaltDisneyLogo.png" className="logoDisney"/>
                              <Top2 text="Parks & Tickets"/>
                              <Top2 text="Places to Stay"/>
                              <Top2 text="Things to Do"/>
                              <Top2 text="Shop"/>
                              <Top2 text="Help & Rules"/>
                              <Top2 text="Cart"/>
                         </div>
               </div>    
          );
     }
}


class App extends Component{
     render(){
          // const style = {
          //      backgroundColor: "green",
          //      // marginTop: '0',
          //      // paddingTop: '0'
          //      top: "100px"
          // }
          return(
               <div className="page">
                    <BarPage />
               </div>
          );
     }
}

export default App;
