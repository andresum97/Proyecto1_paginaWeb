import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import AnimatedBack from './components/AnimatedBack.jsx';
import DisneyImage from './components/DisneyImage.jsx';



ReactDOM.render(
    <App />,
    document.getElementById('root')
)
ReactDOM.render(
    <AnimatedBack  emphazed="Star Wars" text=": Galaxy's Edge Is Now Open at Disney's Hollywood Studios" text2="Play Full Video  " text3="Learn More  "/>,
    document.getElementById('root2')
)
ReactDOM.render(
    <DisneyImage  text="Autumn at Walt Disney World Resort" image="./src/images/MickeyHalloween.png" color="1"  textsize="2"/>,
    document.getElementById('disneyElement')    
)
ReactDOM.render(
    <DisneyImage text="Mickey & Minnie's Surprise Celebration - Join the fun before the party ends September 30,2019" image="./src/images/MickeyBirthday.png" color="1"  textsize="1.4"/>,
    document.getElementById('disneyElement2')
)
ReactDOM.render(
    <DisneyImage text='Disney Resort Hotel Guests - Enjoy "extra" Extra Magic Hours at Star Wars`s Edge, September 1 through November 2, 2019' image="./src/images/People1.png" color="2"  textsize="1.4"/>,
    document.getElementById('disneyElement3')
)
ReactDOM.render(
    <DisneyImage text='Epcot International Food & Wine Festival - August 29 to November 23, 2019' image="./src/images/People2.png" color="2"  textsize="1.4"/>,
    document.getElementById('disneyElement4')
)
