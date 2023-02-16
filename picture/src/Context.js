import React, { useEffect } from "react";

const Context = React.createContext()

function ContextProvider ({children}) {
    const [photos,getPhotos] = React.useState([])
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(ref=>ref.json())
    .then(data=>getPhotos(data))
    },[])

    
    return (
        <Context.Provider value={photos}>
            {children}
        </Context.Provider>
    )
}
export  {ContextProvider, Context }