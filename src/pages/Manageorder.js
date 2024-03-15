import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import './Navbar.js';
import { Link } from "react-router-dom";
import '../App.css';
import {   useNavigate } from 'react-router-dom';

function Manageorder() {

  const nevigate = useNavigate();

  const [products, setUser] = useState([]);

  useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3003/status");
      setUser(result.data.reverse());
    };

    const deleteUser = async id => {
      await axios.delete(`http://localhost:3003/status/${id}`);
      loadUsers();
    };


return (

<div className="container">
  
  <div className="nav">
  <button onClick={() => nevigate("/")} class="home"><h3>Home</h3></button>
  <button onClick={() => nevigate("/Manageproducts")} class="manageproducts"><h3>Manage products</h3></button>
  <button onClick={() => nevigate("/Manageorder")} class="manageorders"><h3>Manage orders</h3></button>
  <button onClick={() => nevigate("/Ordercalender")} class="ordercalender"><h3>Order calender</h3></button>
  
  </div>
  
    <div className="py-4">
      <h1>Welcome to Order Management Admin Panel</h1>
      <button onClick={() => nevigate("/Addorder")} class="addproducts"><h2>Add Orders</h2></button>
      <table className="table border shadow">
        <thead className="thead-dark">
        <tr>
            <th scope="col">#</th>
            <th scope="col">Order_Number</th>
            <th scope="col">Customer_name</th>
            <th scope="col"> Order_date</th>
            <th scope="col">Order_status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.Order_Number}</td>
              <td>{user.Customer_name}</td>
              <td>{user.Order_date}</td>
              <td>{user.Order_status}</td>
              <td>
                {/* <Link className="btn btn-primary mr-2" to={`/status/${user.id}`}>
                  View
                </Link> */}
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/Editorder/`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  
  

);
};


export default Manageorder;