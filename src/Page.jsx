import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import App from './App.jsx';
import Login from './Login.jsx';

function Page() {
  const [changeTable,setChangeTable]=useState(false)
  return (
    <div className="row">
        <div className='col-lg-6'>
            <App function={setChangeTable} />
        </div>
        <div className='col-lg-6'>
            <Login changeTable={changeTable} />
        </div>
      
    </div>
  );
}

export default Page;