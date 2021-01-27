import React, { useState, useEffect } from "react";
import axios from 'axios'
import swal from 'sweetalert'

function FormAddUser() {
    const [user, setUser] = useState(
        {
            department_id: '',
            name:"",

        }
    );
    
    const [department, SetDepartment] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/departments")
            .then(
                res => {
                    console.log(res.data, 'department res');
                    SetDepartment(res.data)
                })

            .catch(
                error => console.log(error)
            )
    }, [])

    const handleInputChange = event => {
        const { name, value, id } = event.target;
        setUser({ ...user, [name]: value, id: id });
    };
    console.log('sagar',user);
    return (
        
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name) return;
                    axios.post('https://uditsolutions.in/vinrajbackend/public/api/forms',user)
                    .then(()=>{
                        console.log("swal")
                        swal("Successfully Created Form Name!")
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
                    <select type="text" className="form-control" id="inputPassword4" name="department_id" value={department.id} onChange={handleInputChange} >
                        {department.map((dep) => <option key={dep.id} value={dep.id}>{dep.name}</option>)}
                    </select>
                </div>
            
                <div className="form-group col-md-3">
                <label htmlFor="inputPassword4"> Form name </label>
                <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
            </div>
           
          
                
                
                 <div className="form-group col-md-3 mt-4">
                 <button className="btn btn-primary " type="submit" >Add</button>
                </div>   

            </div>
        
        </form>
    );
}

export default FormAddUser
