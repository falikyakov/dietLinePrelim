import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const info = {
        email: email,
        password: password
    }

    const loginUser = async (e) => {

        e.preventDefault();

        const user = await axios.post("http://localhost:5990/router/db/dbfind/login", info);
        const userData = user.data;
        console.log(userData);
        const userString = JSON.stringify(userData);
        console.log("userString: " + userString);

        localStorage.setItem("user", userString);

        const localUser = localStorage.getItem("user");
        const localJson = JSON.parse(userString);
        const userId = localJson._id;

        const userPlan = await axios.post("http://localhost:5990/router/db/dbfind/login2", { userId: userId });
        const userPlanData = userPlan.data;
        console.log(userPlanData);
        const userPlanString = JSON.stringify(userPlanData);
        console.log("userPlanString: " + userPlanString);

        localStorage.setItem("userPlan", userPlanString);


        history.push('/checkLogin');

    }


    return (
        <div>
            <div className="login-form">
                <form>
                    <div className="avatar"><i className="material-icons">&#xE7FF;</i></div>
                    <h4 className="modal-title">Login to Your Account</h4>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required="required" onChange={changeEmail} />
                    </div>
                    {email}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" onChange={changePassword} />
                    </div>
                    {password}

                    <Link to="/checkLogin"><input type="submit" className="btn btn-primary btn-block btn-lg" value="Login" onClick={loginUser} /></Link>
                </form>
                <div className="text-center small">Don't have an account? <Link to="/signup" style={{ color: "black" }}><u>Sign up</u></Link></div>
            </div>
        </div>
    )
}

export default withRouter(Login);
