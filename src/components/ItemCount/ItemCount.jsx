import { Button  } from 'react-bootstrap';
import { useState } from 'react';

 const ItemCount=( {onAdd, stock , initial })=>
{

    const [count, setCount] = useState(initial)

    const suma=()=>
    {
         (count<stock)? setCount(count+1): alert('Stock Superado')
    } 

    const resta=()=>
    {
         if (count>initial) 
         {
            setCount(count-1)
         }
        
    } 
    

    return (
          <div className="contenedor align-center"> 
               <div className="row">
                    <div className="col-12 mt-2">
                         <Button className="d-inline btn btn-success"  onClick={suma} >+</Button>
                         <h6 className="ml-2 mr-2 d-inline"> {count}</h6>
                         <Button className="d-inline btn btn-success" onClick={resta} >-</Button>
                    </div>
               </div>
               <div className="row">
                    <div className="col-12 mt-2">
                         <Button className="center-block" onClick={onAdd}>Agregar al Carrito</Button>
                    </div>
              </div>
          </div>
    );
}
export default ItemCount