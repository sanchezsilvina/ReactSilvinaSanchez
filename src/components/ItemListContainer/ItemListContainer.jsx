 import { useState, useEffect } from 'react';
 import  ItemList  from '../ItemList/ItemList';
 import { useParams } from 'react-router';

 const listproductos= [
    {
       "id": 1,
       "titulo": "Monstera",
       "descripcion": "Monstera con Maceta blanca premium planta",
       "precio":2500,
       'urlpicture':'FotosItems/Monstera.png',
       'categoria': 'interior',
       'stock':5
   },
    {
        "id": 2,
        "titulo": "Areca",
        "descripcion": "Areca 1 metro con maceta blanca mas portamaceta de madera",
        "precio":4300,
        'urlpicture':'FotosItems/Areca.png',
        'categoria': 'exterior',
        'stock':20
    },
    {
       "id": 3,
       "titulo": "Alocasia",
       "descripcion": "Alocasia Estilo Tropical con maceta blanca o negra ideal",
       "precio":2600,
       'urlpicture':'FotosItems/Alocasia.png',
       'categoria': 'interior',
       'stock':10
   },
    {
       "id": 4,
       "titulo": "Aglaonema",
       "descripcion": "Aglaonema de 80 cm de altura con maseta blanca",
       "precio":1000,
       'urlpicture':'FotosItems/Aglaonema.png',
       'categoria': 'interior',
       'stock':2
   },
    {
        "id": 5,
        "titulo": "Palmera",
        "descripcion": "Palmera natural 70cm altura aproximada con maceta blanca",
        "precio":1500,
        'urlpicture':'FotosItems/Areca.png',
        'categoria': 'exterior',
        'stock':1
    },
    {
        "id": 6,
        "titulo": "Strelitzia",
        "descripcion": "Strelitzia Reginae DECO Estilo Tropical",
        "precio":3600,
        'urlpicture':'FotosItems/strelitzia.png',
        'categoria': 'interior',
        'stock':50
    }
    
    ]

const getData = new Promise ((resolve,reject) => {
    setInterval(() => {
        resolve(listproductos)  
    }, 2000);
})

export const ItemListContainer=({texto})=>
{
    const { categoria } = useParams()
    const [Productos, setProductos] = useState([ ])
    var titulo= 'Plantas'
   
    useEffect(()=>{
        if (categoria)
        {
            console.log(categoria)
            getData.then(res => {setProductos(res.filter(prod => prod.categoria === categoria))})
            titulo=`Plantas de ${categoria}` 
        }
        else
        {
            
            getData.then(res => {setProductos(res)})
        }

    },[categoria])
    
    return (
            
            <div className="container align-center">
                <h2> {titulo}  </h2>
                <ItemList key='IdItemListCOntainer' items={Productos}/> 
            </div>
    );
}