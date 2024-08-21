import React from 'react';

const Products = ({ product }) => {
  return (
    <div
      className="col-md-4 col-lg-3 d-flex  flex-column rounded-3 p-3 "
      style={{ border: '2px solid' }}
    >
      <div className="col ">
        <img
          src={product.images[0]}
          className="w-100"
          style={{ aspectRatio: '1/1', width: 'fit-content' }}
          alt={product.title}
        />
      </div>
      <h5>{product.title}</h5>
      <p>Price Rs {product.price}</p>
    </div>
  );
};

export default Products;
