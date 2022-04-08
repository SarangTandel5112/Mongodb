import axios from "axios";
import {  useState } from 'react';


function Row(props) {
    const [edit, setedit] = useState(false)

    const [data, setdata] = useState({
        Name: props.name,
        Age: props.age,
        Fees: props.fees
    })

    const { Name, Age, Fees } = data;

    function changedata(event) {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    async function editoption(event) {
        if (edit === true) {
            const res=await axios.post(`/student/update/${event.target.value}`,data)
            props.function1(res.data)
            setedit(false)
        }
        else {
            setedit(true)
        }
    }

    async function deleteoption(event){
        const res=await axios.post(`/student/delete/${event.target.value}`)
        props.function1(res.data)
    }


    return (
        <tr>
            {(edit) === true ?
                <tr><th scope="row">{props.sr}</th>
                    <td><input value={Name} onChange={changedata} name="Name" /></td>
                    <td><input value={Age} onChange={changedata} name="Age" /></td>
                    <td><input value={Fees} onChange={changedata} name="Fees" /></td>
                    <td><button onClick={editoption} value={props.id}>Done</button></td>
                    <td><button  value={props.id} onClick={deleteoption}><i class="fas fa-trash-can"></i></button></td>
                </tr>
                :
                <tr>
                    <th scope="row">{props.sr}</th>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.fees}</td>
                    <td><button onClick={editoption} value={props.id}><i class="fas fa-pen-to-square"></i></button></td>
                    <td><button  value={props.id} onClick={deleteoption}><i class="fas fa-trash-can"></i></button></td>
                </tr>
            }


            
        </tr>
    )

}

export default Row;