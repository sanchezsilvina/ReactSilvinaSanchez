import {useCartContext } from '../context/cartContext';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { MdDeleteSweep } from 'react-icons/md';
import { getFirestone } from '../Service/getFirestore';
import firebase  from 'firebase';


const Cart=()=>
{
    const { cartList, total, clear, cantTotal, RemoveItem} = useCartContext();
    const [apenom, setApenom]=useState('')
    const [mail, setMail]=useState('')
    const [mail2, setMail2]=useState('')
    const [telef, setTelef]=useState('')
    const [texto, setTexto]=useState('')
    const [errores, setErrores]=useState([])
    const [titulo, setTitulo]=useState('')
    const [showModal, setShowModal]=useState(false)

    const handlerRemoveItem=(id)=>
    {
        RemoveItem(id)
    }


    const handlerGenerarOrden=()=>
    { 
        setShowModal(false)
        const errores= validar()
      
        if (errores.length ===0)
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
                    return {id, titulo, precio, cantidad}
                }
            )
    
            const dbQuery=getFirestone()
    
            dbQuery.collection('orders').add(orden)
            .then(
                resp =>  setTexto(`Gracias por su compra!!!. Su Nro de Orden es: ${resp.id}`),
                         setShowModal(true),
                         setTitulo('INFORMACION')
                )
            .catch(err => errores(`Ha ocurrido un error: ${err}`),
                          setShowModal(true),
                          setTitulo('ATENCION!!!!'))
            
                const itemToUpdate=dbQuery.collection('items').where(
                    firebase.firestore.FieldPath.documentId(),'in', cartList.map(item => item.id)
                )
                
                const batch=dbQuery.batch();
                
                itemToUpdate.get().then( collection=>{collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - cartList.find(item => item.id).cantidad
                                })
                                                                                })
                    batch.commit().then()
                    })

                clear()
        }
        else
        {
            setErrores(errores)
            setShowModal(true)
            setTitulo('ATENCION!!!')
        }
       
    }   

    const validar=()=> {
       let errors = []; 
      
       if (apenom==='') {  
        errors.push('Debe ingresar su nombre');
        }
        if (mail==='') {  
            errors.push( 'Debe ingresar su email');
            }
       if (mail !== mail2) {  
        errors.push('Los mails no coinciden');
        }

        if (telef==='') {  
            errors.push('Debe ingresar su telefono');
        }
        return errors;
      }


    return (
        <>

            <h4 className="text-center ml-2">Mi carrito</h4>     

            {cantTotal===0? 
                <div>
                     {(showModal)?  
                    <div className="border rounded mt-5 p-3 mb-2 bg-info text-white">
                        <div className="border-bottom mb-3">
                            {titulo}
                        </div>
                        {texto}
                    </div>: <h6>No hay productos agregados en el carrito</h6>}
                    
                    <Link to="/">
                        <div className="d-block">
                            <Button variant="secondary" >volver</Button>
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
                            <Button variant="secondary" >Continuar Comprando</Button>
                            <Button className="text-left ml-2 mr-2" onClick={clear} variant="secondary">Limpiar Carrito</Button> 
                        </div>
                    </Link>
                </div> 

                <div className="col-md-3 border border-secondary rounded p-4 mr-2 mt-2">
                        <h5 >Finalizar Compra</h5>
                        <div className="form-group mt-4">
                            <input required type="text" className="form-control" placeholder="Ingrese su apellido y nombre" value={apenom} onChange={event =>setApenom(event.target.value)}/>
                        </div>
                        <div className="form-group mt-2">
                            <input required type="email" className="form-control" placeholder="Ingrese su email" value={mail} onChange={event =>setMail(event.target.value)} />
                        </div>
                        <div className="form-group mt-2">
                            <input required type="email2" className="form-control" placeholder="Reingrese su email" value={mail2} onChange={event =>setMail2(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input required type="text"  className="form-control" placeholder="Ingrese su telefono" value={telef} onChange={event =>setTelef(event.target.value)} />
                        </div>
                        <button className="btn btn-primary btn-block" onClick={()=>handlerGenerarOrden()} >Finalizar</button>
                </div>
            </div>
                {(showModal)?  
                    <div className="border rounded mt-5 p-3 mb-2 bg-light text-dark">
                        <div className="border-bottom mb-2">
                            {titulo}
                            {errores.map((err, index) =>
                                <div key={index} className="border rounded mt-2 p-3 mb-2 bg-danger text-white">
                                    {err}
                                </div>)}
                         </div>
                    </div>: ''
                    
                    }
            </div>
            }
        </>
    );
}

export default Cart