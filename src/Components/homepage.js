import React, {useState} from 'react'
import { heroImages, ourServices } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'
import { 
           Button, Container, Row, Col, 
           Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, 
            UncontrolledCarousel,
            Form, Input, InputGroup, InputGroupAddon, InputGroupText,
        } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ourServices from './images'

const HomePage = () => {
    const [collapsed, setCollapsed] = useState(false)
    // const [currentImage, setCurrentImage] = useState(0)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const servicesSection = ourServices.map( service => {
        return (
            <Col xs="10" md="6" className="mb-4 mx-auto py-3 image-border">
                <img src={service.src} alt={service.alt}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
                <Button className="mt-2" >Read More</Button> 
            </Col>
        )})

   

    return (
        <>
            <Container fluid={true}  className="nav-container">
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
                                        <NavLink href="https://github.com/reactstrap/reactstrap">How It Works</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">Food Menu</NavLink>
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
            <Container fluid={true}  className="homepage-container">
                <Row id="heroImg-wrapper">
                    <Col className="imageSlider" id="heroImg">
                        <UncontrolledCarousel items={heroImages} interval={4000} indicators={false} controls={false} />
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers container-2" >
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Now You Are Here!</p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Welcome to Da_Bukattee...our tasty foods, way to your stomach</p>
                    </Col>
                </Row>
                <Row>
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
            </Container>
            <Container fluid={true} className="containers container-3" >
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Our Services</p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Welcome to Da_Bukattee...our business is to serve you</p>
                    </Col>
                </Row>
                <Row> 
                    {servicesSection} 
                </Row>
            </Container>
            <Container fluid={true}  className="containers container-4">
                <Row>
                    <Col className="order-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button className="mt-2 order">Order Now</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers container-5">
                <Row className="reserved-table-section">
                    <Col xs="12" sm="6" className="mb-4">
                        <Form id="form-section">
                            <Row form>
                                <Col xs="12">
                                    <h3>
                                        Reserve A Table
                                    </h3>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'user']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Username" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'envelope']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Email" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon="mobile-alt" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Phone no" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Check-in-Date" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon="users" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input placeholder="Nos of Guests" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'clock']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="select" placeholder="Time"> 
                                            <option>9 A M TO 12PM</option>
                                            <option>9 A M TO 12PM</option>
                                            <option>9 A M TO 12PM</option>
                                            <option>9 A M TO 12PM</option>
                                        </Input>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Button className="mt-2 booking">Reserve A Table Now</Button>
                        </Form>
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={WaiterServing} alt="waiter-serving" />
                    </Col>
                </Row>
            </Container>
            <Container className="containers container-6">
                <Row>
                    <Col xs="12"> 
                        <p className="para-header"> Our Food Menu </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Select desired food and place order</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
