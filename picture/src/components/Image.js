import React, { useState } from "react";


function Image({className,img}) {
   const [hovered, setHovered] = useState(false)
   const [icon, setIcon] = useState(false)
   const heartIcon = hovered && <i onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)} className="ri-heart-line favorite"></i>
   const cartIcon = hovered && <i  onMouseEnter={()=>setIcon(true)} onMouseLeave={()=>setIcon(false)} className="ri-add-circle-line cart"></i>
   console.log(icon)
    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>!icon&&setHovered(false)} alt={img.url} src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
export default Image