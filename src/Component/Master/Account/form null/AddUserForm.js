// import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';


// const AddUserForm = props => {
//     const initialFormState = { id: null, name: "", username: "" };
//     const [user, setUser] = useState(initialFormState);

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         setUser({ ...user, [name]: value });
//     };

//     return (
//         <form
//             onSubmit={event => {
//                 event.preventDefault();
//                 if (!user.name || !user.username) return;
//                 props.addUser(user);
//                 setUser(initialFormState);
//             }}
//         >
//             <div className="form-row" style={{ fontSize: "12px" }}>

//                 <div className="form-group col-md-6">
//                     <label htmlFor="inputPassword4"> Item </label>
//                     <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.name} name="name" onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group col-md-6">
//                     <label htmlFor="inputPassword4">Under Item Group</label>
//                     <input type="text" className="form-control" id="inputPassword4" placeholder="" value={user.username} name="username" onChange={handleInputChange} />
//                 </div>
//                  {/* <Form.Group controlId="exampleForm.ControlSelect1"  className="form-group col-md-4" >
//                     <Form.Label>Under IteM Group</Form.Label>
//                     <Form.Control as="select">
//                     <option>under item group</option>
//                     <option>u a/c</option>
//                     <option>solutions</option>
//                     </Form.Control>
//                   </Form.Group> */}
//                   <div className="form-group col-md-4 mt-4">
//                  <button className="btn btn-primary " type="submit" >Add</button>
//                 </div> 


//             </div>
//             {/* <button className="btn btn-primary">Add</button> */}
//         </form>
//     );
// };

// export default AddUserForm;
