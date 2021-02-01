import React, { useState, Fragment } from "react";

import Sidebar from "../../../Home/Sidebar";
import FormTable from "./FormTable";
import FormAddUser from "./FormAddUser";
import axios from "axios";

function Form(props) {
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
    <Fragment>
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
          {/* SEARCH FORM */}
        </nav>
        {/* /.navbar */}
        {/*  */}

        <Sidebar />
        <div class="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div className="container">
                <div className="flex-row">
                  <div className="flex-large">
                    <FormAddUser
                      currentUser={currentUser}
                      editing={editing}
                      setEditing={setEditing}
                      setCurrentUser={setCurrentUser}
                    />
                  </div>
                  <div className="flex-large">
                    <FormTable
                      editRow={editRow}
                      currentUser={currentUser}
                      editing={editing}
                      setEditing={setEditing}
                      setCurrentUser={setCurrentUser}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
}

export default Form;
