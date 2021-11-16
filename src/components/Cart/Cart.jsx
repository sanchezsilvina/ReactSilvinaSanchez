import {useCartContext } from '../context/cartContext';
import {Button} from 'react-bootstrap'

const Cart=()=>
{
     const { cartList } = useCartContext();
     console.log ('cart')
     console.log (cartList)
    return (
        <>
            <h4>Mi carrito</h4>
            
            {/* {(count)? `Cantidad agregada ${count}` : '' }  */}

            <table class="table table-striped mt-5">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">SubTotal</th>
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
                            </tr>
                             )}
            </tbody>
            </table>
            <div className="d-block text-right">
                {/* Total: {cartList.reduce((sum, item) => sum + parseInt(item.cantidad))} */}
            </div>
            <div className="d-block">
                <Button variant="light" >Continuar Comprando</Button>
            </div>
            <div className="d-block">
                <Button variant="primary">Finalizar Compra</Button>
            </div>
            
        </>
    );
}

export default Cart