import {useCartContext } from '../context/cartContext';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Cart=()=>
{
     const { cartList, total, clear, cantTotal, RemoveItem} = useCartContext();
      
     const handlerRemoveItem=(id)=>
     {
         RemoveItem(id)
     }

      return (
        <>

            <h4>Mi carrito</h4>
                   
            {/* {(count)? `Cantidad agregada ${count}` : '' }  */}

            {cantTotal===0? 
                <div>
                    <h6>No hay productos agregados en el carrito</h6>
                      <Link to="/">
                            <div className="d-block">
                                <Button variant="primary" >volver</Button>
                            </div>
                        </Link>
                </div>
                
            :
            <div>
                <div className="text-left ml-2">
                    <Button onClick={clear} variant="primary">Limpiar Carrito</Button>
                </div>   
                <table Key='123' className="table table-sm mt-5 ml-2 mr-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((item,index)=>  
                        
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{item.titulo}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.precio}</td>
                            <td>{parseInt(item.cantidad) * parseFloat(item.precio)}</td>
                            <td><Button color="danger" onClick={()=>handlerRemoveItem(item.id)} >Eliminar</Button></td>
                        </tr>
                            )}
                </tbody>
                <tfoot >
                    <tr>
                        <td colSpan="4"><strong>Total </strong></td>
                        <td className="text-right"><strong>$ {total}</strong></td>
                    </tr>
                </tfoot>
                
                </table>
                
                <div className="d-block mt-2">
                    <Button variant="primary">Finalizar Compra</Button>
                </div>  
                <Link to="/">
                    <div className="d-block mt-2">
                        <Button variant="light" >Continuar Comprando</Button>
                    </div>
                </Link>
            </div>
            }
           
   
        </>
    );
}

export default Cart