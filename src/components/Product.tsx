import React from "react"
import { IProduct } from "../models"

interface ProductProps{
    product:IProduct
}



export function Product(props:ProductProps){
    return (
        <div className="container">
            <img className="img-m" src={props.product.image} alt={props.product.title}/>
            <p>{props.product.title}</p>
            <p><span>{props.product.price}</span></p>
        </div>
    )
}