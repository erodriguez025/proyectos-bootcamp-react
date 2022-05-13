import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Acá irían las carts con los libros según la selección del usuario" />
      <ItemCount/>
    </div>
  );
}

export default App;
