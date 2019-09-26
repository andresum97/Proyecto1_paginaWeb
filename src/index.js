import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import AnimatedBack from './components/AnimatedBack.jsx';


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
ReactDOM.render(
    <AnimatedBack  emphazed="Star Wars" text=": Galaxy's Edge Is Now Open at Disney's Hollywood Studios" text2="Play Full Video" text3="Learn More"/>,
    document.getElementById('root2')
)
