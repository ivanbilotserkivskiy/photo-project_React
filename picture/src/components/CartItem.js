import React, { useContext } from "react"
import {Context} from "../Context"
function CartItem({item}) {
    const {removeItem} = useContext(Context)
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={()=>removeItem(item.id)}></i>
            <img  alt={item.url} src={item.url} width="130px" />
          
            <p>$5.99</p>
        </div>
    )
}

export default CartItem