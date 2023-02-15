import ImageSlider from "../../components/ImageSlider";
import NavBar from "../../components/NavBar";
import style from './avisiter.module.css';

const Avisiter = () => {
    const images = [
        {
            id : 1,
            src : "./img/img1.jpg",
            alt : "Image 1"
        },
        {
            id : 2,
            src : "./img/img2.jpg",
            alt : "Image 2"
        },
        {
            id : 3,
            src : "./img/img3.jpg",
            alt : "Image 3"
        }
    
    ];

    return (
        <> 
            <ImageSlider images={images} />
        </>
    )
}

export default Avisiter;