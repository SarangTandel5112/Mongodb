import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Row from './Row';

function Login(props) {
    let i = 1
    const [stddata, setstddata] = useState([]);
    async function getdata() {
        const res = await axios.get("/student");
        setstddata(res.data.data)
    }
    const [change,setchange]=useState(true)
    
    useEffect(() => {
        getdata();
        // console.log(props.changeTable)
    }, [props.changeTable,change])



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
                    {stddata.map((onedata) => (
                        <Row sr={i++} function1={setchange} name={onedata.Name} age={onedata.Age} fees={onedata.Fees} id={onedata._id}/>
                    ))}

                </tbody>
            </table>
        </div>
    );
}

export default Login;
