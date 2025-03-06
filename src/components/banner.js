//importe le styles bnner.js
import '../styles/banner.css';

import logo from '../assets/Logo.png'



//Je crée mon composant Banner
function Banner () {
    let titre = "la maison jungle "
    return (
        /*L'attribut "className "  permet d'attribuer une une classe à mon élement 
        En HTML, on utilise l'attribut "classe".
        En REACT, on utilse l'attribut "classeName" 
        */
    <div className="lmj-banner">
        <img src={logo} alt="logo de la maison jungle" className='lmj-logo'/>
        <h1>{titre.toUpperCase()}</h1>
    </div>
    )
    

}

//J'exporte mon composant Banner
export default Banner;
