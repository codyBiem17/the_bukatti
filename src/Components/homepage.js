import React, { useState } from 'react'
import { foodMenu, heroImages, ourServices } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import PersonEating from '../assets/images/person-eating.jpg'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'
import { 
           Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, 
           Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, 
            UncontrolledCarousel,
            Form, Input, InputGroup, InputGroupAddon, InputGroupText
        } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decode } from 'html-entities'

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
        )
    })
    const foodMenuSection = foodMenu.map( food => {

        // alert(food[0].foodImg.src)
            if(food.foodType === 'food-combo-drink'){
                return ( <Col xs="12" className="food-item">
                    <Row>
                        <Col xs="3">
                            <img src={food.foodImg.src} alt={food.foodImg.altText}/>
                            <p className="text-center mt-3"> {decode(food.plus)} </p>
                            <img src={food.drinkImg.src} alt={food.drinkImg.altText} />
                        </Col>
                        <Col xs="6">
                            <p> {food.foodItemName} </p>
                            <p> {food.foodItemMakeUp} </p>
                        </Col>
                        <Col xs="3"> <span className="amount"> {decode(food.amount)} </span></Col>
                    </Row>
                </Col>
                )
            }
            
            // else if(food.foodType === 'food-only') {
            //     <Col xs="12" className="food-item">
            //         <Row>
            //             <Col xs="3">
            //                 <img src={food.foodImg.src} alt={food.foodImg.altText}/>
            //             </Col>
            //             <Col xs="6">
            //                 <p> {food.foodItemName} </p>
            //                 <p> {food.foodItemMakeUp} </p>
            //             </Col>
            //             <Col xs="3"> <span className="amount"> {food.amount} </span></Col>
            //         </Row>
            //     </Col>
                
            // }
            else{ 
                return null
            }
    
    })

   

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
                                    <h4>
                                        Reserve A Table
                                    </h4>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'user']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Username" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'envelope']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" placeholder="Email" />
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
                                        <Input type="date" placeholder="Check-in-Date" />
                                    </InputGroup>
                                </Col>
                                <Col xs="12" sm="6" className="mb-4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon="users" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="number" placeholder="Nos of Guests" />
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
                <Row className="food-item-menu mx-auto">
                    {/* first column */}
                    <Col xs="12" className="food-combo-drink">
                        <Row>
                            <Col className="mt-3 mb-4 text-center">Food-Combo-Drink</Col>
                        </Row>
                        <Row>
                            {/* first column child in first column div */}
                            <Col xs="12">
                                <Row>
                                    {foodMenuSection}
                                </Row>
                            </Col>
                            {/* second column child in first column div */}
                            <Col xs="12">
                                <Row>
                                    {foodMenuSection}
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    {/* second column */}
                    <Col xs="12" className="food-only mt-4">
                        <Row>
                            <Col className="mt-3 mb-4 text-center">Food-Only</Col>
                        </Row>
                        <Row>
                            {foodMenuSection}
                        </Row>
                    </Col>
                        {/* second column child in first column div */}
                        {/* <Col xs="12">
                            <Row>
                                <Col xs="12" className="food-item">
                                    <Row>
                                        <Col xs="3">
                                            <img src={Jelof} alt="jelof-rice"/>
                                            <p className="text-center mt-3"> &#43; </p>
                                            <img src={PetCoke} alt="drink"/>
                                        </Col>
                                        <Col xs="6">
                                            <p>Lorem Ipsum yenyen</p>
                                            <p>Bla de bla, bla de bla</p>
                                        </Col>
                                        <Col xs="3"> <span className="amount"> &#8358;500 </span></Col>
                                    </Row>
                                </Col>
                                <Col xs="12" className="food-item">
                                    <Row>
                                        <Col xs="3">
                                            <img src={Jelof} alt="jelof-rice"/>
                                            <p className="text-center mt-3"> &#43; </p>
                                            <img src={PetCoke} alt="drink"/>
                                        </Col>
                                        <Col xs="6">
                                            <p>Lorem Ipsum yenyen</p>
                                            <p>Bla de bla, bla de bla</p>
                                        </Col>
                                        <Col xs="3"> <span className="amount"> &#8358;500 </span></Col>
                                    </Row>
                                </Col>
                                <Col xs="12" className="food-item">
                                    <Row>
                                        <Col xs="3">
                                            <img src={Jelof} alt="jelof-rice"/>
                                            <p className="text-center mt-3"> &#43; </p>
                                            <img src={PetCoke} alt="drink"/>
                                        </Col>
                                        <Col xs="6">
                                            <p>Lorem Ipsum yenyen</p>
                                            <p>Bla de bla, bla de bla</p>
                                        </Col>
                                        <Col xs="3"> <span className="amount"> &#8358;500 </span></Col>
                                    </Row>
                                </Col>
                            </Row>
                    </Col> */}
                </Row>
            </Container>
            <Container fluid={true}  className="containers container-7">
                <Row>
                    <Col className="order-section">
                        <p>Subscribe for NewsLetter to get upcoming events and our special recipes</p>
                        <Form>
                           <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <FontAwesomeIcon icon={['far', 'envelope']} />
                                </InputGroupAddon>
                           </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardImg src={PersonEating} top width="100%" alt="image-of-user" />
                            <CardBody>
                                <CardTitle> Name </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tristique leo. 
                                    Duis et eleifend metus. Ut gravida bibendum mauris, tincidunt tempus odio
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
