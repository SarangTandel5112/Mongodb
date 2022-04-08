import './App.css';
import { useState } from 'react';
import App from './App.jsx';
import Login from './Login.jsx';

function Page() {
  const [changeTable,setChangeTable]=useState(false)
  return (
    <div className="row">
        <div className='col-lg-6'>
            <App function1={setChangeTable} />
        </div>
        <div className='col-lg-6'>
            <Login changeTable={changeTable} function2={setChangeTable} />
        </div>
      
    </div>
  );
}

export default Page;