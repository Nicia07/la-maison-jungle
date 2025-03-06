//Import le css de cart
import '../styles/cart.css'

function Cart() {
    let monsteraPrix = 8;
    let lierrePrix = 10;
    let bouquetFleurPrix = 15;

    //Je créer une instance de l'objet de Map()
const mapFleur = new Map();

mapFleur.set("age", 14);

console.log("Map Fleur:", typeof mapFleur);
console.log(mapFleur.get("age"));

console.log(mapFleur);

const tableauFleur = ["Tulipe", "Rose", "Anfou"];
// je crée une variable qui va stoker le resultat issu du maping (map)

let flera = tableauFleur.map((fleur)=>fleur.toUpperCase());
console.log(flera); 


    //Liste des articles 
    return(
        <div>
            <h3>Mon panier</h3>
            <ul>
                <li>Monstera : {monsteraPrix}  € </li>
                <li>Lierre : {lierrePrix} € </li>
                <li>Bouquet de fleur : {bouquetFleurPrix} € </li>
            </ul>
            Total : {monsteraPrix + lierrePrix + bouquetFleurPrix} € 
        </div>
    );
}

export default Cart;