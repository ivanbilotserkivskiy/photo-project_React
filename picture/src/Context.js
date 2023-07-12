import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider ({children}) {
    const [photos,getPhotos] = useState([])
    const [cartItems, setCart] = useState([])
    

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(ref=>ref.json())
    .then(data=>getPhotos(data))
    },[])

    function addItem (newItem) {
        setCart(oldItems=> {
            return [...oldItems, newItem ]
        })
    }
    function removeItem (itemId) {
        setCart(oldItems=> {
           return oldItems.filter(item=>item.id !==itemId)
        })
    }

    function emptyCart () {
        setCart([])
    }

    function toggle(id) {
        const update = photos.map(x=>{
        if( x.id===id){
         return   {...x,isFavorite:!x.isFavorite}
        }
        else {
            return x
        }
       
        })
        getPhotos(update)
    } 

    return (
        <Context.Provider value={{photos:photos,toggle:toggle, addItem:addItem , cart: cartItems, removeItem:removeItem,emptyCart:emptyCart}} >
            {children}
        </Context.Provider>
    )
}
export  {ContextProvider, Context }