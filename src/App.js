import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import  Cart  from './components/Cart/Cart';
import './App.css';
import CartContextProvider from './components/context/cartContext';

function App() {
  return (
  <CartContextProvider>
      <BrowserRouter>
       <NavBar/>
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
      </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
