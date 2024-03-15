import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {   useNavigate } from 'react-router-dom';





function App() {
  
 
  const nevigate = useNavigate();

  return (
    
    <div className="App">
      


      <div className="header">
        <h1>ENTNT Project - An Advance ERP System Dashboard</h1>
      </div>


      <div className="banner">

        <div className="totalproducts">
        <div className="container">
          <h1>Total Number of Available Products</h1>
          ..........................................................
          <h1>5000</h1>
          
        </div>
        </div>

        <div className="blankdiv">
          <h1></h1>
        </div>

        <div className="totalorders">
        <div className="container">
          <h1>Total Number of Orders Received</h1>
          ..........................................................
          <h1>1000</h1>
        </div> </div>

      </div>


      <div className="seccontainer">

      <div className="sec1">
          <div className="container">
            <h1>Product Management</h1>
            <img src="https://cdn-icons-png.freepik.com/256/10112/10112502.png" alt="product management" />

            
            <button onClick={() => nevigate("/Manageproducts")} class="my-button">Manage Products</button>
          </div>
        </div>

        <div className="sec2">
          <div className="container">
            <h1>Order Management</h1>
            <img src="https://png.pngtree.com/png-vector/20230206/ourmid/pngtree-delivery-icon-png-image_6587699.png" alt="order management" />

            
            <button onClick={() => nevigate("/Manageorder")} class="my-button">Manage Orders</button>
          </div>
        </div>




        <div className="sec3">
          <div className="container">
            <h1>Order Calender</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/5432/5432799.png" alt="order calender" />

           
            <button onClick={() => nevigate("/Ordercalender")} class="my-button">View Order Calender</button>
          </div>

        </div>
      </div>

      <div className="footer">

        <h2>Made by Sourav kumar Das</h2>

      </div>


    </div>

   


  );
}

export default App;
