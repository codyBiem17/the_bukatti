import React from 'react'
import {Container, Row, Col} from "reactstrap"

const LandingPage = () => {
    return (
        <Container id="bgImage">
            <Row>
                <Col xs="6"  id="logo">
                    <p>the_bukattee</p>
                </Col>
                <Col id="bgText">
                    <h1>Coming Soon</h1>
                    <hr />
                    <p>23 days left</p>
                </Col>
            </Row>
        </Container>
    )
}
export {LandingPage}