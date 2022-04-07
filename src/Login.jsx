import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function Login(props) {
    let i=1
    const [stddata,setstddata]=useState([]);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    async function getdata(){
        const res=await axios.get("/student");
        setstddata(res.data.data)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    useEffect(()=>{
        getdata();
        console.log(props.changeTable)
    },[props.changeTable])
    


    return (
        <div className="liststd">
            {console.log(stddata)}
            <h1>List of Students</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Fees</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {stddata.map((onedata)=>(
                        <tr>
                        <th scope="row">{i++}</th>
                        <td>{onedata.Name}</td>
                        <td>{onedata.Age}</td>
                        <td>{onedata.Fees.$numberDecimal}</td>
                        <td><button><i class="fas fa-pen-to-square"></i></button></td>
                        <td><button><i class="fas fa-trash-can"></i></button></td>
                    </tr>

                    ))}
                    
                </tbody>
            </table>
        </div>
    );
}

export default Login;
