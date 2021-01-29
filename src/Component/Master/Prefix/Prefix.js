import React, { useEffect, useState } from "react";
import UserTable from './Table'
import AddUserForm from "./AddUserForm";
import axios from "axios";
// import EditUserForm from "./EditUserForm";

const GrpHook = () => {
    


    const [user, SetUser] = useState([])
    useEffect(() => {
        axios.get("https://uditsolutions.in/vinrajbackend/public/api/prefixs")
            .then(
                res => {
                    console.log(res.data, 'res');
                    SetUser(res.data)
                })

            .catch(
                error => console.log(error)
            ) 
        
    }, [])


    // const addUser = user => {
    //     // user.id = users.length + 1;
    //     setUsers([...users, user]);
    // };

    // const deleteUser = id => {
    //     setUsers(users.filter(user => user.id !== id));
    // };


    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, name: "", username: "" };

    const [currentUser, setCurrentUser] = useState(initialFormState);


    const editRow = () => {

        axios.get("https://uditsolutions.in/vinrajbackend/public/api/prefixs")
        .then(
            res => {
                console.log(res.data, 'res');
                SetUser(res.data)
            })

        .catch(
            error => console.log(error)
        ) 
        setEditing(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username });
    };


    // const updateUser = (id, updateUser) => {
    //     setEditing(false);
    //     setUsers(users.map(user => (user.id === id ? updateUser : user)));
    // };





    return (
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

                                <AddUserForm  />
                            </div>
                        )}
                </div>
                <div className="flex-large">
                    {/* <h2>View users</h2> */}
                    <UserTable user={user} editRow={editRow} />
                </div>
            </div>
        </div>
    );
};

export default GrpHook;
