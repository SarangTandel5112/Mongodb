import logo from './logo.svg';
import axios from "axios";
import { useEffect, useState } from 'react';


function Row(props) {
    const [edit,setedit]=useState(false)
    let i = 1;

    const[data,setdata]=useState({
        name:props.name,
        age:props.age,
        fees:props.fees
    })

    const{name,age,fees}=data;

    function changedata(event){
        setdata({...data,[event.target.name]:event.target.value})
    }

    function editoption(){
        if(edit==true){
            setedit(false)
        }
        else{
            setedit(true)
        }        
    }


    return (
        <tr>
            {(edit)===true? 
            <tr><th scope="row">{props.sr}</th>
            <td><input value={name} onChange={changedata} name="name"/></td>
            <td><input value={age} onChange={changedata} name="age"/></td>
            <td><input value={fees} onChange={changedata} name="fees"/></td>
            <td><button onClick={editoption}>Done</button></td>
            </tr>
            :
            <tr>
            <th scope="row">{props.sr}</th>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.fees}</td>
            <td><button onClick={editoption}><i class="fas fa-pen-to-square"></i></button></td>
            </tr>
             }
            
            
            <td><button><i class="fas fa-trash-can"></i></button></td>
        </tr>
    )

}

export default Row;