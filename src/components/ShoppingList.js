// On a importer notre plante liste 
import { planteListe } from "../data/planteListe";
import "../styles/shoppingList.css";
//Le composant ShoppingList va regrouper ma list de courses

function ShoppingList(){
    //cree une liste de courses sous forme de tableau
    let listeCourse = ["monstera", "rosier","acasia", "palmier"];
    
    // J'ai creer un tableau qui regroupe toutes les categorie des plantes  
    const categories=  planteListe.reduce((cat,plante) => 
        cat.includes(plante.category) ? cat : cat.concat(plante.category),
     []
    );
    console.log("categories plantes:", categories);

    return (
        <div>
            <h3>Liste des courses</h3>

            <ul>
                {
                listeCourse.map((plante, index) => ( 
                    <li key={`${index}`}> {index} - {plante}</li>// Comment recuperer l'index (monstera)
                    
                ))
                }
            </ul>
            
            
            {/*Je veux afficher la categories de la plante.
            Et pour cela je veux utiliser quelle methode?
             */}
            <ul>
                <h6>Les catégories des plantes</h6>
            </ul>
                {categories.map((maCategories) => (
                    <li key={maCategories}>{maCategories}</li>
                ))}

                <h3>Nouvelle liste de plante</h3>
            <ul className="lmj-plant-list">
                
                {planteListe.map((plante) => (
                    <li key={plante.id} className="lmj-plant-item"> {plante.name} - {plante.category}</li>
                ))
                }
                
                
            </ul>
        </div>  
    );
}

export default ShoppingList; 
