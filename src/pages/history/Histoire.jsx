import style from './histoire.module.css';
import NavBar from "../../components/NavBar";
import { Component } from 'react';
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";

const Histoire = () => {

    return (
        <div>
            <h2>Un peu d'histoire</h2>
            <Card />
           
        </div>
    )
}

export default Histoire;