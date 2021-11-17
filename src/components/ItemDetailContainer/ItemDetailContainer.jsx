import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router';

const listproductos= [
    {
       "id": 1,
       "titulo": "Monstera",
       "descripcion": "Monstera con Maceta blanca premium planta",
       "precio":2500,
       'urlpicture':'https://emotions.cl/wp-content/uploads/2017/06/1.jpe',
       'categoria': 'interior',
       'stock':5
   },
    {
        "id": 2,
        "titulo": "Areca",
        "descripcion": "Areca 1 metro con maceta blanca mas portamaceta de madera",
        "precio":4300,
        'urlpicture':'data:image/jpeg;base64,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',
        'categoria': 'exterior',
        'stock':20
    },
    {
       "id": 3,
       "titulo": "Alocasia",
       "descripcion": "Alocasia Estilo Tropical con maceta blanca o negra ideal",
       "precio":2600,
       'urlpicture':'https://i1.wp.com/www.florestore.com/flores-a-domicilio/wp-content/uploads/2021/06/monstera.jpg?resize=846%2C846&ssl=1',
       'categoria': 'interior',
       'stock':10
   },
    {
       "id": 4,
       "titulo": "Aglaonema",
       "descripcion": "Aglaonema de 80 cm de altura con maseta blanca",
       "precio":1000,
       'urlpicture':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaBN3rGczjv1SeXN3ulLpS1qUyyLCABvxKg&usqp=CAU',
       'categoria': 'interior',
       'stock':2
   },
    {
        "id": 5,
        "titulo": "Palmera",
        "descripcion": "Palmera natural 70cm altura aproximada con maceta blanca",
        "precio":1500,
        'urlpicture':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjUkZWOOrkcTEe5a4zziH3ENaTQ0a44yjFg&usqp=CAU',
        'categoria': 'exterior',
        'stock':1
    },
    {
        "id": 6,
        "titulo": "Strelitzia",
        "descripcion": "Strelitzia Reginae DECO Estilo Tropical",
        "precio":3600,
        'urlpicture':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLaoOrsywrRl-kGtUtceVM2jZhoWkhNZfdQ&usqp=CAU',
        'categoria': 'interior',
        'stock':50
    }
    
    ]

const getItem = new Promise ((resolve,reject) => {
    setInterval(() => {
        resolve(listproductos)  
    }, 2000);
})

export const ItemDetailContainer=()=>
{
    const { id } = useParams()
     
    const [Productos, setProductos] = useState([])

    useEffect(()=>{
        console.log(id)
        getItem.then(res => {setProductos(res.filter(prod => prod.id===parseInt(id)))})
    },[id])
    
    return (     
        <>  
            {Productos.map((item,index)=>  <ItemDetail key={index} item={item}/> )}
        </>
    );
}