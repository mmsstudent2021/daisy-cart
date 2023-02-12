import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const getProduct = async () => {
    const { data } = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(data);
    setTitle(data?.title);
    setPrice(data?.price);
    setDescription(data?.description);
    setImage(data?.image);
    setCategory(data?.category);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const pdata = { title, description, price, image, category };
    await axios.patch(`http://localhost:3000/products/${id}`, pdata);
    navigate("/products")
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Layout>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Product Data!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
            <form onSubmit={onSubmitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  //   defaultValue={product?.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  //   defaultValue={product?.price}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  //   defaultValue={product?.description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="category"
                  className="input input-bordered"
                  //   defaultValue={product?.category}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  //   defaultValue={product?.image}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <div className="flex gap-5">
                  <Link to="/products">
                    <button className="btn btn-error text-white">Cancel</button>
                  </Link>
                  <button type="submit" className="btn btn-success text-white">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
