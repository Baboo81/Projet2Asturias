import style from './homePage.module.css';
import Navbar from "../../components/Navbar"
import Reveal from "../../components/AnimateTitle";

const HomePage = () => {
    

    return (
        <>
            <img className='logo' src='../../img/logo2.svg' alt='picto' />
            <h1></h1>
            <Reveal />
        </>
            
        
    )        
}



export default HomePage;