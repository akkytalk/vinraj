import React, { useEffect, useState } from "react";
import axios from 'axios'
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';


const AddUserForm = props => {
    // const initialFormState = { name: "", under_group_name: "" };
    const [user, setUser] = useState(
        {
            name: "",
            under_group_name: ""
        }
    );

    const [item, SetItem] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/itemGroups")
            .then(
                res => {
                    console.log(res.data, 'department res');
                    SetItem(res.data)
                })

            .catch(
                error => console.log(error)
            )
    }, [])

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
                    axios.post('https://uditsolutions.in/vinrajbackend/public/api/itemGroups',user)
                    .then(()=>{
                        console.log("swal")
                        swal("Successfully Created Item Group!")
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

                <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4"> Item Group </label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
                </div>
                
                <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4">Under Item Group </label>
                    <select id="inputPassword4" type="text" value={user.under_group_name}  name="under_group_name"  className="form-control" onChange={handleInputChange} >
                  {item.map((item) => <option key={item.id} value={item.name}>{item.name}</option>)}
                    
                  </select>
                </div>
                 <div className="form-group col-md-4 mt-4">
                 <button className="btn btn-primary " type="submit" >Add</button>
                </div>   

            </div>
        
        </form>
    );
};

export default AddUserForm;
