import React, { useState } from "react";

const AddUserForm = props => {
    const initialFormState = { id: null, name: "", username: "" };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return;
                props.addUser(user);
                setUser(initialFormState);
            }}
        >
            <div className="form-row" style={{ fontSize: "10px" }}>

                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4"> NAme  </label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Email</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.username} name="username" onChange={handleInputChange} />
                </div>
                    {/*  */}
                <div className="form-group col-md-3">
                            <label htmlFor="inputPassword4">password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="password" />
                        </div>

                        <div className="form-group col-md-3">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                    </div>
                    <div className="form-row" style={{ fontSize: "10px" }}>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCity">Phone</label>
                            <input type="phone" className="form-control" id="inputCity" value={user.phone} name="phone" onChange={handleInputChange} />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-3">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                 
            </div>
            <button className="btn btn-primary">Add</button><br/>
        </form >
    );
};

export default AddUserForm;
