import React from 'react'
import { Container, Row } from 'react-bootstrap'
import InfoCards from './infoCard'
import LineChart from './LineChart';
import UserGraph from './userGraph';

const Dashboard = () => {
    return (
        <Container style={{ backgroundColor: "honeydew" }}>

            <br />
            <Row className="d-flex">
                <InfoCards title="Average Calorie Intake" secondary="of the last week" style={{ backgroundColor: "aqua" }} badge="2100" />
                <InfoCards title="Weight Loss" secondary="of the week" style={ {backgroundColor:"aqua"}} badge="3.5 kg"/>
                <InfoCards title="Average Daily Excersize"  style={{ backgroundColor: "aqua" }} badge="29 min."/>
                <InfoCards title="Weight Loss" secondary="of the week" style={{ backgroundColor: "aqua" }} badge="or something"/>
            </Row>
            <Row>

                <UserGraph />
                <LineChart />
            </Row>
        </Container>
    )
}

export default Dashboard;
