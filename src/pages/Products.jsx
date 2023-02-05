import axios from "axios";
import React, { useEffect, useState } from "react";
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
  return <Layout>Products</Layout>;
};

export default Products;
