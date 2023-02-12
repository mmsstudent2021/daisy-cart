import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const Card = ({ product, deleteProduct }) => {
  const navigate = useNavigate();
  const goDetails = (e) => {
    e.stopPropagation();
    navigate(`/products/details/${product?.id}`);
  };
  return (
    // <Link to={`/products/details/${product?.id}`}>
    <div
      onClick={goDetails}
      className="card w-96 bg-white shadow-xl cursor-pointer"
    >
      <div className="card-body">
        <img src={product.image} className="h-20 mx-auto" alt="" />
        <h2 className="card-title truncate">{product.title}</h2>
        <p className="truncate">{product?.description}</p>
        <p className="text-xl">${product?.price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteProduct(product.id);
            }}
            className="btn btn-error btn-sm text-white"
          >
            <MdDelete />
          </button>
          <Link to={`/products/edit/${product.id}`}>
            <button className="btn btn-success btn-sm text-white">
              <MdEdit />
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default Card;
