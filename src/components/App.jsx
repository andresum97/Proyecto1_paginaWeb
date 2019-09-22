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
          const container = {
               position: "relative",
               width: "80%",
               marginLeft: "167px",
               fontSize: "10px"
          }    
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
               <div style={container}>
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


class App extends Component{
     render(){
          // const style = {
          //      backgroundColor: "green",
          //      // marginTop: '0',
          //      // paddingTop: '0'
          //      top: "100px"
          // }
          return(
               <div className="topbar"> 
                    {/* <div className="topbar-part1">Show Disney.com</div> */}
                    <Top1 />
                    {/* <div className="topbar-part2">Hola2</div> */}
               </div>
          );
     }
}

export default App;
