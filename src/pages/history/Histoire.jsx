import style from './histoire.module.css';
import Navbar from "../../components/Navbar";
import { Component } from 'react';
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";

const Histoire = () => {

    return (
        <>
            <img className='logo' src='../../img/logo3.svg' alt='picto' />
            <h2>Un peu d'histoire</h2>

            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "30%",
                height : "50%",
                marginLeft : "35%",
                opacity : "80%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            
            <p>
               La région des Asturies est appelée «Principauté des Asturies» («Principado de Asturias» en espagnol ou «Principáu d'Asturies» en asturien). 
               Les Asturies forment une communauté autonome au nord de l'Espagne, laquelle est limitée à l'ouest par la Galice, au sud par la Castille-et-León, 
               à l'est par Cantabrie, au nord par l'océan Atlantique (voir la carte détaillée de l'Espagne).
               Cette région de 10 604 km² (trois fois moindre que la Catalogne) n'est composée que d'une seule province et la capitale se nomme Uviéu (Oviedo en espagnol), 
               mais la ville la plus peuplée est Gijón (266 000, contre 201 000 pour la capitale).
               Le drapeau asturien représente, sur fond bleu, la croix de la Victoire, jaune, croisée, légèrement pattée et à branches inégales. 
               Il tire son origine de la bataille de Cuadonga (en 722) lorsque l'armée asturienne triompha sur les musulmans. 
            </p>
            </Card>
           
        </>
    )
}

export default Histoire;