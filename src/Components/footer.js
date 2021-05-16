import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Container, Row, Col
} from 'reactstrap'

const Footer = () => {

    return (
        <Container fluid={true} className="containers container-9 footer">
            <Row className="mb-3">
                <Col xs="12">
                    <p className="para-header"> REACH US TODAY </p> 
                </Col>
                <Col xs="12">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                    </p>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs="12" md="6">
                    <p>OPENING DAYS</p>
                    <p>Mon - Sat 8am - 9pm</p>
                </Col>
                <Col xs="12" md="6">
                    <p>CONNECT WITH US</p>
                    <p className="social-icons">
                        <a href="https://wa.me/send?phone=2348088376911&amp;text=Hi there!, I love your bukattee app"> 
                                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 
                        </a>
                        <a href="https://www.linkedin.com/in/bellomaryam/"> <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a>
                        <a href="https://twitter.com/codyBiem"> <FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                    </p>
                </Col>
            </Row>   
            <Row className="pt-5">   
                <Col xs="12">
                    Copyright &copy; 2021. Built by Yours truly &#9996;
                </Col>
            </Row>
        </Container>
        
    )
}
export default Footer