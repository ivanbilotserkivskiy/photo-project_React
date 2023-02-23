import React, { useContext, useState } from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"


function Cart() {
    const {cart,emptyCart} = useContext(Context)
    const[order, setOrder] = useState(false)
    const cartItemElements = cart.map(item=>{
        return <CartItem key={item.id} item={item}/>
    })
    const totalCost = (cart.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    function ordering() {
        setOrder(true)
        setTimeout(()=>{
            setOrder(false)
            console.log("Order placed!")
            emptyCart()
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost} </p>
            <div className="order-button">
                {cart.length>0&&<button onClick={ordering}>{order?"Ordering...":"Place Order"}</button>}
            </div>
        </main>
    )
}

export default Cart