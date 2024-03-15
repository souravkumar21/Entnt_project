import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Editorder = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    Order_Number: "",
    Customer_name: "",
    Order_date: "",
    Order_status: ""
    
  });


  useEffect(() => {
    loadUser()
  }, [])


  const {  Order_Number, Customer_name, Order_date, Order_status } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/status/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/status/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Order Details</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Order_Number"
              name="Order_Number"
              value={Order_Number}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Customer_name"
              name="Customer_name"
              value={Customer_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Order_date"
              name="Order_date"
              value={Order_date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Order_status"
              name="Order_status"
              value={Order_status}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Editorder;
