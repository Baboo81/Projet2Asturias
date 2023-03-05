import style from './avis.module.css';
import Navbar from "../../components/Navbar";
import { Component, useState } from 'react';
import { useForm } from "react-hook-form";
import { render } from '@testing-library/react';






const Avis = () => {

    const [inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    function handleSubmit(e){
        e.preventDefault()
        console.log(inputs)
        soumettre()
    }

    function soumettre() {

        //inputs contient un objet de form
       let reponseNon = 0;
       let reponseOui = 0;

       
        if (inputs.q1 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q1 === 'n') {
            reponseNon++;
        }
    
        if (inputs.q2 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q2 === 'n') {
            reponseNon++;
        }
    
        if (inputs.q3 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q3 === 'n') {
            reponseNon++;
        }
    
        if (inputs.q4 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q4 === 'n') {
            reponseNon++;
        }
    
        if (inputs.q5 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q5 === 'n') {
            reponseNon++;
        }
    
        if (inputs.q6 === 'o') {
            reponseOui++;
        }
    
        else if (inputs.q6 === 'n') {
            reponseNon++;
        }
            
        
         
        console.log(reponseOui);
        console.log(reponseNon);

       
    
        if (reponseNon === 0 && reponseOui === 6) {
          
             //alert("Vous êtes enchanté !")
             return (
                <div className= {style.popup}>
                    <p>Vous êtes enchanté !</p>
                </div>
             )
     
        } else if (reponseNon === 1 && reponseOui === 5) {
          
             //alert("Vous avez fortement apprécié votre visite !")
             return (
                <div className= {style.popup}>
                    <p>Vous êtes enchanté !</p>
                </div>
             )
        
        } else if (reponseNon === 2 && reponseOui === 4) {
            
               //alert("Vous avez  apprécié votre visite !")
               return (
                <div className= {style.popup}>
                    <p>Vous êtes enchanté !</p>
                </div>
             )
            
        } else if (reponseNon === 3 && reponseOui === 3) {
            
                //alert("Vous êtes mitigé !")
                return (
                    <div className= {style.popup}>
                        <p>Vous êtes enchanté !</p>
                    </div>
                 )
          
        } else if (reponseNon === 4 && reponseOui === 2) {
            
               //alert("Votre visite ne vous a pas satisfait !")
               return (
                <div className= {style.popup}>
                    <p>Vous êtes enchanté !</p>
                </div>
             )
            
        } else if (reponseNon === 5 && reponseOui === 1) {
            
                //alert("Votre visite vous a déçu !") 
                return (
                    <div className= {style.popup}>
                        <p>Vous êtes enchanté !</p>
                    </div>
                 )
                
        } else if (reponseNon === 6 && reponseOui === 0) {
            
                //alert("Votre visite vous a terriblement déçu !")
                return (
                    <div className= {style.popup}>
                        <p>Vous êtes enchanté !</p>
                    </div>
                 )
            }
     }
    
    
    

    return (
        <div className= {style.container}>
            
                <form onSubmit={handleSubmit}>
                    <div className= {style.q1}>
                        <label htmlFor="avis"> Avez-vous apprécié votre visite ?</label><br />
                        <input required name="q1" value="o" onChange={ handleChange } type="radio" />Oui
                        <input name="q1" value="n" onChange={ handleChange } type="radio" />Non<br />
                    </div>


                    <div className= {style.q2}>
                        <label htmlFor="avis"> Avez-vous apprécié le contenu de ce site ?</label><br />
                        <input required name = "q2" value = "o" onChange={ handleChange } type = "radio" />Oui
                        <input name = "q2" value = "n" onChange={ handleChange } type = "radio" />Non<br />
                    </div>

                    <div className= {style.q3}>
                        <label htmlFor="avis"> Est-ce que la visite de ce site vous a donné envie de découvrir cette région ?</label><br />
                        <input required name = "q3" value = "o" onChange={ handleChange } type = "radio" />Oui
                        <input name = "q3" value = "n" onChange={ handleChange } type = "radio" />Non<br />
                    </div>

                    <div className= {style.q4}>
                        <label htmlFor="avis"> Avez-vous trouvé le design appréciable ?</label><br />
                        <input required name = "q4" value = "o" onChange={ handleChange } type = "radio" />Oui
                        <input name = "q4" value = "n" onChange={ handleChange } type = "radio" />Non<br />
                    </div>

                    <div className= {style.q5}>
                        <label htmlFor="avis"> Avez-vous des suggestions ?</label><br />
                        <input required name = "q5" value = "o" onChange={ handleChange } type = "radio" />Oui
                        <input name = "q5" value = "n" onChange={ handleChange } type = "radio" />Non<br />
                    </div>

                    <div className= {style.q6}>
                        <label htmlFor="avis">Est-ce que les informations présentées sont suffisament claires ?</label><br />
                        <input required name = "q6" value = "o" onChange={ handleChange } type = "radio" />Oui
                        <input name = "q6" value = "n" onChange={ handleChange } type = "radio" />Non<br />
                    </div>

                    <div className= {style.btn}>
                        <button type="submit" className= {style.glowOnHover}>Envoyer</button>
                    </div>
                </form>
            </div>
    )
}

export default Avis;

