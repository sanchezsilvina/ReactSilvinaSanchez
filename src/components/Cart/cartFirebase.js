import { getFirestone } from '../Service/getFirestore';
import firebase  from 'firebase';
import {useCartContext } from '../context/cartContext';

export const GenerarOrden=(apenom, mail, telef)=>
{

        const { cartList, total} = useCartContext();

        console.log ('entro al generar orden')
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
   
}