import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const ViewGoals = () => {

    let history = useHistory();

    const [user, setUser] = useState({})
    const [userPlan, setUserPlan] = useState({})
    const [weekStart, setWeekStart] = useState(Date);

    const weekStartLess = new Date(weekStart);
    const ndtl = weekStartLess.getDate() - 1;
    weekStartLess.setDate(ndtl);

    const weekStartMore = new Date(weekStart);
    const ndtm = weekStartMore.getDate() + 1;
    weekStartMore.setDate(ndtm);

    const changeWeekStart = (e) => {
        setWeekStart(e.target.value);
    }



    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);
    }, [])

    const info = {
        userId: user._id,
        weekStartDate: weekStart,
        weekStartLess: weekStartLess,
        weekStartMore: weekStartMore
    }


    const deleteGoal = () => {
        alert(weekStartMore);
        axios.post("http://localhost:5990/router/db/DBupdateUser/deleteGoal", info)
            .then(
                (response) => {
                    console.log("SUCCESS: " + response.data);
                }).
            catch((error) => {
                console.log("error: " + error);
            }
        );
        
        history.push('/');
    }



    return (
        <div>
            <center>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>
                                Week Start Date
                    </th> 
                            <th>
                                KG to Lose
                    </th>
                            <th>
                                Excersize per Day
                    </th>
                            <th>
                                Calories per Day
                    </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userPlan.goals &&
                            userPlan.goals.map((goal, index) => {
                                const dt = new Date(goal.weekStartDate);
                                return <tr key={index}>
                                    <td>
                                        {dt.toLocaleDateString()}
                                    </td>
                                    <td>
                                        {goal.loseKgForWeek}
                                    </td>
                                    <td>
                                        {goal.excersize_minutes_per_day}
                                    </td>
                                    <td>
                                        {goal.calorieIntakePerDay}
                                    </td>
                                    <td>
                                        <button onMouseEnter={() => { setWeekStart(dt);}} onClick={deleteGoal}>Delete Goal</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default ViewGoals
