import React from "react";
import Popup from "reactjs-popup"
import style from './popupAvis.module.css'

const PopupAvis = () => {
    


    const contentStyle = {
        height: "20%",
        maxWidth: "50%",
        width: "45%",
        border: "1px solid #178ca4",
        borderRadius: "10%",
        opacity: "90%",
        color: "#178ca4",
        backgroundColor: "white"
    };

    return (
        
        <Popup
            trigger={<button className= {style.button} > Open Modal </button>}
            modal
            contentStyle={contentStyle}
        >
            {close => (
            <div className= {style.modal} >
                <a className= {style.close}  onClick={close}>
                &times;
                </a>
                <div className= {style.header} > Avis </div> 
                <div className= {style.txtReponse} > {msg} </div>   
            </div>
            )}
        </Popup>
    )
}

export default PopupAvis