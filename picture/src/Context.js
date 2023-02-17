import React, { useEffect, useState } from "react";

const Context = React.createContext()

function ContextProvider ({children}) {
    const [photos,getPhotos] = useState([])
    

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(ref=>ref.json())
    .then(data=>getPhotos(data))
    },[])

    function toggle(id) {
        const update = photos.map(x=>{
            
        if( x.id===id){
            console.log(id)
            console.log(x.isFavorite)
         return   {...x,isFavorite:!x.isFavorite}
        }
        else {
            return x
        }
       
        })
        getPhotos(update)
    } 
    console.log(photos)

    
    return (
        <Context.Provider value={{photos:photos,toggle:toggle}} >
            {children}
        </Context.Provider>
    )
}
export  {ContextProvider, Context }