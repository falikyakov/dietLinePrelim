import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewDietPlan = () => {


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
        userId: "603d3c5fb4ab1522882bdcef"
    }

    const sendData = async (event) => {
        event.preventDefault();

        axios.post("http://localhost:5990/router/db/DBinsert/insertGoal", goals)
            .then(
                (response) => {
                    alert("in response");
                    console.log(response.data);
                    alert(response.data)
                }).
            catch((error) => {
                console.log("error: " + error);
            }
            );
    }

    return (
        <div style={{ margin: "5px", border: "solid purple thin", width: "1200px" }}>
            <h1 className="display-6">Goals:</h1>
            <form >
                <h3 style={{ fontFamily: "cursive" }}>According to your BMI (bmi), you need to lose x kg.</h3>
                {/*How many kg do you hope to lose over the next 6 weeks: &nbsp;
                <input type="number" name="loseKgPlan" id="loseKgPlan" onClick={bmiAlert} onChange={changeKg} /><br />
                <span className="text-info">Remember: Be realistic; think of past successes and failures!</span><br /><br />*/}
                How much excersize can you do each day &nbsp;
                <input type="number" name="excersizePlan" id="excersizePlan" placeholder="amount in minutes" onChange={changeExcersize} /><br />
                <span className="text-info">Remember: The more excersize you do, the more leeway you have with calorie intake! Click on this <a href="https://www.healthline.com/nutrition/how-many-calories-per-day#average-calorie-needs"><u>link</u></a> for more details</span><br /><br />
                How many calories can you limit yourself to &nbsp;
                <input type="number" name="caloriePlan" id="caloriePlan" onChange={changeCalories} /><br />
                <span className="text-info">Remember: The average amount of calories necessary for you to <i>maintain</i> your weight is {avgCalories}. 500 calories less means 1 pound (around 1/2 kg) lost per week</span><br />
                <input type="submit" onClick={sendData} />
            </form>
        </div>
    )
}

export default NewDietPlan;
