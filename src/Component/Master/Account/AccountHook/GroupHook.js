// import React, { Fragment, useState } from 'react'
// import userList from './Data'
// import UserTable from './Table/UserTable'
// import AddUserForm from './Forms/AddUserForm'
// import EditUserForm from './Forms/EditUserForm'
// const GroupHook = () => {
//     const [users, setUsers] = useState(userList);

//     const addUser = (user) => {
//         user.id = users.length + 1;
//         setUsers([...users, user]);
//     };

//     const deleteUser = (id) => {
//         setUsers(users.filter((user) => user.id !== id));
//     };
//     const [editing, setEditing] = useState(false);

//     const initialUser = { id: null, name: '', username: '' };

//     const [currentUser, setCurrentUser] = useState(initialUser);

//     const editUser = (id, user) => {
//         setEditing(true);
//         setCurrentUser(user);
//     }
//     const updateUser = (newUser) => {
//         setUsers(users.map(user => (user.id === currentUser.id ? newUser : user)))
//       }
//     return (

//         <Fragment>
//             <div>
//                 {editing ? (
//                     <div>
//                         {/* <h2>Edit user</h2> */}
//                         <EditUserForm
//                             currentUser={currentUser}
//                             setEditing={setEditing}
//                             updateUser={updateUser}
//                         />
//                     </div>
//                 ) : (
//                         <div>
//                             {/* <h2>Add user</h2> */}
//                             <AddUserForm addUser={addUser} />
//                         </div>
//                     )}
//             </div>
//             <div className="seven columns">
//                 {/* <h2>View users</h2> */}
//                 <UserTable users={users}
//                     deleteUser={deleteUser}
//                     editUser={editUser}
//                 />

//             </div>

//         </Fragment>
//     )
// }

// export default GroupHook




import React, { useState } from "react";
import AddUserForm from './Forms/AddUserForm'
import EditUserForm from './Forms/EditUserForm'
import UserTable from './Table/UserTable'
const GrpHook = () => {
    const usersData = [
        {  name: "", username: "" },
        
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

                                <AddUserForm usersData={usersData} />
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

export default GrpHook;
