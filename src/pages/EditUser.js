import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    Product_Name: "",
    Product_Category: "",
    Price: "",
    Stock_Quantity: ""
    
  });


  useEffect(() => {
    loadUser()
  }, [])


  const { Product_Name, Product_Category, Price, Stock_Quantity } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/products/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/products/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Product Details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="Product_Name"
              value={Product_Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product_Category"
              name="Product_Category"
              value={Product_Category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="Price"
              value={Price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Stock Quantity"
              name="Stock_Quantity"
              value={Stock_Quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
