import {useCartContext } from '../context/cartContext';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useState} from "react";
import { MdDeleteSweep } from 'react-icons/md';
import { GenerarOrden } from './cartFirebase';

const Cart=()=>
{
    const { cartList, total, clear, cantTotal, RemoveItem} = useCartContext();
    const [apenom, setApenom]=useState('')
    const [mail, setMail]=useState('')
    const [telef, setTelef]=useState('')

    const handlerRemoveItem=(id)=>
    {
        RemoveItem(id)
    }


    const handlerGenerarOrden=()=>
    {
        
        GenerarOrden(apenom,mail,telef)
    }   


    return (
        <>

            <h4 className="text-center ml-2">Mi carrito</h4>     

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
            <div className ="container-fluid">
                <div className ="row">
                <div className="col-md-8 ml-2 mr-2 mt-2" >
                    <table className="table">
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
                            
                            <tr key={item.id}>
                                <th  scope="row">{index+1}</th>
                                <td>{item.titulo}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio}</td>
                                <td>{parseInt(item.cantidad) * parseFloat(item.precio)}</td>
                                <td><Button onClick={()=>handlerRemoveItem(item.id)}><MdDeleteSweep size={20} /></Button></td>
                            </tr>
                                )}
                    </tbody>
                    <tfoot >
                        <tr>
                            <td colSpan="5"><strong>Total </strong></td>
                            <td className="text-right"><strong>$ {total}</strong></td>
                        </tr>
                    </tfoot>
                    
                    </table>
                    
                    <Link to="/">
                        <div className="d-block mt-2">
                            <Button variant="light" >Continuar Comprando</Button>
                            <Button className="text-left ml-2 mr-2" onClick={clear} variant="light">Limpiar Carrito</Button> 
                        </div>
                    </Link>
                </div> 

                <div className="col-md-3 border border-secondary rounded p-4 mr-2 mt-2">
                    <form>
                        <h5 >Finalizar Compra</h5>
                        <div className="form-group mt-4">
                            <input type="text" className="form-control" placeholder="Ingrese su apellido y nombre" value={apenom} onChange={event =>setApenom(event.target.value)}/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="email" className="form-control" placeholder="Ingrese su email" value={mail} onChange={event =>setMail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ingrese su telefono" value={telef} onChange={event =>setTelef(event.target.value)} />
                        </div>
                       <button type="submit" className="btn btn-primary btn-block" onClick={()=>handlerGenerarOrden()} >Finalizar</button>
                    </form>
                </div>
            </div>
            </div>
            }
        </>
    );
}

export default Cart