import './styles/main.scss';
import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx';
import AnimatedBack from './components/AnimatedBack.jsx';
import DisneyImage from './components/DisneyImage.jsx';
import VacationsButtons from './components/VacationsButtons.jsx';



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
ReactDOM.render(
    <VacationsButtons icon="fa fa-male" text="Generations"/>,
    document.getElementById('Generations')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-users" text="Big Groups"/>,
    document.getElementById('BigGroup')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-child" text="My Family"/>,
    document.getElementById('Family')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-heart" text="Romantic"/>,
    document.getElementById('Romantic')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-credit-card" text="Splurge"/>,
    document.getElementById('Splurge')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-wheelchair-alt" text="Active"/>,
    document.getElementById('Active')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-cutlery" text="Special Occasion"/>,
    document.getElementById('Special')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-usd" text="Budget"/>,
    document.getElementById('Budget')
)
ReactDOM.render(
    <VacationsButtons icon="fa fa-beer" text="Relaxed"/>,
    document.getElementById('Relaxed')
)
ReactDOM.render(
    <DisneyImage text='Interact with the Theme Parks in a Whole New Way' image="./src/images/App.png" color="2"  textsize="2" subtitle="Play Disney Parks Mobile App"/>,
    document.getElementById('appDisney')
)
ReactDOM.render(
    <DisneyImage text='Shop Thousands of Authentic' image="./src/images/Products.png" color="2"  textsize="2" subtitle="Walt Disney World Products"/>,
    document.getElementById('productDisney')
)
ReactDOM.render(
    <DisneyImage text='Make More Memories' image="./src/images/Photo.png" color="2"  textsize="2" subtitle="Get All your Disney PhotoPass photos, videos and even more benefits included for one price."/>,
    document.getElementById('photoDisney')
)
