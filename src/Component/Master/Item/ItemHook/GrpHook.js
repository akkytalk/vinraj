import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./form/AddUserForm";

import axios from "axios";

const GrpHookSingle  = () => {
    const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: "",
    item_group_id: "",
    item_group_name: "",
    unit: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  async function editRow(id) {
    axios
      .get(
        `https://uditsolutions.in/vinrajbackend/public/api/items/${id}`,
        currentUser
      )
      .then((res) => {
        console.log(res.data, "editing data res");
        setEditing(res.data);
        setCurrentUser({
          id: res.data.id,
          item_group_id: res.data.item_group.id,
          item_group_name: res.data.item_group.name,
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
                   

                                <AddUserForm currentUser={currentUser}
                      editing={editing}
                      setEditing={setEditing}
                      setCurrentUser={setCurrentUser} />
                           
                </div>
                <div className="flex-large">
                    
                    <UserTable editRow={editRow} />
                </div>
            </div>
        </div>
    );
};

export default GrpHookSingle;
