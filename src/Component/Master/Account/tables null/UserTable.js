// import React from "react";

// const UserTable = props => (
//     <table className="table" style={{fontSize:"12px"}}>
//         <thead>
//             <tr>
//                 <th scope="col">Item Name</th>
//                 <th scope="col">Under Item Group</th>
//                 <th scope="col">Actions</th>
//             </tr>
//         </thead>
//         <tbody>
//             {props.users.length > 0 ? (
//                 props.users.map(user => (
//                     <tr key={user.id}>
//                         <td>{user.name}</td>
//                         <td>{user.username}</td>
//                         <td>
//                             <button
//                                 className="btn btn-primary"
//                                 onClick={() => props.editRow(user)}
//                             >
//                                 Edit
//               </button>
//                             <button

//                                 className="btn btn-primary ml-5"
//                                 onClick={() => props.deleteUser(user.id)}
//                             >
//                                 Delete
//               </button>
//                         </td>
//                     </tr>
//                 ))
//             ) : (
//                     <tr>
//                         <td colSpan={3}>No users</td>
//                     </tr>
//                 )}
//         </tbody>
//     </table>
// );

// export default UserTable;
