import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function FormAddUser({ currentUser, editing, setEditing, setCurrentUser }) {
  const [user, setUser] = useState({
    department_id: "",
    name: "",
  });

  const [department, SetDepartment] = useState([]);
  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/departments")
      .then((res) => {
        console.log(res.data, "department res");
        SetDepartment(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  async function updateEditedRow(id) {
    setEditing(false);

    axios
      .put(
        `https://uditsolutions.in/vinrajbackend/public/api/forms/${id}`,
        currentUser
      )
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Form Name!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const currentUserInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  console.log("sagar", user);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name) return;
        axios
          .post("https://uditsolutions.in/vinrajbackend/public/api/forms", user)
          .then(() => {
            console.log("swal");
            swal("Successfully Created Form Name!").then(() => {
              window.location.reload();
            });
          })
          .catch((error) => console.log(error));
        // props.addUser(user);
        // setUser(initialFormState);
      }}
    >
      <div className="form-row" style={{ fontSize: "12px" }}>
        <div className="form-group col-md-3">
          <label htmlFor="inputPassword4">Department Name</label>
          <select
            type="text"
            className="form-control"
            id="inputPassword4"
            name="department_id"
            value={editing ? currentUser.department_id : department.id}
            onChange={editing ? currentUserInputChange : handleInputChange}
          >
            {!editing
              ? department?.map((dep) => (
                  <option key={dep.id} value={dep.id}>
                    {dep.name}
                  </option>
                ))
              : currentUser
              ? <option>{currentUser.department_name}</option> &&
                department?.map((dep) => (
                  <option key={dep.id} value={dep.id}>
                    {dep.name}
                  </option>
                ))
              : null}
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputPassword4"> Form name </label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder=""
            value={!editing ? user.name : currentUser.name}
            name="name"
            onChange={editing ? currentUserInputChange : handleInputChange}
          />
        </div>

        <div className="form-group col-md-3 mt-4">
          {!editing ? (
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
}

export default FormAddUser;
