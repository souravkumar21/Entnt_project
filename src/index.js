import React from 'react';
 import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Manageproducts from './pages/Manageproducts';
import Manageorder from './pages/Manageorder';
import Ordercalender from './pages/Ordercalender';
import User from './pages/User'; 
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';
import Addorder from './pages/Addorder';
import Editorder from './pages/Editorder';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  

  {
    path: "Manageproducts",
    element: <Manageproducts/>,
  },

  {
    path: "Manageorder",
    element: <Manageorder/>,
  },

  {
    path: "Ordercalender",
    element: <Ordercalender/>,
  },

  {
    path: "EditUser",
    element: <EditUser/>,
  },

  {
    path: "User",
    element: <User/>,
  },

  {
    path: "AddUser",
    element: <AddUser/>,
  },

  {
    path: "Addorder",
    element: <Addorder/>,
  },

  {
    path: "Editorder",
    element: <Editorder/>,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
