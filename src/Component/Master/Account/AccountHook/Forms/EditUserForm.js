import React, { useState, useEffect, Fragment } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])


    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) props.updateUser(user);
    }

    return (
        <Fragment>
            <form>
                <div className="form-row" style={{ fontSize: "12px" }}>

                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4"> Account Group </label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Under Account Group </label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.username} name="username" onChange={handleChange} />
                    </div>
                    <div className="form-group col-md-3 mt-4">
                    <button className="btn btn-info" type="submit" onClick={handleSubmit} >Edit Account</button>
                    <button type="submit" className="btn btn-info ml-5" onClick={() => props.setEditing(false)} >Cancel</button>
                    </div>
                </div>

            </form>
        </Fragment>
    )
}

export default EditUserForm;