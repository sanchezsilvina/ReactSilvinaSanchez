import { Link } from "react-router-dom";
import "./Item.css";

 const Item=({item})=>
{
    return (
    <div className="product-card mt-2 mb-2 ml-2 mr-2 d-inline-block">
		<div className="product-tumb">
			<img src={item.urlpicture} width='300px' height='300px' alt=""/>
		</div>
		<div className="product-details">
			<Link to={`/detail/${item.id}`}>
				<span className="product-catagory">{item.titulo}</span>
			</Link>
			<div className="product-bottom-details">
				<div className="product-price" > $ {item.precio} </div>
			</div>		
		</div>
	</div>
    )
}

export default Item