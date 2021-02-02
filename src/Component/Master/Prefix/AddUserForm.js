import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
const AddUserForm = ({ currentUser, editing, setEditing, setCurrentUser }) => {
  // const initialFormState = { name: "", under_group_name: "" };
  const [user, setUser] = useState({
    form_id: "",
    department_id: "",
    prefix: "",
  });
  const [form, setForm] = useState([]);
  const [department, SetDepartment] = useState([]);
  const [dep2, setDep2] = useState([]);

  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/forms")
      .then((res) => {
        console.log(res.data, "department res");
        setForm(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/departments")
      .then((res) => {
        console.log(res.data, "department res");
        SetDepartment(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  const selectHandleInputChange = (event) => {
    setDep2(event.target.value);
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

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
        `https://uditsolutions.in/vinrajbackend/public/api/prefixs/${id}`,
        currentUser
      )
      .then(() => {
        console.log("swal");
        swal("Successfully Updated Prefix!").then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("sagar", user);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (!user.form_id || !user.department_id || !user.prefix) return;
        axios
          .post(
            "https://uditsolutions.in/vinrajbackend/public/api/prefixs",
            user
          )
          .then(() => {
            console.log("swal");
            swal("Successfully Created Prefix!").then(() => {
              setEditing(false);
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
          <label htmlFor="inputPassword4"> Department</label>
          <select
            type="text"
            className="form-control"
            id="inputPassword4"
            name="department_id"
            value={editing ? currentUser.department_id : department.id}
            onChange={
              editing ? currentUserInputChange : selectHandleInputChange
            }
          >
            {" "}
            <option>select</option> &&
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

          <select
            type="text"
            className="form-control"
            id="inputPassword4"
            name="form_id"
            value={editing ? currentUser.form_id : form.id}
            onChange={editing ? currentUserInputChange : handleInputChange}
          >
            {" "}
            <option>select</option> &&
            {!editing
              ? form?.map((form) => {
                  if (dep2 === form.department_id) {
                    //  console.log("Dep2", dep2);
                    //  console.log("department value", form.department_id);

                    return (
                      <option key={form.id} value={form.id}>
                        {form.name}
                      </option>
                    );
                  }
                  return <div></div>;
                })
              : currentUser
              ? <option>{currentUser.form_name}</option> &&
                form?.map((form) => {
                  if (currentUser.department_id === form.department_id) {
                    console.log("Dep2", dep2);
                    console.log("department value", form.department_id);

                    return (
                      <option key={form.id} value={form.id}>
                        {form.name}
                      </option>
                    );
                  }
                  return <div></div>;
                })
              : null}
            {/* {form.map((form) => <option key={form.id}  value={form.id}>{form.name}</option>)} */}
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputPassword4">Prefix</label>
          <input
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder=""
            value={!editing ? user.prefix : currentUser.prefix}
            name="prefix"
            onChange={editing ? currentUserInputChange : handleInputChange}
          />
        </div>

        <div className="form-group col-md-3 mt-4">
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
