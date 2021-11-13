import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Cart  from './components/Cart/Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-8">
        <div className="row mx-0 px-0 mt-4">
          <div className="col-md-3 text-left"><h6 className="Fuente-Logo">Entre Verde</h6></div>
          <div className="col-md-9 text-right"><NavBar/></div>
        </div>  
        <div className="row mx-0 px-0 mt-4 d-inline">
            <div className="col-md-12 d-inline">
            <Switch> 
                  <Route exact path='/'> 
                      <ItemListContainer texto="PRODUCTOS"/> 
                  </Route>
                  <Route exact path='/productos/:categoria'> 
                      <ItemListContainer texto="PRODUCTOS"/> 
                  </Route>
                  <Route exact path='/detail/:id'> 
                      <ItemDetailContainer/> 
                  </Route> 
                  <Route exact path='/cart/'> 
                      <Cart/> 
                  </Route> 
                  <Route exact path='/cart/:count'> 
                      <Cart/> 
                  </Route> 
            </Switch>
        </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
