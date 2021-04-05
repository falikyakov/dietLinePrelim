import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBarUser from './navBarUser';


const NavBar = () => {

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div style={{ margin: "20px" }}>
            {/*fixed-top*/}
            <nav className="navbar navbar-expand-md navbar-light bg-light " style={{ margin: "10px", borderRadius: "8px" }}>
                <a href="#" className="navbar-brand">
                    <img src="/images/logo3.png" alt="CoolBrand" />
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/profile" className="nav-item nav-link">Profile</Link>
                        <Link to="/dash" className="nav-item nav-link">Weekly Stats</Link>
                        <Link to="/foodCats" className="nav-item nav-link " tabIndex="-1">Browse Foods</Link>
                    </div>

                    <div className="navbar-nav ml-auto" onClick={refreshPage}>
                        <NavBarUser />
                    </div>
                    {/*
                    <div className="navbar-nav ml-auto">
                        <Link to="/login" className="nav-item nav-link">Login</Link> <span className="nav-item nav-link">|</span> <Link to="/SignUp" className="nav-item nav-link">Sign Up</Link>
                        <Avatar img="/images/Eat-healthy.jpg" />
                    </div>
                    */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
