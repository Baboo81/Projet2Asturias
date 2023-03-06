import style from './gastronomie.module.css';
import Navbar from "../../components/Navbar";
import { Component } from 'react';
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";

const Gastronomie = () => {

    return (
        <>
            <img className='logo' src='../../img/logo3.svg' alt='picto' />
            <h2>Les incontournables</h2>

            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "90%",
                height : "50%",
                marginRight : "0%",
                marginLeft : "5%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <img src="../../img/gastronomie/churros.jpg" alt="représentation de churros" />
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "90%",
                height : "50%",
                marginRight : "0%",
                marginLeft : "5%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <img src="../../img/gastronomie/cidre.jpg" alt="représentation du cidre" />
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "90%",
                height : "50%",
                marginRight : "0%",
                marginLeft : "5%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <img src="../../img/gastronomie/fabada.jpg" alt="représentation de la fabada" />
            
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "90%",
                height : "50%",
                marginRight : "0%",
                marginLeft : "5%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <img src="../../img/gastronomie/fromages.jpg" alt="représentation de fromages" />
            
            </Card>
           
        </>
    )
}

export default Gastronomie