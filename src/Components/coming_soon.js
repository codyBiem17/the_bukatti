import React from 'react'
import {Container, Row, Col} from "reactstrap"


const getTimeLeft = () => {
    const countdownExpiry = +new Date ("May 1, 2021");
    const currentDate = +new Date();
    const timeDifference = countdownExpiry - currentDate
    // return timeDifference;
    let timeRemaining= {}
    if(timeDifference > 0){
        // calculatedays, hours, minutes and secongs left
        timeRemaining = {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeDifference / (1000 / 60)) % 24),
            seconds: Math.floor((timeDifference / 1000) % 60)
        }
    }
    return timeRemaining
    // https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
}

const LandingPage = () => {
    return (
        <Container>
            <Row xs="1">
                <Col id="logo">
                    <p>the_bukattee</p>
                </Col>
                <Col id="bgText">
                    <h1>Coming Soon</h1>
                    <hr />
                    <p>23 days left</p>
                </Col>
                <Col id="countdown-column">
                    <p id="countdown-timer">{getTimeLeft()}</p>
                </Col>
            </Row>
        </Container>
    )
}
export {LandingPage}