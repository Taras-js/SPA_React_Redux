import React, {} from 'react';
import  "../Slider/Slider.module.css";
// import {onClickButtonNext, onClickButtonPrev} from "./slider_oldscull";

const Slider = () => {

    return (

        < div
            className = "taras-slider" >
            < button
                className = "prev-button"
                id = "onclick-prev" > ^ < /button>
            <img src="" className="current-photos" id="item-img" alt="disabled"/>
            <button  className="next-button" id="onclick-next"> ^ </button>

        </div>

    );

}

export default Slider;



