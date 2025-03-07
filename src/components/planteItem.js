//Dans ce composant ici, on va gérer chaque plante individuel
import CarScale from "./CareScale"

function planteItem({name, id, water, light}) {
    return(
        <li className="lmj-plant">
            <img className="lmj-plat-item-cover"
                src="" alt={`${name}`}/>
            {name}

            <div>
                <CarScale typeDeCulture={water} typePlante="eau"/>
                <CarScale typeDeCulture={light} typePlante="lumiere"/>
                
            </div>
        </li>
    )

}

export default planteItem