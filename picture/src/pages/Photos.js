import React, {useContext} from "react"
import {getClass} from '../utils/index'
import Image from "../components/Image"

import {Context} from "../Context"

function Photos() {
    const {photos} = useContext(Context)

    const gallery = photos.map((photo,i)=> {
        return <Image key={photo.id} img={photo} className={getClass(i)}/>
    })
    return (
     
        <main className="photos">
            {gallery}
        </main>
   
    )
}

export default Photos