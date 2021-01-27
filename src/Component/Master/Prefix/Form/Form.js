import React, { useState, Fragment } from "react";
import UserTable from '../Table'
import AddUserForm from "../AddUserForm";
import Sidebar from '../../../Home/Sidebar'
import FormTable from "./FormTable";
import FormAddUser from "./FormAddUser";

function Form() {
    const usersData = [
        {
            form_name: "", deparment: "",
            prefix: ""

        },

    ];


    const [users, setUsers] = useState(usersData);


    const addUser = user => {
        // user.id = users.length + 1;
        setUsers([...users, user]);
    };

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id));
    };


    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };

    const [currentUser, setCurrentUser] = useState(initialFormState);


    const editRow = user => {
        setEditing(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username });
    };


    const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map(user => (user.id === id ? updateUser : user)));
    };


    return (
        <Fragment>
            <div className="wrapper">
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/" className="nav-link">Home</a>
                        </li>

                    </ul>
                    {/* SEARCH FORM */}

                </nav>
                {/* /.navbar */}
                {/*  */}


               <Sidebar/>
                <div class="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                        <div className="container">

<div className="flex-row">
    <div className="flex-large">
        {editing ? (
            <div>
                {/* <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                /> */}
            </div>
        ) : (
                <div>

                    <FormAddUser form usersData={usersData} />
                </div>
            )}
    </div>
    <div className="flex-large">
        {/* <h2>View users</h2> */}
        <FormTable users={users} deleteUser={deleteUser} editRow={editRow} />
    </div>
</div>
</div>
                        </div>
                    </section>
                </div>

            </div>
        </Fragment>
    )
}

export default Form
