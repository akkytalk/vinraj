import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
    "& > * + *": {
      marginLeft: theme.spacing(2),
      
    },
    
  },

  CircularProgress : {
    color: "white !important",
    animationDirection: "2s !important"
  },

  
}));

const Sidebar = () => {
    const classes = useStyles();
    const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState([]);
  const [department, SetDepartment] = useState([]);
  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/departments")
      .then((res) => {
     //   console.log(res.data, "department res");
        SetDepartment(res.data);
        setLoading(false);
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://uditsolutions.in/vinrajbackend/public/api/forms")
      .then((res) => {
      //  console.log(res.data, "department res");
        setForm(res.data);
      })

      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Fragment>
      {/* Main Sidebar Container */}
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        style={{ overflow: "scroll", width: "250px;" }}
      >
        {/* Sidebar */}
        <div className="sidebar" style={{ paddingRight: "0px;" }}>
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                ADMIN
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          {/* Sidebar Menu */}
          <nav className="mt-2" id="MainMenu">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <p>Dashboard</p>
                </Link>
              </li>

              <li className="nav-item ">
                <a href="#" className="nav-link">
                  <p>Master</p>
                </a>
                <ul className="nav nav-treeview">
                  {/* <li className="nav-item">
                                        <Link to="/master" className="nav-link">
                                           
                                            <p>
                                            User Master
                 
                
                                            </p>
                                        </Link>
                                    </li> */}
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <p>Reference Number Prefix</p>
                    </Link>

                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/department" exact className="nav-link">
                          <p>Department</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/form" className="nav-link">
                          <p>Form</p>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/prefix" className="nav-link">
                          <p>Prefix</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">
                      <p>Account Master</p>
                    </a>

                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/accgrp" className="nav-link">
                          <p>Account Group</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/acc" className="nav-link">
                          <p>Account</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <p>Item Master</p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <Link to="/itemgrp" className="nav-link">
                          <p>Item Group </p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/item" className="nav-link">
                          <p>Single Item</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/master" className="nav-link">
                  <p>Users & Pws</p>
                </Link>
              </li>

              {loading ? (
                <div className={classes.root}>
                  <CircularProgress variant="determinate" className={classes.CircularProgress} value={progress} />
                  
                </div>
              ) : (
                department.map((dep, index) => (
                  <li key={dep.id} className="nav-item">
                    <a className="nav-link ">
                      <p>{dep.name}</p>
                    </a>
                    <ul className="nav nav-treeview">
                      {form.map((form) => {
                        if (dep.id == form.department_id) {
                          // console.log("form data", dep.id);
                          // console.log("form else data", form.department_id);

                          return (
                            <li key={form.id} className="nav-item">
                              <Link to={form.url} className="nav-link">
                                <p>{form.name}</p>
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                ))
              )}
              {/*
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <p>
                                       HRA
                                     
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <p>
                                        QC
                                     
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    
                                    <p>
                                    MAINTENANCE
                                     
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                            <p>Equimenrt Validation reports</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                            <p>Preventive Maintance plan</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Mainchery & Equiment Manual List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>BreakDown Maintance </p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>List Of Supplier For Maintance Activity</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Maintance Cleanliness Activity</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Previtive Maintance Schedule</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Previtive Maintance Record</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Previtive Maintance Anylasis reports</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>BreakDown Maintance Record</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>BreakDown Maintance Anylasis Report</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                   
                                    <p>
                                    PRODUCTION	
                                
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Production Planinng CF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>PROduction Report CF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Stock Report CF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Process Parameter CF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Production Planinng VF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Production Report VF</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p> Stock Report VF</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                  
                                    <p>
                                                PURCHASE
                     
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/purchase" className="nav-link">
                                           
                                            <p>Authorized Supplier List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/purchase" className="nav-link">
                                           
                                            <p>PURCHASE Requistion</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/purchase" className="nav-link">
                                           
                                            <p>Supplier Performance and Mointoring</p>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                  
                                    <p>
                                    QMS	
                                   
                                
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Incoming Material List</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Customer Complaint record</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Customer Complaint And Investigation reports</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>CCPA</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>PRODUCTION MA</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                   
                                    <p>
                                        SALES
                                   
                                
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Equiry Form</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Customer Registration Form</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Quotation</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Sales  Target Plan vs Actual</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
              {/* <li className="nav-header">EXAMPLES</li> */}

              {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <p>
                                    STORES
            
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Purchase Requistion</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Incoming Material And CheckList</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Stock Register</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>List OF ShelF Life Itmes</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/equip" className="nav-link">
                                           
                                            <p>Record OF Disposal OF Shlied Items</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </Fragment>
  );
};

export default Sidebar;
