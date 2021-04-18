import React from 'react'
import { heroImages, services } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import { 
           Button, Container, Row, Col, 
        //    Navbar, NavbarBrand, NavbarToggler,
        //     Nav, NavItem, NavLink, Collapse, 
            UncontrolledCarousel
        } from 'reactstrap'


const HomePage = () => {
    // const [collapsed, setCollapsed] = useState(true)
    // const [currentImage, setCurrentImage] = useState(0)

    // const toggleNavbar = () => {
    //     setCollapsed(!collapsed)
    // }
   

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
                                    <Button className="mt-2" outline color="info">Read More</Button> 
                                </p>
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <div>
                                    <img src={services[1]} alt="order-food-online"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing...
                                        <Button className="mt-2" outline color="info">Read More</Button> 
                                    </p>
                                </div>
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <div>
                                    <img src={services[2]} alt="delivery-agent"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing...
                                        <Button className="mt-2" outline color="info">Read More</Button> 
                                    </p>
                                </div>
                            </Col>
                            <Col xs="10" md="5" className="mb-4 mx-auto py-3 image-border">
                                <div>
                                    <img src={services[3]} alt="reserved-table"/>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing...
                                        <Button className="mt-2" outline color="info">Read More</Button> 
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="container-4">
                <Row>
                    <Col>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
