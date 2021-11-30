import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { getFirestone } from '../Service/getFirestore.js';

export const ItemDetailContainer=()=>
{
    const { id } = useParams()
    const [Producto, setProducto] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const dbQuery=getFirestone()     
        dbQuery.collection('items').doc(id).get()
        .then(res => setProducto({id: res.id, ...res.data()}))
        setloading(false)
    },[id])
    
    return (     
        <>  
            {loading?<h3>Cargando....</h3>:<ItemDetail key='keyItemDetail' item={Producto}/>}
        </>
    );
}