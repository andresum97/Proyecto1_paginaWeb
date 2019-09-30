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
               marginRight: "153px",
               display:"flex",
               flexDirection: "row",
               padding: "0",
               marginTop: "-6px"
          }
          const account = {
               //display: "inline-block",
               margin: "10px 6px 0 3px"
          }
          const account2 = {
              // display: "inline-block",
               margin: "0 6px 0 15px",
               // top: "0px"
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
          const icono = {
               fontSize: "12px",
               fontWeight: "bold"
          }
          const input1 = {
               borderRadius: "18px",
               background: "#F8F8F8",
               width: "134px",
               height: "16px",
               fontSize: "9px",
               margin: "0"
          }
          const icona ={
               marginLeft: "85px"
          }
          return(
               <div className="container">
                    <a href="http://disney.go.com">
                         <span style={firstlink}>Show Disney.com</span>
                    </a>
                    <i className="fa fa-angle-down" style={icona}></i>
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
                         <div className= "divInput" style={account2}>
                              <div className="lupa">
                                   {/* <img src="./src/images/lupa.svg" alt="lupa" style={icono}/> */}
                                   <i style={icono} className="fa fa-search"></i>
                              </div>
                              <input type="text" placeholder="search disneyworld.com"/>
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
          }
     }
     render(){
          const style = {
               padding:"8px 12px 0 12px"
          }
          const iconstyle={
               fontSize: "16px"
          }
          let icons = this.props.icons;
          console.log(icons);
          return(
               <div className="Tabs">
                    <div style={style}>
                         <i className={icons} style={iconstyle}></i>
                         {this.props.text}     
                    </div>            
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
                              <Top2 text=" Cart" icons="fa fa-shopping-cart"/>
                              <Top2 text="MyDisneyExperience" icons="fa fa-empire"/>
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
