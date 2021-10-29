import { Button  } from 'react-bootstrap';
import { useState, useEffect } from 'react'

 const ItemCount=( {valmin,valmax})=>
{

    const [Count, setCount] = useState(0)
    const [HayStock, setHayStock] = useState(false)
    const [Input, setInput] = useState(1)

     const OnAdd=()=>
     {
         var total=parseInt(Count) + parseInt(Input);
         setCount(total);
     }

    const ConsultaHayStock=()=>
    {
         var total=parseInt(Count) + parseInt(Input);
         if (total <=parseInt(valmax) & total>=parseInt(valmin))
         {
            setHayStock(!HayStock);
         }
     
    } 

    useEffect(() => {
       
         OnAdd();
        
     }, [HayStock])
      
    

    return (
        <>
            <div className="contenedor align-center"> 
               <div className="row">
                   <div className="col-12 mt-2">
                         
                        <input type="number" id="numero" defaultValue='1' onChange={event => setInput(event.target.value)}/>
                   </div>
               </div>
               <div className="row">
                   <div className="col-12 mt-2">
                        <Button variant="primary" onClick={ConsultaHayStock} >Agregar al Carrito</Button>
                   </div>
               </div>
               <div className="row">
                   <div className="col-12">
                     Cantidad Total (entre 1-15) {Count}
                   </div>
               </div>
           </div> 
          
        </>
    )
}
export default ItemCount