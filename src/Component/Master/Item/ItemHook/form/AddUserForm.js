import React, { useState } from "react";
import axios from 'axios'
import swal from 'sweetalert';
import Form from 'react-bootstrap/Form';


const AddUserForm = props => {
    // const initialFormState = { name: "", under_group_name: "" };
    const [item, setItem] = useState(
        {
            name: "",
            item_group_name: "",
            unit: "",
        }
    );

    const handleInputChange = event => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };
    console.log('sagar', item);
    return (

        <form
            onSubmit={event => {
                event.preventDefault();
                if (!item.name || !item.unit) return;
                axios.post('https://uditsolutions.in/vinrajbackend/public/api/items', item)
                    .then(() => {
                        console.log("swal")
                        swal("Successfully Created Item !")
                            .then(() => {
                                window.location.reload();
                            })
                    })
                    .catch(
                        error => console.log(error)
                    )
                // props.addUser(user);
                // setUser(initialFormState);
            }}
        >
            <div className="form-row" style={{ fontSize: "12px" }}>

                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4"> Item Name </label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={item.name} name="name" onChange={handleInputChange} />
                </div>
                {/* <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Under Item Group</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={item.item_group_name} name="item_group_name" onChange={handleInputChange} />
                </div> */}
                <Form.Group controlId="exampleForm.ControlSelect1"  className="form-group col-md-4" >
                    <Form.Label>Under Item Group</Form.Label>
                    <Form.Control as="select">
                    <option>under item name</option>
                    <option>it01</option>
                    <option>test single under</option>
                    <option>under item</option>
                    </Form.Control>
                  </Form.Group>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Unit</label>
                    <input type="number" className="form-control" id="inputPassword4" placeholder="" value={item.unit} name="unit" onChange={handleInputChange} />
                </div>
                <div className="form-group col-md-3 mt-4">
                    <button className="btn btn-primary" type="submit" >Add</button>
                </div>

            </div>

        </form>
    );
};

export default AddUserForm;
