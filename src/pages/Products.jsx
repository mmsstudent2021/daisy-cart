import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(cart)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`));
      }
    });
  };

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
        {products?.map((product) => (
          <Card
            key={product?.id}
            product={product}
            deleteProduct={deleteProduct}
            addToCart={addToCart}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
