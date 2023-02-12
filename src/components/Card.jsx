import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, deleteProduct }) => {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <div className="card-body">
        <img src={product.image} className="h-20 mx-auto" alt="" />
        <h2 className="card-title truncate">{product.title}</h2>
        <p className="truncate">{product?.description}</p>
        <p className="text-xl">${product?.price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => deleteProduct(product.id)}
            className="btn btn-error btn-sm text-white"
          >
            Delete
          </button>
          <Link to={`/products/edit/${product.id}`}>
            <button className="btn btn-success btn-sm text-white">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
