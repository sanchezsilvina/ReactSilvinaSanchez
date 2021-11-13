import { useParams } from 'react-router';

const Cart=()=>
{
     const { count } = useParams();

    return (
        <>
            <h4>Bienvenido al carrito de compras</h4>
            
            {(count)? `Cantidad agregada ${count}` : '' } 

            {/* <div className="App container mt-8">
                <div className="row mx-0 px-0 mt-4">
                    <div className="col-md-3"> {(producto)? `Producto agregado ${producto}` : '' }</div>
                    <div className="col-md-9"> {(count)? `Cantidad agregada ${count}` : '' }</div>
                </div>  
            </div>  */}
        </>
    );
}

export default Cart