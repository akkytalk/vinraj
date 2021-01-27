import React, { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert'

function DepartmentAddUserForm() {
    // const initialFormState = { name: "", under_group_name: "" };
    const [user, setUser] = useState(
        {
            name:""
        }
    );

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
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
                </div>
           

                
                
                 <div className="form-group col-md-3 mt-4">
                 <button className="btn btn-primary " type="submit" >Add</button>
                </div>   

            </div>
        
        </form>
    );
}

export default DepartmentAddUserForm
