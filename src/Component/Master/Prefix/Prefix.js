import React, {  useState } from "react";
import UserTable from './Table'
import AddUserForm from "./AddUserForm";
import axios from "axios";
// import EditUserForm from "./EditUserForm";

const GrpHook = () => {
    


    // const [user, SetUser] = useState([])
    // useEffect(() => {
    //     axios.get("https://uditsolutions.in/vinrajbackend/public/api/prefixs")
    //         .then(
    //             res => {
    //                 console.log(res.data, 'res');
    //                 SetUser(res.data)
    //             })

    //         .catch(
    //             error => console.log(error)
    //         ) 
        
    // }, [])


    // const addUser = user => {
    //     // user.id = users.length + 1;
    //     setUsers([...users, user]);
    // };

    


    const [editing, setEditing] = useState(false);

    const initialFormState = {id: "", form_id: "", form_name:"",  department_id: "", department_name: "",  prefix: "" };

    const [currentUser, setCurrentUser] = useState(initialFormState);

    async function editRow (id) {

        

        axios.get(`https://uditsolutions.in/vinrajbackend/public/api/prefixs/${id}`, currentUser)
        .then( res => {
            console.log(res.data, 'editing data res');
            setEditing(res.data);
            setCurrentUser({id: res.data.id, form_id: res.data.form_id, form_name: res.data.form.name, department_id: res.data.department_id, department_name: res.data.department.name, prefix: res.data.prefix });
        })
      .catch(
         error=> console.log(error)
      )
      
      }

      console.log("editing" , editing)
      console.log("Current User" , currentUser)

    





    return (
        <div className="container">

            <div className="flex-row">
                <div className="flex-large">
                     
                     
                                <AddUserForm  currentUser={currentUser} editing={editing}
                                setEditing={setEditing}
                                setCurrentUser={setCurrentUser}
                                />
                     
                </div>
                <div className="flex-large">
                    {/* <h2>View users</h2> */}
                    <UserTable  editRow={editRow} currentUser={currentUser} editing={editing}
                                setEditing={setEditing}
                                setCurrentUser={setCurrentUser} />
                </div>
            </div>
        </div>
    );
};

export default GrpHook;
