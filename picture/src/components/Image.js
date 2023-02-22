import React, { useState, useContext } from "react";
import PropTypes from "prop-types"
import { Context } from "../Context";

function Image({className,img}) {
  
    const {toggle} = useContext(Context)
 
   const [hovered, setHovered] = useState(false)
   const [icon, setIcon] = useState(false)
   const heartIcon = hovered && <i 
   onMouseEnter={()=>setIcon(true)} 
   onMouseLeave={()=>setIcon(false)} 
   className={img.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}
    onClick={()=>toggle(img.id)}
   > 
   </i>
   const cartIcon = hovered && <i  
   onMouseEnter={()=>setIcon(true)} 
   onMouseLeave={()=>setIcon(false)} 
   className="ri-add-circle-line cart"
   
   >
   </i>
  
    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>!icon&&setHovered(false)} alt={img.url} src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image