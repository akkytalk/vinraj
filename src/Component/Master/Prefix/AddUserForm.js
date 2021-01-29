import React, { useState, useEffect } from "react";
import axios from 'axios'
import swal from 'sweetalert'
const AddUserForm = props => {
    // const initialFormState = { name: "", under_group_name: "" };
    const [user, setUser] = useState(
        {
            form_id: "",
            department_id:"",
            prefix: ""
        }
    );
    const [form, setForm] = useState([])
    const [department, SetDepartment] = useState([]);
    const [dep2, setDep2] = useState([]);

    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/forms")
            .then(
                res => {
                    console.log(res.data, 'department res');
                    setForm(res.data)
                })

            .catch(
                error => console.log(error)
            )
    }, [])

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

    const selectHandleInputChange = event => {
        setDep2(event.target.value);
        const { name, value,  } = event.target;
        setUser({ ...user, [name]: value,  });
    
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
                if (!user.form_id || !user.department_id || !user.prefix) return;
                    axios.post('https://uditsolutions.in/vinrajbackend/public/api/prefixs',user)
                    .then(()=>{
                        console.log("swal")
                        swal("Successfully Created Prefix!")
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
                    <label htmlFor="inputPassword4"> Department</label>
                    <select type="text" className="form-control" id="inputPassword4" name="department_id" value={department.id} onChange={selectHandleInputChange} >
                        {department.map((dep) => <option key={dep.id}   value={dep.id}>{dep.name}</option>)}
                    </select>
                </div>
                 
                <div className="form-group col-md-3">
                <label htmlFor="inputPassword4"> Form name </label>
               
                <select type="text" className="form-control" id="inputPassword4" name="form_id" value={form.id} onChange={handleInputChange} >
                    {
                    
                         form.map((form) => {
                             if(dep2 === form.department_id ) {
                                 
                                //  console.log("Dep2", dep2);
                                //  console.log("department value", form.department_id);
                               
                                return (<option key={form.id}   value={form.id}>{form.name}</option>)
                             }
                         return (<div></div>)    
                    })}
                    
                {/* {form.map((form) => <option key={form.id}  value={form.id}>{form.name}</option>)} */}
                    </select>
            </div>
           
              
              
             
              <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">prefix</label>
              <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.prefix} name="prefix" onChange={handleInputChange} />
              </div> 
                
                
                 <div className="form-group col-md-3 mt-4">
                 <button className="btn btn-primary " type="submit" >Add</button>
                </div>   

            </div>
        
        </form>
    );
};

export default AddUserForm;