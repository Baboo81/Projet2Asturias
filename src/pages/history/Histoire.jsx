import style from './histoire.module.css';
import Navbar from "../../components/Navbar";
import { Component } from 'react';
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";

const Histoire = () => {

    return (
        <div>
            <img className='logo' src='../../img/logo2.svg' alt='picto' />
            <h2>Un peu d'histoire</h2>
            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#f76566",
                width : "450px",
                height : "300px",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            />
           
        </div>
    )
}

export default Histoire;