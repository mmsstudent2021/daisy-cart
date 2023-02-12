import React, { useState } from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const [cart, setCart] = useState(cartItems);

  const total = cart?.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <Layout>
      <div className="flex gap-10">
        <div className="">
          {cartItems?.map((item) => (
            <CartItem key={item?.id} item={item} />
          ))}
        </div>
        <div className="">
          <h1 className="text-2xl">Total Price - ${total} </h1>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
