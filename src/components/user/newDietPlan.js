import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NewDietPlan = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);
    },[])

    const [kg, setKg] = useState(0);
    const [excersize, setExcersize] = useState(0);
    const [calories, setCalories] = useState(0);

    const changeKg = (e) => {
        setKg(e.target.value);
    }
    const changeExcersize = (e) => {
        setExcersize(e.target.value);
    }
    const changeCalories = (e) => {
        setCalories(e.target.value);
    }

    const bmiAlert = () => {
        alert("According to your BMI, you need to lose x kg");
    };
    const avgCalories = 1;

    const goals = {
        kgToLose: parseInt(kg),
        excersizePlanned: parseInt(excersize),
        caloriesToLose: parseInt(calories),
        userId: "6045e867e203e344f0335ddf"
    }

    const sendData = async (event) => {
        event.preventDefault();

        axios.post("http://localhost:5990/router/db/DBinsert/insertGoal", goals)
            .then(
                (response) => {
                    // alert("in response");
                    console.log(response.data);
                    // alert(response.data)
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );

    }
    

    return (
        <Container style={{ margin: "5px", border: "solid purple thin", width: "1200px" }}>
            <h1 className="display-6">Goals:</h1>
            <h3 style={{ fontFamily: "cursive" }}>According to your BMI ({user.BMI && user.BMI.toFixed(2)}), you need to lose x kg.</h3>
            <hr /><br />
            <form >
                {/*How many kg do you hope to lose over the next 6 weeks: &nbsp;
                <input type="number" name="loseKgPlan" id="loseKgPlan" onClick={bmiAlert} onChange={changeKg} /><br />
                <span className="text-info">Remember: Be realistic; think of past successes and failures!</span><br /><br />*/}
                    <h2>How much excersize can you do each day &nbsp;</h2>
                <input type="number" name="excersizePlan" id="excersizePlan" placeholder="amount in minutes" onChange={changeExcersize} /><br />
                <h3><span style={{color:"white"}}><i>Remember: The more excersize you do, the more leeway you have with calorie intake! Click on this <a href="https://www.healthline.com/nutrition/how-many-calories-per-day#average-calorie-needs"><u>link</u></a> for more details</i></span><br /><br /></h3>
                <h2>How many calories can you limit yourself to &nbsp;</h2>
                <input type="number" name="caloriePlan" id="caloriePlan" onChange={changeCalories} /><br />
                <h3><span style={{ color: "white" }}><i>Remember: The average amount of calories necessary for you to <i>maintain</i> your weight is {avgCalories}. 500 calories less means 1 pound (around 1/2 kg) lost per week</i></span><br /></h3>
               <button onClick={sendData}><Link to="/">Submit</Link></button>
            {/* <input type="submit" onClick={sendData} /> */}
            </form>
        </Container>
    )
}

export default NewDietPlan;
