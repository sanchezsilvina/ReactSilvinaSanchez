import Item from '../Item/Item';

const ItemList=({items})=>
{
    return (
        <>
            {items.map((item,index)=>  <Item key={index} item={item}/> )}
        </>
    );
}

export default ItemList
