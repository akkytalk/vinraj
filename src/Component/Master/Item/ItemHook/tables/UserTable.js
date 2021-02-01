import React, { useState, useEffect } from "react";
import axios from 'axios'
import swal from "sweetalert";
const UserTable = props => {


    const [user, SetUser] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/items")
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
        
        
        axios.delete(`https://uditsolutions.in/vinrajbackend/public/api/items/${id}`, user)
        .then(()=>{
          console.log("swal")
          swal("Successfully Deleted Item!")
          .then(() => {
              window.location.reload();
          })
      })
      .catch(
         error=> console.log(error)
      )
      }

    return (
        <table className="table" style={{ fontSize: "12px" }}>
            <thead>
                <tr>
                    <th scope="col">Item Name</th>
                     <th scope="col">Under Item Group</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Actions</th>

                    {/* <th scope="col">Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {user.length > 0 ? (
                    user.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                             <td>{user.item_group_name}</td>
                            <td>{user.unit}</td>
                           
                            <td>
                            <button 
                          onClick={() => props.editRow(user.id)}
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
