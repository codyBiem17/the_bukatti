import React, {useState} from 'react'
import { heroImages, services } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'
import { 
           Button, Container, Row, Col, 
           Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, 
            UncontrolledCarousel
        } from 'reactstrap'


const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false)
    // const [currentImage, setCurrentImage] = useState(0)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
   

    return (
        <>
            <Container fluid={true} className="nav-container">
                <Row>
                    <Col>
                        <Navbar color="dark" dark expand="md">
                            <NavbarBrand href="/">da_bukattee</NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} />
                            <Collapse isOpen={collapsed} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">How it works</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">Order Now</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">Reservation</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="homepage-container">
                <Row id="heroImg-wrapper">
                    <Col className="imageSlider" id="heroImg">
                        <UncontrolledCarousel items={heroImages} interval={4000} indicators={false} controls={false} />
                    </Col>
                </Row>
            </Container>
            <Container className="containers container-2" fluid={true}>
                <Row className="row-1"> 
                    <Col xs="12">
                        <p className="para-header">Now You Are Here!</p> 
                    </Col>
                    <Row>
                        <Col xs="12">
                            <p className="welcome-caption">Welcome to Da_Bukattee...our tasty foods, way to your stomach</p>
                        </Col>
                        <Col xs="12" sm="6">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor 
                                incididu
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                        </Col>
                        <Col xs="12" sm="6">
                            <img src={Waiter} alt="waiter-img"/>
                        </Col>
                    </Row>
                </Row>
            </Container>
            <Container className="containers container-3" fluid={true}>
                <Row className="row-2"> 
                    <Col xs="12">
                        <p className="para-header">Our Services</p> 
                    </Col>
                    <Col xs="12">
                        <Row>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <img src={services[0]} alt="serving-pate"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                                </p>
                                <Button className="mt-2" >Read More</Button> 
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <img src={services[1]} alt="order-food-online"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                                </p>
                                <Button className="mt-2" >Read More</Button> 
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <img src={services[2]} alt="delivery-agent"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                                </p>
                                <Button className="mt-2" >Read More</Button> 
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <img src={services[3]} alt="reserved-table"/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                                </p>
                                <Button className="mt-2" >Read More</Button> 
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="container-4">
                <Row className="mb-4">
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button className="mt-2 order">Order Now</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="container-5">
                <Row className="reserved-table-section containers">
                    <Col>
                        
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={WaiterServing} alt="waiter-serving" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
