import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button  } from 'react-bootstrap';
import {useCartContext} from "../context/cartContext";

 const ItemDetail=({item})=>
{
	const [Cantidad, setCantidad] = useState(0)
	const [Click, setClick] = useState(false)
    const {cartList, agregarAlCarrito}= useCartContext();

	const HandlerAdd= (count)=>
    {
	  
	  setCantidad(count)
	  setClick(true) 
	  console.log(item)
	  console.log('item')
	  agregarAlCarrito({...item, cantidad: count})
	  
    }
	
    return (
    <div className="dproduct-card mt-2 mb-2 ml-2 mr-2 d-inline-block">
		<div className="dproduct-tumb">
			<img src={item.urlpicture} width='200px' height='400px' alt=""/>
		</div>
		<div className="dproduct-details">
			<span className="dproduct-catagory">{item.titulo}</span>
			<span className="dproduct-description">{item.descripcion}</span>
			<div className="dproduct-bottom-details">
				<div className="dproduct-price" > $ {item.precio} </div>
			</div>
			<div className="dproduct-bottom-details">
				<div className="dproduct-stock" > Stock {item.stock} </div>
			</div>
			{(Click)? 
			<Link to={`/cart/${Cantidad}`}> <Button className="mt-2" >Finalizar Compra</Button> </Link> :
			<ItemCount onAdd={HandlerAdd} stock= {item.stock} initial= {1}/> }
		</div>
	</div>
    )
}

export default ItemDetail