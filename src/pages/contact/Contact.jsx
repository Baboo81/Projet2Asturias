import style from './contact.module.css';
import Navbar from "../../components/Navbar";
import { Component } from 'react';
import "@sl-codeblaster/react-3d-animated-card";
import AnimatedCard from "@sl-codeblaster/react-3d-animated-card";
import Card from "react-animated-3d-card";

const Contact = () => {

    return (
        <>
            <Card 
            style ={{
                display : "flex",
                backgroundColor : "#178ca4",
                width : "900px",
                height : "500px",
                marginLeft : "10%",
                opacity : "50%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            />
        </>
    )
}

export default Contact;