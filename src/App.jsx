import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import TestBoredApi from './components/TestBoredApi'
import TestPokeApi from './components/TestPokeApi';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Acá irían las carts con los libros según la selección del usuario" />
      <TestBoredApi/>
      <TestPokeApi/>
    </div>
  );
}

export default App;
