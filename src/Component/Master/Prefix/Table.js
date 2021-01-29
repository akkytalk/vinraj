import React, { useState, useEffect } from "react";
import axios from 'axios'
import swal from "sweetalert";

import { Button } from "@material-ui/core";
const UserTable = props => {


    const [user, SetUser] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/prefixs")
            .then(
                res => {
                    console.log(res.data, 'res');
                    SetUser(res.data)
                })

            .catch(
                error => console.log(error)
            ) 
        
    }, [])

  

        
        
    


    


    async function deleteUser (id) {
      axios.delete(`https://uditsolutions.in/vinrajbackend/public/api/prefixs/${id}`, user)
      .then(()=>{
        console.log("swal")
        swal("Successfully Deleted Prefix!")
        .then(() => {
            window.location.reload();
        })
    })
    .catch(
       error=> console.log(error)
    )
    }

    async function editRow (id) {
        axios.get(`https://uditsolutions.in/vinrajbackend/public/api/prefixs/${id}`, )
        .then(()=>{
          console.log("user data in form table", id)
         
      })
      .catch(
         error=> console.log(error)
      )
      }

    return (
        <table className="table" style={{ fontSize: "12px" }}>
            <thead>
                <tr>
                    {/* <th>ID</th> */}
                    <th scope="col">Form Name</th>
                    <th scope="col">Department Name</th>
                    <th scope="col">Prefixs</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {user.length > 0 ? (
                    user.map(user => (
                        <tr key={user.id}>
                            {/* <td>{user.id}</td> */}
                            <td>{user.form ? user.form.name : null}</td>
                            <td>{user.department ? user.department.name : null}</td>
                            <td>{user.prefix}</td>
                            <td>
                            <button 
                          onClick={() => editRow(user.id)}
                          > 
                                <i className="fa fa-edit" aria-hidden="true"  ></i>
                                </button>

                          <button  className="ml-4 "
                          onClick={() => deleteUser(user.id)}
                          >
                          <i className="fa fa-trash-alt " value={user.id} aria-hidden="true"  ></i>
                              </button>  
                             
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
export default UserTable;