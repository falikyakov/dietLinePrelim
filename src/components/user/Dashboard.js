import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import InfoCards from './infoCard'
import LineChart from './LineChart';
import UserGraph from './userGraph';

const Dashboard = () => {

    const [user, setUser] = useState({});
    const [userPlan, setUserPlan] = useState({});

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUser(user);

        const userPlanString = localStorage.getItem("userPlan");
        const userPlan = JSON.parse(userPlanString);
        setUserPlan(userPlan);

        console.log(userPlan);
    }, [])


    const avgCals = () => {
        var i = userPlan.dailyActualInput && userPlan.dailyActualInput.length;
        var j = i - 8;
        var cals = 0;
        userPlan.dailyActualInput &&
            userPlan.dailyActualInput.map((item, index) => {
                if (index > j) {
                    return cals = cals + item.totalCal;
                }
            })
        return parseInt(cals / 7);
    }


    const avgExcersize = () => {
        var i = userPlan.dailyActualInput && userPlan.dailyActualInput.length;
        var j = i - 8;
        var excMin = 0;
        userPlan.dailyActualInput &&
            userPlan.dailyActualInput.map((item, index) => {
                if (index > j) {
                    if (item.excersizeMinutesDaily) {
                        return excMin = excMin + item.excersizeMinutesDaily;
                    }
                }
            })
        return parseInt(excMin / 7);
    }

    var dt = new Date('06-06-2021');


    return (
        <Container style={{ backgroundColor: "honeydew" }}>

            <br />
            <Row className="d-flex">
                <InfoCards title="Average Calorie Intake" secondary="of the last 7 days" style={{ backgroundColor: "aqua" }} badge={avgCals()} />
                <InfoCards title="Weight Loss" secondary="of the week" style={{ backgroundColor: "aqua" }} badge="3.5 kg" />
                <InfoCards title="Average Daily Excersize" secondary="of the last 7 days" style={{ backgroundColor: "aqua" }} badge={avgExcersize()} />
                <InfoCards title="Weight Loss" secondary="of the week" style={{ backgroundColor: "aqua" }} badge="or something" />
            </Row>
            {dt.getTime()}lah

            <Row>

                <UserGraph />
                <LineChart />
            </Row>
        </Container>
    )
}

export default Dashboard;
