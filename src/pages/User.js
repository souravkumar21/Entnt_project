import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    Product_Name: "",
    Product_Category: "",
    Price: "",
    Stock_Quantity: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/products/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Product_Name: {user.Product_Name}</li>
        <li className="list-group-item">Product_Category: {user.Product_Category}</li>
        <li className="list-group-item">Price: {user.Price}</li>
        <li className="list-group-item">Stock_Quantity: {user.Stock_Quantity}</li>
        {/* <li className="list-group-item">website: {user.website}</li> */} 
      </ul>
    </div>
  );
};

export default User;
