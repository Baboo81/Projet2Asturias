import ImageSlider from "../../components/ImageSlider";
import Navbar from "../../components/Navbar";
import style from './avisiter.module.css';

const Avisiter = () => {
    const images = [
        {
            id : 1,
            src : "./img/slider/gijon.JPG",
            alt : "Gijon"
        },
        {
            id : 2,
            src : "./img/slider/gijon2.JPG",
            alt : "Gijon"
        },
        {
            id : 3,
            src : "./img/slider/gijon3.JPG",
            alt : "Gijon"
        },
        {
            id : 4,
            src : "./img/slider/cascada1.jpg",
            alt : "cascade"
        },
        {
            id : 5,
            src : "./img/slider/laguna.JPG",
            alt : "lagune"
        },
        {
            id : 6,
            src : "./img/slider/mar.jpg",
            alt : "la mer"
        },
        {
            id : 7,
            src : "./img/slider/picos.JPG",
            alt : "Le parc naturel des Pics D'Europe"
        },
        {
            id : 8,
            src : "./img/slider/picos2.JPG",
            alt : "Le parc naturel des Pics D'Europe"
        }
    
    ];

    return (
        <> 
            <ImageSlider images={images} />
        </>
    )
}

export default Avisiter;