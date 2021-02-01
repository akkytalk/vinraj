import React, { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert'

function DepartmentAddUserForm({ currentUser, editing, setEditing, setCurrentUser }) {
    // const initialFormState = { name: "", under_group_name: "" };
    const [user, setUser] = useState(
        {
            name:""
        }
    );


    async function updateEditedRow(id) {
        setEditing(false);
        
        axios.put(`https://uditsolutions.in/vinrajbackend/public/api/departments/${id}`, currentUser)
        .then(()=>{
            console.log("swal")
            swal("Successfully Updated department!")
            .then(() => {
                window.location.reload();
            })
        })
        .catch(
           error=> {
               console.log(error);
            
        }
           
        )
      }

      const currentUserInputChange = (event) => {
    
        const { name, value } = event.target;
        setCurrentUser({ ...currentUser, [name]: value });
      };


    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };


    console.log('sagar',user);
    return (
        
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name) return;
                    axios.post('https://uditsolutions.in/vinrajbackend/public/api/departments',user)
                    .then(()=>{
                        console.log("swal")
                        swal("Successfully Created Department!")
                        .then(() => {
                            window.location.reload();
                        })
                    })
                    .catch(
                       error=> console.log(error)
                     )
                // props.addUser(user);
                // setUser(initialFormState);
            }}
        >
            <div className="form-row" style={{ fontSize: "12px" }}>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Department Name</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" 
                    value={editing? currentUser.name : user.name} name="name" 
                    onChange={editing? currentUserInputChange : handleInputChange} />
                </div>
           

                
                
                 <div className="form-group col-md-3 mt-4">
                 {!editing || !currentUser ? (
            <button className="btn btn-primary " type="submit">
              Add
            </button>
          ) : (
            <button
              className="btn btn-primary "
              type="button"
              onClick={() => updateEditedRow(currentUser.id)}
            >
              Update
            </button>
          )}
                </div>   

            </div>
        
        </form>
    );
}

export default DepartmentAddUserForm
