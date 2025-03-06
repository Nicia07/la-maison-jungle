import logo from '../logo.svg';//on importe un logo dans le
import '../styles/App.css';
import Banner from './banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';

/*Nous créons un composant <App/>
C'est le composant principal de notre appli  */
function App() {
  return (
  <div>
    <Banner>
      <img src={logo} alt="logo de la maison jungle" className='lmj-logo'/>
      <h1 className="lmj-title">La maison jungle</h1>
    </Banner>
    <Cart/>
    <ShoppingList/>
    </div>);
}
// J'export le composant 
export default App;
