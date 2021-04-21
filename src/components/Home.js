import React, { useEffect, useState } from 'react'
import ReactSlider from './ReactSlider'
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from './HomeCard';


const Home = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
    }, [])

    return (
        <div>
            <center>
                <ReactSlider />
            </center>
            <div className="card-group" style={{ margin: "70px" }}>
                <HomeCard src="/images/meal1.jpg" title="Articles" text="See articles related to blah blah blah See articles related to blah blah blahDelicious recipes to help you stay healthy" more="Browse articles" icon="<FontAwesomeIcon icon={faNewspaper} />" />
                <HomeCard title="Tips" text="Tips to stay healthy Tips to stay healthy Tips to stay healthy Tips to stay healthy" more="See more tips" />
                <HomeCard title="Recipes" text="Delicious recipes to help you stay healthy Delicious recipes to help you stay healthyDelicious recipes to help you stay healthy" more="Browse recipes" />
            </div>
            <h1><big>Home Page</big></h1>
            {
                user &&
                <h1><i>Welcome {user.FirstName + " " + user.LastName}</i></h1>
            }

            <h1><big>Home Page</big></h1>           <h1><big>Home Page</big></h1>
            <div class="col-md-6 mb-4">

                <h2 class="my-5 h2">With shadow</h2>

                <img class="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                    data-holder-rendered="true" />

            </div>
            <h1><big>Home Page</big></h1>           <h1><big>Home Page</big></h1>

        </div>
    )
}

export default Home
