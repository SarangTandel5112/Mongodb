import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';

function App() {
  const [formdata,setformdata]=useState({
    name:"",
    age:"",
    fees:""
  })

  function stateChange(event){
    setformdata({...formdata,[event.target.name]:[event.target.value]})
    console.log(formdata);
  }
 

  const {name,age,fees}=formdata;

  function Submitdata(event) {
    event.preventDefault();
    // const res=axios.post()
    console.log(formdata)
    setformdata({name:"",age:"",fees:""})
  }
  return (

    <div className="container-fluid">
      <form>
        <div>
          <input name="name" className='form-control mb-2' placeholder='name' onChange={stateChange} value={name} />
        </div>
        <div>
          <input name='age' className='form-control mb-2' placeholder='age' onChange={stateChange} value={age} />
        </div>
        <div>
          <input name='fees' className='form-control mb-2' placeholder='fees' onChange={stateChange} value={fees} />
        </div>
        <div>
          <button className='btn btn-primary' onClick={Submitdata}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
