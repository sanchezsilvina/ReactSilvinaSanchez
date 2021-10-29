 import  ItemCount  from "../ItemCount/ItemCount";

export const ItemListContainer=({texto})=>
{
    return (
            <div className="container align-center">
               <div className="row">
                    <div className="col-12">
                        <h6> {texto} </h6>
                    </div>
               </div>
               <div className="row">
                    <div className="col-12">
                       <ItemCount valmin= {1} valmax= {15}/>
                    </div>
               </div>
            </div>
    )
}