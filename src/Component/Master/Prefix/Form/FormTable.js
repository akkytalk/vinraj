import React, { useState, useEffect } from "react";
import axios from 'axios'

function FormTable(props) {
    const [user, SetUser] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/forms")
            .then(
                res => {
                    console.log(res.data, 'res');
                    SetUser(res.data)
                })

            .catch(
                error => console.log(error)
            )
    }, [])
    return (
        <table className="table" style={{ fontSize: "12px" }}>
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th scope="col">form Name</th>
                    <th scope="col">Department Name</th>
                    
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {user.length > 0 ? (
                    user.map(user => (
                        <tr key={user.id}>
                            {/* <td>{user.id}</td> */}
                            <td>{user.name}</td>
                            <td>{user.department ? user.department.name : null}</td>
                            
                            <td>
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => props.deleteUser(user.id)} ></i>
                                <i className="fa fa-plus ml-5" aria-hidden="true" onClick={() => props.editRow(user)} ></i>
                            </td>
                        </tr>
                    ))
                ) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                    )}
            </tbody>
        </table>
    );
}

export default FormTable
