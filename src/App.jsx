import './App.css';
import axios from "axios";
import { useState } from 'react';

function App(props) {
  const [formdata,setformdata]=useState({
    name:"",
    age:"",
    fees:""
  })
  console.log(props.function1)

  function stateChange(event){
    setformdata({...formdata,[event.target.name]:event.target.value})
  }
 

  const {name,age,fees}=formdata;

  async function Submitdata(event) {
    event.preventDefault();
    const res=await axios.post("/student",formdata)
    console.log(res);
    props.function1(true);
    props.function1(false);
    setformdata({name:"",age:"",fees:""})
  }
  return (

    <div className="container-fluid liststd">
      <h1>Add New Student</h1>
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
