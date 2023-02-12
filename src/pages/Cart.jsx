import React from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <Layout>
      <div className="">
        {cartItems?.map((item) => (
          <CartItem key={item?.id} item={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
