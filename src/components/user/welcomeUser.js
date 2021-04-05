import React from 'react'
import { Row } from 'react-bootstrap'
import InfoCard from './infoCard'
import WelcomeCard from './welcomeCard'

const WelcomeUser = ({ match }) => {
    return (
        <div>
            <h1 className="display-2" style={{ color: "darkblue" }}>Welcome {match.params.firstName} {match.params.lastName}</h1>
            <h2>Choose an option:</h2>
            <Row style={{margin:"10px"}}>
                <WelcomeCard title="Start a New Diet Plan" secondary="Design a plan that's personalized just for you!" button="Start now" link="/newPlan" />
                <WelcomeCard title="See Your Current Diet Plan" secondary="See details of your current plan; enter new info" button="Current Plan" link="/currentPlan" />
                <WelcomeCard title="Weekly Stats" secondary="See your weekly progress" button="Weekly Stats" link="/dash" />
                <WelcomeCard title="Personal Info" secondary="View Your Personal Information" button="Personal Information" link="/profile" />
                {/*<WelcomeCard title="Informational Articles" secondary="View Articles Geared Specially for You" button="Articles" link="/articles" />*/}
            </Row>
            <Row style={{ margin: "10px"}}>
                <div className="col-lg-3" style={{ border: "green dotted", margin: "10px", backgroundColor:"whitesmoke"}}>
                    <h3 className="display-6">In order to stabilize your BMI {match.params.bmi}, you need to lose { match.params.kgToLose} kg.
                     Let's work together!
                        </h3>
                </div>
            </Row>
        </div>
    )
}

export default WelcomeUser;
