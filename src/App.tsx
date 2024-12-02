import React, { useState } from 'react';
import { Product } from "./components/Product";
import {products} from './data/products'

export default function App() {
  return (
    <>
     <Product product={products[0]}/>
     <Product product={products[1]}/>
     </>
  );
}


