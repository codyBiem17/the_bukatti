import React, {useState} from 'react'
import {Container, Row, Col} from "reactstrap"


let timeRemaining= {}
const getTimeLeft = () => {
    const countdownExpiry = +new Date ("May 1, 2021");
    const currentDate = +new Date();
    const timeDifference = countdownExpiry - currentDate
    // return timeDifference;
    
    if(timeDifference > 0){
        // calculatedays, hours, minutes and secongs left
        timeRemaining = {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeDifference / 1000 / 60) % 60),
            seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
        }
    }
    return (timeRemaining.days + 'days ' + timeRemaining.hours + 'hours ' + timeRemaining.minutes + 'mins '
            + timeRemaining.seconds + 'secs ')
    // https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks
}

const LandingPage = () => {
    const [countDown, setCountdown] = useState(getTimeLeft())
    const countDownTimer = () => {
        setInterval(() => {
            setCountdown(getTimeLeft())
        }, 1000)
    }
    countDownTimer();


    return (
        <Container>
            <Row >
                <Col id="logo">
                    <p>the_bukattee</p>
                </Col>
            </Row>
            <Row>
                <Col id="bgText">
                    <h1>Coming Soon</h1>
                    <hr />
                    <p> {timeRemaining.days} days left</p>
                </Col>
            </Row>
            <Row>
                <Col id="countdown-column">
                    <p id="countdown-timer">{countDown}</p>
                </Col>
            </Row>
        </Container>
    )
}
export {LandingPage}