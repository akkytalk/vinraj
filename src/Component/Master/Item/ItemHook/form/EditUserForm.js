import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(
        () => {
            setUser(props.currentUser);
        },
        [props]
    );

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                props.updateUser(user.id, user);
            }}
        >
            <div className="form-row" style={{ fontSize: "10px" }}>

                <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4"> Item Name </label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputPassword4">User Item Single</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.username} name="username" onChange={handleInputChange} />
                </div>

                <div className="form-group col-md-4 mt-4">
                <button className="btn btn-info">Update user</button>
            <button
                onClick={() => props.setEditing(false)}
                className="btn btn-info ml-2"
            >
                Cancel
      </button> 
                </div>

            </div>
            
        </form>
    );
};

export default EditUserForm;
