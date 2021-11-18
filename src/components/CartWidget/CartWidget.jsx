import { FaShoppingCart } from 'react-icons/fa';
import {useCartContext } from '../context/cartContext';

export const IconoCarrito=()=>
{
    const {cantTotal}= useCartContext();
    return (
        <div> 

            <FaShoppingCart size={25} />{(cantTotal===0)? '' :  cantTotal}
        </div>
    )
}