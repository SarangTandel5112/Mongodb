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
  }

  const {name,age,fees}=formdata;

  function Submitdata(event) {
    event.preventDefault()
  }
  return (

    <div className="App">
      <form>
        <div>
          <input name="name" placeholder='name' onChange={stateChange} value={name} />
        </div>
        <div>
          <input name='age' placeholder='age' value={age} />
        </div>
        <div>
          <input name='fees' placeholder='fees' value={fees} />
        </div>
        <div>
          <button onClick={Submitdata}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
