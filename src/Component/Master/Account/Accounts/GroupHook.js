
import axios from "axios";
import React, { useState } from "react";
import AddUserForm from "./AccountForms/AddUserForm"

import UserTable from "./AccountTable/UserTable"
const GrpHook = () => {
    const [editing, setEditing] = useState(false);

    const initialFormState = {id: "", name: "", table:"",  };

    const [currentUser, setCurrentUser] = useState(initialFormState);

    async function editRow (id) {

          

        axios.get(`https://uditsolutions.in/vinrajbackend/public/api/accounts/${id}`, currentUser)
        .then( res => {
            console.log(res.data, 'editing data res');
            setEditing(res.data);
            setCurrentUser({id: res.data.id, name: res.data.name, table: res.data.account_group_name,});
        })
      .catch(
         error=> console.log(error)
      )
      
      }

      console.log("editing from account" , editing)
      console.log("Current User from account" , currentUser)

    





   
    

    return (
        <div className="container">

            <div className="flex-row">
                <div className="flex-large">
                    

                                <AddUserForm currentUser={currentUser} editing={editing}
                                setEditing={setEditing}
                                setCurrentUser={setCurrentUser} />
                      
                </div>
                <div className="flex-large">
                    
                    <UserTable  editRow={editRow} />
                </div>
            </div>
        </div>
    );
};

export default GrpHook;
