import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (id) => {
    const { data } = await axios.delete(`http://localhost:3000/products/${id}`);
    console.log(data);
  };

  const fetchProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, [products]);
  return (
    <Layout>
      <div className="flex flex-wrap gap-5 justify-center items-center mb-10">
        {products?.map((product) => (
          <Card
            key={product?.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
