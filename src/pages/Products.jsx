import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Products = () => {
  const [products, setProducts] = useState([]);
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
        {products?.map(product => <Card key={product?.id} product={product} />)}
      </div>
    </Layout>
  );
};

export default Products;
