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
                width : "100%",
                height : "100%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!</p>    
            <img className= {style.dish1} src="../../img/gastronomie/churros.jpg" alt="représentation de churros" />
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                width : "100%",
                height : "100%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!</p>
            <img className= {style.dish2} src="../../img/gastronomie/cidre.jpg" alt="représentation du cidre" />
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                width : "100%",
                height : "100%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!</p>
            <img className= {style.dish3} src="../../img/gastronomie/fabada.jpg" alt="représentation de la fabada" />
            
            </Card>

            <Card 
            style ={{
                display : "flex",
                width : "100%",
                height : "100%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, molestiae!</p>    
            <img className= {style.dish4} src="../../img/gastronomie/fromages.jpg" alt="représentation de fromages" />
            
            </Card>
           
        </>
    )
}

export default Gastronomie