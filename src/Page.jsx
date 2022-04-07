import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import App from './App.jsx';
import Login from './Login.jsx';

function Page() {
  return (
    <div className="row">
        <div className='col-lg-6'>
            <App />
        </div>
        <div className='col-lg-6'>
            <Login />
        </div>
      
    </div>
  );
}

export default Page;