import React, { useEffect, useState } from 'react'
import { heroImages } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import { 
           Container, Row, Col, Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, UncontrolledCarousel
        } from 'reactstrap'


const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentImage, setCurrentImage] = useState(0)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
   

    return (
        <>
            <Container fluid={true} className="homepage-container">
                    {/* <Row>
                        <Navbar color="dark" dark expand="md">
                            <NavbarBrand href="/">da_bukattee</NavbarBrand>
                            <NavbarToggler />
                            <Collapse>
                            </Collapse>
                        </Navbar>
                    </Row> */}
                    <Row id="heroImg-wrapper">
                        <Col className="imageSlider" id="heroImg">
                            <UncontrolledCarousel items={heroImages} interval={3500} indicators={false} controls={false} />
                        </Col>
                    </Row>
            </Container>
            <Container className="container-2 containers" fluid={true}>
                <Row className="row-1"> 
                    <Col xs="12">
                        <p className="para-header">Now You Are Here!</p> 
                    </Col>
                    <Row>
                        <Col xs="12">
                            <p className="welcome-caption">Welcome to Da_Bukattee...our tasty foods, way to your stomach</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </Col>
                        <Col xs="12">
                            <img src={Waiter} />
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container className="containers container-3" fluid={true}>
                <Row className="row-2"> 
                    <Col xs="12">
                        <p className="para-header">Our Services</p> 
                    </Col>
                    <Row>
                        <Col xs="12">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </Col>
                        <Col xs="12">
                            <img src={Waiter} />
                        </Col>
                    </Row>
                </Row>
                
            </Container>
        </>
    )
}

export default HomePage
