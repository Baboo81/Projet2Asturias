import React from "react";
import { animation } from "react-reveal/globals";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";

const AnimateTitle = () => {
    state = { animation : "zoom" };

    handleAnimation = animation => {
        this.setState ({ animation });
    };

    getText = () => {
        return(
            <div
                style = {{
                    marginTop : "150px",
                    fontSize : "25px",
                    color : "teal",
                    fontWeight : "bold"
                }}
            >
                Hello, les grenouilles !
            </div>
        );
    };

    render() {
        let comp;
    switch (this.state.animation) {
      case "flip":
        comp = <Flip>{this.getText()}</Flip>;
        break;
      case "zoom":
        comp = <Zoom>{this.getText()}</Zoom>;
        break;
      case "bounce":
        comp = <Bounce>{this.getText()}</Bounce>;
        break;
      case "roll":
        comp = <Roll>{this.getText()}</Roll>;
        break;
      default:
        comp = <Zoom>{this.getText()}</Zoom>;

    }

    return (

    )
}

export default AnimateTitle;