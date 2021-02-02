import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
// import Form from "react-bootstrap/Form";

const AddUserForm = ({ currentUser, editing, setEditing, setCurrentUser }) => {
  // const initialFormState = { name: "", under_group_name: "" };
  const [user, setUser] = useState({
    account_group_id: "",
    name: "",
  });

  const [accountGroups, SetAccountGroups] = useState([]);
  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/accountGroups")
      .then((res) => {
        console.log(res.data, "account group table res");
        SetAccountGroups(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const currentUserInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  async function updateEditedRow(id) {
    setEditing(false);

    axios
      .put(
        `https://uditsolutions.in/vinrajbackend/public/api/accounts/${id}`,
        currentUser
      )
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Account!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("sagar", user);
  console.log("account gruop data", accountGroups);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name) return;
        axios
          .post(
            "https://uditsolutions.in/vinrajbackend/public/api/accounts",
            user
          )
          .then(() => {
            console.log("swal");
            swal("Successfully Created Account!").then(() => {
              window.location.reload();
            });
          })
          .catch((error) => console.log(error));
        // props.addUser(user);
        // setUser(initialFormState);
      }}
    >
      <div className="form-row" style={{ fontSize: "12px" }}>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Account Name </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder=""
            value={editing ? currentUser.name : user.name}
            name="name"
            onChange={editing ? currentUserInputChange : handleInputChange}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Under Account Group </label>
          <select
            id="inputPassword4"
            type="text"
            value={editing ? currentUser.table : accountGroups}
            name="account_group_id"
            className="form-control"
            onChange={editing ? currentUserInputChange : handleInputChange}
          >
            {" "}
            <option>select</option> &&
            {accountGroups?.map((acc) => (
              <option key={acc.id} value={acc.name}>
                {acc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-md-4 mt-4">
          {!editing || !currentUser ? (
            <button className="btn btn-primary " type="submit">
              Add
            </button>
          ) : (
            <button
              className="btn btn-primary "
              type="button"
              onClick={() => updateEditedRow(currentUser.id)}
            >
              Update
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
