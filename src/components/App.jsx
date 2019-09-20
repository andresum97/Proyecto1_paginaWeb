import React, { Component } from "react";
import ReactDOM from "react-dom";


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
                    <div className="topbar-part1">Hola1</div>
                    <div className="topbar-part2">Hola2</div>
               </div>
          );
     }
}

export default App;
