import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import './Navbar.js';
import { Link } from "react-router-dom";
import '../App.css';
import {   useNavigate } from 'react-router-dom';




function Manageproducts() {
    const nevigate = useNavigate();

    const [products, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/products");
        setUser(result.data.reverse());
      };

      const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/products/${id}`);
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
        <h1>Welcome to Products Management Admin Panel</h1>
        <button onClick={() => nevigate("/AddUser")} class="addproducts"><h2>Add Products</h2></button>
        <table className="table border shadow">
          <thead className="thead-dark">
          <tr>
              <th scope="col">#</th>
              <th scope="col">Product_Name</th>
              <th scope="col">Product_Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock_Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Product_Name}</td>
                <td>{user.Product_Category}</td>
                <td>{user.Price}</td>
                <td>{user.Stock_Quantity}</td>
                <td>
                  {/* <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link> */}
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/EditUser/`}
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

export default Manageproducts ;