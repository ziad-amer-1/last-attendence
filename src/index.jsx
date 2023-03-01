import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import axios from "axios";
// import "../node_modules/react-toastify/dist/react-toastify"

axios.defaults.headers.User = "admin";
axios.defaults.headers.apikey = "apikey";
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.common['Accept'] = 'application/json';

ReactDOM.render(
   <App/>,
  document.getElementById('root')
);
