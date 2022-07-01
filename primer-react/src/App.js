import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';

function App() {
  return (
    <div className="App">
      <h1>Titulos de peliculas</h1>
      <Componente1 pelicula={"La princesa y el sapo"}/>
      <Componente2 pelicula={"Son como niños"}/>
      <Componente3 pelicula={"¿Y dónde estan las rubias?"}/>

    </div>
  );
}

export default App;
