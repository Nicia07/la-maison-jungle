//importe le styles bnner.js
import '../styles/banner.css';

import logo from '../assets/Logo.png'



//Je crée mon composant Banner
function Banner ({children}) {
    let titre = "la maison jungle "
    return (
        /*L'attribut "className "  permet d'attribuer une une classe à mon élement 
        En HTML, on utilise l'attribut "classe".
        En REACT, on utilse l'attribut "classeName" 
        */
    <div className="lmj-banner">
        {children}
    </div>
    )
    

}

//J'exporte mon composant Banner
export default Banner;
