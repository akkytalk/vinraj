import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./form/AddUserForm";
import EditUserForm from "./form/EditUserForm";

const GrpHookSingle  = () => {
    const usersData = [
        { id: 1, name: "AAA", username: "aiueo" },
        { id: 2, name: "BBB", username: "kakikukeko" },
        { id: 3, name: "CCC", username: "sasisuseso" }
    ];


    const [users, setUsers] = useState(usersData);


    const addUser = user => {
        user.id = users.length + 1;
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
        <div className="container">

            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <EditUserForm
                                editing={editing}
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>

                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                </div>
                <div className="flex-large">
                    {/* <h2>View users</h2> */}
                    <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
                </div>
            </div>
        </div>
    );
};

export default GrpHookSingle;
