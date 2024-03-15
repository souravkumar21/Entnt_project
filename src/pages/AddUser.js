import React, { useState } from "react";
import axios from 'axios'

import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    Product_Name: "",
    Product_Category: "",
    Price: "",
    Stock_Quantity: ""
  });

  const { Product_Name, Product_Category, Price, Stock_Quantity } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/products", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
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
              type="number"
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
          
          <button className="btn btn-primary btn-block"  onClick={()=>{ alert('Added Successfully'); }}>Add Product</button>
          <button className="btn btn-danger" onClick={() => history("/Manageproducts")} >Back</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
