import React from "react";

const Card = ({product}) => {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <div className="card-body">
        <img src={product.image} className="h-20 mx-auto" alt="" />
        <h2 className="card-title truncate">{product.title}</h2>
        <p className="truncate">{product?.description}</p>
        <p className="text-xl">${product?.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
