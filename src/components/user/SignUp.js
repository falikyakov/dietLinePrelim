import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState();
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeDob = (e) => {
        setDob(e.target.value);
    }
    const changeHeight = (e) => {
        setHeight(e.target.value);
    }
    const changeWeight = (e) => {
        setWeight(e.target.value);
    }
    const changeAge = (e) => {
        setAge(e.target.value);
    }
    const changeGender = (e) => {
        setGender(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }
    const changeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }


    const user = {
        "firstName": firstName,
        "lastName": lastName,
        "dob": dob,
        "height": height,
        "weight": weight,
        "gender": gender,
        "email": email,
        "password": password
    };

    function calculate_age(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }



    const submitUser = async (event) => {
        event.preventDefault();

        alert(calculate_age(new Date(dob)));
        alert("Hello, user function")
        console.log("Hello from submitUser")

        // let data = await axios.post("http://localhost:5990/router/db/DBinsert/insertUser", user);
        // let jsonData = data.json();
        // alert(jsonData);
        // console.log(jsonData);


        axios.post("http://localhost:5990/router/db/DBinsert/insertUser", user)
            .then(
                (response) => {
                    console.log(response.data);
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );

    };


    return (
        <div>
            <Container id="subg" style={{ width: "800px", border: "solid lightGreen", borderRadius: "5%", backgroundColor: "lightpink", marginTop: "98px" }} >
                <br /><h2 style={{ color: "red" }}><u>Sign Up</u></h2><br />
                <center>
                    <form className="form-horizontal" style={{ margin: "20px 20px" }} >
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="firstName" style={{ color: "red" }} >First Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" onChange={changeFirstName} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="lastName">Last Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" onChange={changeLastName} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3" htmlFor="dob">Date of Birth:</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" id="dob" name="dob" placeholder="Date of Birth" onChange={changeDob} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="height">Height (cm):</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="height" name="height" placeholder="Enter Height in centimeters" onChange={changeHeight} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="weight">Weight (Kg):</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="weight" name="weight" placeholder="Enter Weight in Kg" onChange={changeWeight} />
                            </div>
                        </div>
                        <center style={{ marginTop: "40", fontSize: "1.5em" }} onChange={changeGender}>
                            <input type="radio" id="male" name="gender" value="male" />
                            <label htmlFor="male">&nbsp; Male</label> &nbsp; &nbsp; &nbsp;
                        <input type="radio" id="female" name="gender" value="female" />
                            <label htmlFor="female">&nbsp; Female</label><br />
                        </center><br />
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={changeEmail} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" onChange={changePassword} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-3" htmlFor="confirmPassword">Confirm Password:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm password" onChange={changeConfirmPassword} />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button className="btn btn-success" onClick={submitUser} ><Link to={`/welcome/${user.firstName}/${user.lastName}`}><span style={{ color: "white" }} >Submit</span></Link></button>
                            </div>
                        </div>
                        <br/>
                    </form>
                </center>
            </Container>
            <br /><br />
        </div>
    )
}

export default SignUp
