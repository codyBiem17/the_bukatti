import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Container, Row, Col} from "reactstrap"


let timeRemaining= {}
const getTimeLeft = () => {
    const countdownExpiry = +new Date ("May 1, 2021");
    const currentDate = +new Date();
    const timeDifference = countdownExpiry - currentDate

    timeRemaining = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
    }

    return (timeRemaining.days + 'days ' + timeRemaining.hours + 'hours ' + timeRemaining.minutes + 'mins '
            + timeRemaining.seconds + 'secs ')
}
const LandingPage = () => {
    const [countDown, setCountdown] = useState(getTimeLeft())

    let timer = setInterval(() => { setCountdown(getTimeLeft())}, 1000);
    // if(timeRemaining.days < 0){
    //     clearInterval(timer());
    //     alert('HURRAY!!! We are now OPEN FOR BUSINESS!')
    // }


    return (
        <Container className="landing-page-container">
            <div id="overlay"></div>
            <Row >
                <Col id="logo">
                    <p>
                        <NavLink to="/homepage"> da_bukattee </NavLink>
                    </p>
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
                    <p id="countdown-timer"> 
                        {timeRemaining.days > 0 ? countDown : 
                            <>
                                {clearInterval(timer)}
                                Click this NavLink to go to homepage
                            </>
                        }
                    {/* {countDown} */}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default LandingPage