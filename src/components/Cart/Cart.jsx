import {useCartContext } from '../context/cartContext';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getFirestone } from '../Service/getFirestore';
import firebase  from 'firebase';
import {useState} from "react";
import './cart.css';
import { MdDeleteSweep } from 'react-icons/md';

const Cart=()=>
{
     const { cartList, total, clear, cantTotal, RemoveItem} = useCartContext();
     const [apenom, setApenom]=useState('')
     const [mail, setMail]=useState('')
     const [telef, setTelef]=useState('')
     const [mail2, setMail2]=useState('')
     

     const handlerRemoveItem=(id)=>
     {
        RemoveItem(id)
     }


     const GenerarOrden=()=>
     {
 
         let orden= {}
         orden.fecha=firebase.firestore.Timestamp.fromDate(new Date());
         orden.comprador={nombre: apenom , email: mail , tel: telef}
         orden.total=total
         orden.items= cartList.map
         (   cartitem=>
             {
                const id= cartitem.id;
                const titulo= cartitem.titulo
                const precio= cartitem.precio
                const cantidad= cartitem.cantidad
                 return {id, titulo, precio}
             }
         )

          const dbQuery=getFirestone()

          dbQuery.collection('orders').add(orden)
          .then(
              resp =>  alert(`Su Nro de Orden de Compra es: ${resp.id}`)
              
              )
          .catch(err => alert(`Ha ocurrido un error: ${err}`))

            console.log('cartList')
            console.log(cartList)
             const itemToUpdate=dbQuery.collection('items').where(
                  firebase.firestore.FieldPath.documentId(),'in', cartList.map(item => item.id)
              )
              
              console.log('itemToUpdate')

              console.log(itemToUpdate)

              const batch=dbQuery.batch();
              
              itemToUpdate.get().then( collection=>{collection.docs.forEach(docSnapshot => {
                  batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - cartList.find(item => item.id).cantidad
                              })
                                                                            })
                batch.commit().then()
                })

                clear()



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
            <div className="d-inline-block w-100">
                <div className="d-inline-block w-70 mt-2" >
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
                            
                            <tr >
                                <th key={item.id} scope="row">{index+1}</th>
                                <td>{item.titulo}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio}</td>
                                <td>{parseInt(item.cantidad) * parseFloat(item.precio)}</td>
                                <td><Button onClick={()=>handlerRemoveItem(item.id)}><MdDeleteSweep size={20} /></Button></td>
                                {/* <td><Button color="danger" onClick={()=>handlerRemoveItem(item.id)} >Eliminar</Button></td> */}
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

                <div className="border border-secondary rounded p-4 back d-inline-block w-30 ml-4 mt-2">
                    <form>
                        <h5 >Finalizar Compra</h5>

                        <div className="form-group mt-4">
                            <input type="text" className="form-control" placeholder="Ingrese su apellido y nombre" value={apenom} onChange={event =>setApenom(event.target.value)}/>
                        </div>

                        <div className="form-group mt-2">
                            <input type="email" className="form-control" placeholder="Ingrese su email" value={mail} onChange={event =>setMail(event.target.value)} />
                        </div>

                        <div className="form-group mt-2">
                            <input type="email2" className="form-control" placeholder="Confirme su email" value={mail2} onChange={event =>setMail(event.target.value2)} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ingrese su telefono" value={telef} onChange={event =>setTelef(event.target.value)} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block" onClick={()=>GenerarOrden()} >Finalizar</button>
                    </form>
                </div>
            </div>
            }
        </>
    );
}

export default Cart