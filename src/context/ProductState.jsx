import React from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {
  const product={
        id:1,
        name:"Product 1",
        price:10.99,
    };
    return (
    <div>
      <ProductContext.Provider value={{ product}}>
        {props.children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductState;
