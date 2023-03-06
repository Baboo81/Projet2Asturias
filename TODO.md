/**import React from "react";
import Popup from "reactjs-popup"


const PopupAvis = (props) => {
    
    const [ msg ] = props;

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

export default PopupAvis */

/*Style popup*/
/*.example-warper {
    width: 100%;
    padding: 20px 5%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border: 1px #cfcece dashed;
  }
  
  .button {
    font-family: "Roboto", Arial, sans-serif;
    color: #000000;
    cursor: pointer;
    padding: 0px 30px;
    display: inline-block;
    margin: 10px 15px;
    text-transform: uppercase;
    line-height: 2em;
    letter-spacing: 1.5px;
    font-size: 1em;
    outline: none;
    position: relative;
    font-size: 14px;
    border: 3px solid #cfcece;
    background-color: #ffffff;
    border-radius: 15px 15px 15px 15px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  
  .button:hover,
  .button.hover {
    border-color: #2980b9;
  }
  /*
  card 
  */
 /*.card {
    font-size: 12px;
  }
  .card > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 14px;
    text-align: center;
  }
  
  .modal {
    font-size: 12px;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid #178ca4;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    margin: auto;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }
  
  .example-warper-start {
    width: 100%;
    padding: 20px 5%;
    display: flex;
    flex-wrap: wrap;
    border: 1px #cfcece dashed;
  }
  
  .menu {
    width: 200px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
  }
  .menu-item {
    cursor: pointer;
    padding: 5px;
    height: 28px;
    border-top: 1px solid rgb(187, 187, 187);
  }
  .menu-item:hover {
    color: #2980b9;
  }

  /*Style txtreponse*/

  /*.txtReponse
  {
    font-size: 1.5em;
    color: #178ca4;
  }
  
