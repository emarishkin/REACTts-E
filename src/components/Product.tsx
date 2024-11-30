import React from "react"
import { IProduct } from "../models"

interface ProductProps{
    product:IProduct
}



export function Product(props:ProductProps){
    return (
        <div className="container">
            {props.product.title}
        </div>
    )
}