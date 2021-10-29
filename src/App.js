import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CarrouselImagenes } from './components/CarrouselImagenes/CarrouselImagenes';


function App() {
  return (
    <div className="App container mt-8">
      <div className="row mx-0 px-0 mt-4">
        <div className="col-md-3 text-left"><h6 className="Fuente-Logo">Entre Verde</h6></div>
         <div className="col-md-9 text-right"><NavBar/></div>
      </div>  
      <div className="row mx-0 px-0 mt-4">
        <div className="col-md-12"><ItemListContainer texto="Ingrese la cantidad (entre 1-15)"/></div>
      </div>
      <div className="row mx-0 px-0 mt-4">
        {/* <div className="col-md-12"><img className="App-Fondo" src={fondo} alt="Entre Verdes"/></div> */
        <div className="col-md-12"><CarrouselImagenes/></div>}
      </div>
    </div>
  );
}

export default App;
