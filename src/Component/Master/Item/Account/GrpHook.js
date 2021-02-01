import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./form/AddUserForm";
import EditUserForm from "./form/EditUserForm";
import axios from "axios";

const GrpHook = () => {
    
    const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    department_id: "",
    department_name: "",
    name: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  async function editRow(id) {
    axios
      .get(
        `https://uditsolutions.in/vinrajbackend/public/api/forms/${id}`,
        currentUser
      )
      .then((res) => {
        console.log(res.data, "editing data res");
        setEditing(res.data);
        setCurrentUser({
          id: res.data.id,
          department_id: res.data.department.id,
          department_name: res.data.department.name,
          name: res.data.name,
        });
      })
      .catch((error) => console.log(error));
  }

  console.log("editing", editing);
  console.log("Current User", currentUser);

    
    return (
        <div className="container">

            <div className="flex-row">
                <div className="flex-large">
                   
                                <AddUserForm  currentUser={currentUser}
                      editing={editing}
                      setEditing={setEditing}
                      setCurrentUser={setCurrentUser} />
                           
                </div>
                <div className="flex-large">
                   
                    <UserTable  editRow={editRow}
                      currentUser={currentUser}
                      editing={editing}
                      setEditing={setEditing}
                      setCurrentUser={setCurrentUser} />
                </div>
            </div>
        </div>
    );
};

export default GrpHook;
