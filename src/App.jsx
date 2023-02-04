import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Guard from "./components/Guard";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
        <Route
          path="/products"
          element={
            <Guard>
              <Products />
            </Guard>
          }
        />
        <Route
          path="/cart"
          element={
            <Guard>
              <Cart />
            </Guard>
          }
        />
        <Route
          path="/add-product"
          element={
            <Guard>
              <AddProduct />
            </Guard>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
