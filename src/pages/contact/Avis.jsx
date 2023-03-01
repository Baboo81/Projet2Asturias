import style from './avis.module.css';
import Navbar from "../../components/Navbar";
import { Component } from 'react';
import { useForm } from "react-hook-form"


const Avis = () => {

    return (
        <div className= {style.container}>
            
                <form>
                    <div>
                        <label htmlFor="avis"> Avez-vous apprécié votre visite ?</label><br />
                        <input name="q1" value="o" type="radio" />Oui
                        <input name="q1" value="n" type="radio" />Non<br />
                    </div>


                    <div>
                        <label htmlFor="avis"> Avez-vous apprécié le contenu de ce site ?</label><br />
                        <input name = "q2" value = "o" type = "radio" />Oui
                        <input name = "q2" value = "n" type = "radio" />Non<br />
                    </div>

                    <div>
                        <label htmlFor="avis"> Est-ce que la visite de ce site vous a donné envie de découvrir cette région ?</label><br />
                        <input name = "q3" value = "o" type = "radio" />Oui
                        <input name = "q3" value = "n" type = "radio" />Non<br />
                    </div>

                    <div>
                        <label htmlFor="avis"> Avez-vous trouvé le design appréciable ?</label><br />
                        <input name = "q4" value = "o" type = "radio" />Oui
                        <input name = "q4" value = "n" type = "radio" />Non<br />
                    </div>

                    <div>
                        <label htmlFor="avis"> Avez-vous des suggestions ?</label><br />
                        <input name = "q5" value = "o" type = "radio" />Oui
                        <input name = "q5" value = "n" type = "radio" />Non<br />
                    </div>

                    <div>
                        <label htmlFor="avis">Est-ce que les informations présentées sont suffisament claires ?</label><br />
                        <input name = "q6" value = "o" type = "radio" />Oui
                        <input name = "q6" value = "n" type = "radio" />Non<br />
                    </div>

                    <div>
                        <button className= {style.btn} onclick="soumettre()">Soumettre</button>

                    </div>
                </form>
            </div>
    )
}

export default Avis;

