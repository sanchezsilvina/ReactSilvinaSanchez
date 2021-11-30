 import { useState, useEffect } from 'react';
 import  ItemList  from '../ItemList/ItemList';
 import { useParams } from 'react-router';
 import { getFirestone } from '../Service/getFirestore.js';

export const ItemListContainer=({texto})=>
{
    const { categoria } = useParams()
    const [Productos, setProductos] = useState([])
    const [Titulo, setTitulo] = useState('Plantas')
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        const dbQuery=getFirestone()
            
         if (categoria)
         {
            dbQuery.collection('items').where('categoria','==',categoria).get()
            .then(data => setProductos( data.docs.map(prod =>({ id: prod.id, ...prod.data()}))))
            setTitulo(`Plantas de ${categoria}` )
         }
         else
         {
            dbQuery.collection('items').get()
            .then(data => setProductos( data.docs.map(prod =>({ id: prod.id, ...prod.data() }))))
         }
         setloading(false)

    },[categoria])
    
    return (
            
            <div className="container align-center">
                <h2> {Titulo}  </h2>
                {loading?<h3>Cargando....</h3>:
                <ItemList key='IdItemListCOntainer' items={Productos}/>}
            </div>
    );
}