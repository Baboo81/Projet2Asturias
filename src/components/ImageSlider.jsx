import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './slider.module.css';
import React from "react";

const ImageSlider = ({images}) => {

    const settings = 
    {
        infinite : true,
        dots : true,
        slidesToShow : 1,
        slideToScroll : 1,
        lazyLoad : true,
        autoplay : true,
        autoplaySpeed : 4000,
    };

    return (
        <>
            <div className= {style.tag}>
               <h4>De Gijon aux Pics d'Europe</h4>
            </div>
            <div className= {style.imgslider} >
                <Slider {...settings} >
                    {images.map((item) => (
                        <div key={item.id} >
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ) )}
                </Slider>
            </div>
        </>
    )
}

export default ImageSlider;