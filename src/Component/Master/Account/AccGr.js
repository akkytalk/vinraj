import React, { Fragment } from 'react'
import Sidebar from '../../Home/Sidebar'
import SimpleTabs from './Tab'
import Tab from './Tab'
const Accgrp = () => {
    return (
        <Fragment>
            <div className="wrapper">
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                        </li>
                        {/* <li className="nav-item d-none d-sm-inline-block">
                            <a href="/" className="nav-link">Home</a>
                        </li> */}

                    </ul>
                    {/* SEARCH FORM */}

                </nav>
                {/* /.navbar */}
                {/*  */}


                <Sidebar />
                <div class="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            <SimpleTabs/>

                        </div>
                    </section>
                </div>

            </div>
        </Fragment>
    )
}

export default Accgrp