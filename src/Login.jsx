import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';

function Login() {

    return (
        <div className="liststd">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><button><i class="fas fa-pen-to-square"></i></button></td>
                        <td><button><i class="fas fa-trash-can"></i></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Login;
