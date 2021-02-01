import React, { useState } from "react";
import UserTable from "./AccountGroupTables/UserTable"
import AddUserForm from "./AccountGroupForm/AddUserForm"
import axios from "axios";


const GrpHook = (props) => {
    

    const [editing, setEditing] = useState(false);

    const initialFormState = {id: "", name: "", aakash:"",  };

    const [currentUser, setCurrentUser] = useState(initialFormState);

    async function editRow (id) {

        

        axios.get(`https://uditsolutions.in/vinrajbackend/public/api/accountGroups/${id}`, currentUser)
        .then( res => {
            console.log(res.data, 'editing data res');
            setEditing(res.data);
            setCurrentUser({id: res.data.id, name: res.data.name, aakash: res.data.under_group_name,});
        })
      .catch(
         error=> console.log(error)
      )
      
      }

      console.log("editing from account Group" , editing)
      console.log("Current User from account Group" , currentUser)

    



    return (
        <div className="container">

            <div className="flex-row">
                <div className="flex-large">
                    
                                <AddUserForm currentUser={currentUser} editing={editing}
                                setEditing={setEditing}
                                setCurrentUser={setCurrentUser} />
                         </div>  
                <div className="flex-large">
                   
                    <UserTable editRow={editRow}  />
                </div>
            </div>
        </div>
    );
};

export default GrpHook;
