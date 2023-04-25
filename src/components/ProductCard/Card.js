import React from 'react'
import './Card.css'

export function Product({Info,btnclick}){
    const {source,
           brand,
            description,
             price}=Info
        
    
    return (
        <div class="parent">
            <div class="child">
               <img src={source}/>
                <h2>{brand}</h2>
                <p>{description}</p>
                <h1>{price}</h1>
                
                <button class='btnStyle' onClick={btnclick}>Add to Cart</button>
            </div>
        </div>
    )
}