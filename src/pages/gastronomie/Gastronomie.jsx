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
          <section className= {style.churros} >
            <Card 
            style ={{
                width : "100%",
                height : "100%",
                padding : "1%",
                backgroundColor : "black",
                opacity : "82%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            
            <h3>Les churros</h3>   
            <img className= {style.dish1} src="../../img/gastronomie/churros.jpg" alt="représentation de churros" />
            
            </Card>
           </section>

           <section className= {style.cidre} >
             <Card 
            style ={{
                width : "100%",
                height : "100%",
                padding : "1%",
                backgroundColor : "black",
                opacity : "82%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <h3>Le cidre</h3>
            <img className= {style.dish2} src="../../img/gastronomie/cidre.jpg" alt="représentation du cidre" />
            
            </Card>
         </section>
           
         <section className= {style.fabada} >
            <Card 
            style ={{
                width : "100%",
                height : "100%",
                padding : "1%",
                backgroundColor : "black",
                opacity : "82%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >

            <h3>La potée asturienne</h3>
            <img className= {style.dish3} src="../../img/gastronomie/fabada.jpg" alt="représentation de la fabada" />
            
            </Card>
         </section>
            
         <section className= {style.fromages} >
            <Card 
            style ={{
                width : "100%",
                height : "100%",
                padding : "1%",
                backgroundColor : "black",
                opacity : "82%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >
            <h3>Les fromages</h3>  
            <img className= {style.dish4} src="../../img/gastronomie/fromages.jpg" alt="représentation de fromages" />
            
            </Card>
        </section>

        <section className= {style.poulpe} >
            <Card 
            style ={{
                width : "100%",
                height : "100%",
                padding : "1%",
                backgroundColor : "black",
                opacity : "82%",
                cursor : "pointer"
            }}
            onClick= {() => console.log("Card clicked")}
            >
            <h3>Le poulpe</h3>  
            <img className= {style.dish5} src="../../img/gastronomie/pulpo.jpg" alt="représentation de poulpe" />
            
            </Card>
        </section>
            
        
        </>
        
    )
}

export default Gastronomie