import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import TestPokeApi from './components/TestPokeApi'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Acá irían las carts con los libros según la selección del usuario" />
      <TestPokeApi/>
    </div>
  );
}

export default App;
