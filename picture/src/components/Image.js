import React, { useState, useContext } from "react";
import PropTypes from "prop-types"
import { Context } from "../Context";

function Image({className,img}) {
  
    const {toggle, addItem, removeItem} = useContext(Context)
    const {cart} = useContext(Context) 
 
   const [hovered, setHovered] = useState(false)


   const checkItem = cart.find(x=>x.id===img.id)
    const cartClassName = checkItem?"ri-shopping-cart-fill cart":"ri-add-circle-line cart"

    

   const heartIcon = hovered && <i 
   onMouseEnter={()=>setHovered(true)} 
   onMouseLeave={()=>setHovered(false)} 
   className={img.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}
    onClick={()=>toggle(img.id)}
   > 
   </i>
   const cartIcon = hovered && <i  
   onMouseEnter={()=>setHovered(true)} 
   onMouseLeave={()=>setHovered(false)} 
   className={cartClassName}
    onClick={checkItem?()=>removeItem(img.id):()=>addItem(img)}
   >
   </i>
  
    return (
        <div className={`${className} image-container`}>
            <img onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} alt={img.url} src={img.url} className="image-grid"/>
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