import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

 const ItemDetail=({item})=>
{
	const onAdd= ()=>
    {
      return 'soy onAdd'
    }
    console.log ('entro al itemdetail')
    return (
    <div className="product-card mt-2 mb-2 ml-2 mr-2 d-inline-block">
		<div className="product-tumb">
			<img src={item.urlpicture} width='200px' height='400px' alt=""/>
		</div>
		<div className="product-details">
			<span className="product-catagory">{item.titulo}</span>
			<span className="product-description">{item.descripcion}</span>
			<div className="product-bottom-details">
				<div className="product-price" > $ {item.precio} </div>
			</div>
			<ItemCount onAdd={onAdd} stock= {item.stock} initial= {1}/> 
		</div>
	</div>
    )
}

export default ItemDetail