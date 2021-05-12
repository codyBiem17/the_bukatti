import React, {useState} from 'react'
import { 
    Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Container, Row, Col,
    Input, InputGroup, InputGroupAddon, Label,
    NavLink 
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Order = () => {

    const [value, setValue] = useState('Breakfast')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(value)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return(
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> Order </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers order-container-bg-ash">
                <Row> 
                    <Col xs="12">
                        <p className="">Order Now and Get It Delivered before you say Jack Robinson</p> 
                    </Col>
                </Row>
                <Row  className="mb-4">
                    <Col xs="12" md="6">
                        <p> 
                            <span>Need help making order?</span> <br />
                            <span>
                                Click 
                                <NavLink className="dialer" href="tel: 08088376911" style={{"color": "#D66D75"}}> <FontAwesomeIcon icon="phone-alt" /> </NavLink> 
                                to talk to our representative
                            </span>
                        </p>
                    </Col>
                    <Col xs="12"> 
                        <p> OR </p>
                        <p> place order online below</p> 
                    </Col>
                    {/* <Col xs="12" sm="6" className="mb-4"> */}
                        <Form xs="12" sm="6" onSubmit={handleSubmit}>
                            <FormGroup row className="mx-auto">
                                <Label for="categories" xs="12" md="6">
                                    Select Food Category
                                </Label>
                                <Col xs="12" md="6">
                                    <InputGroup>
                                        <Input type="select" value={value} onChange={handleChange} id="categories" placeholder="Category"> 
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>Drinks &amp; Smoothies </option>
                                        </Input>
                                        <InputGroupAddon addonType="append">
                                            <Button type="submit" id="search-button">
                                                {/* <InputGroupText> */}
                                                    <FontAwesomeIcon icon="search" />
                                                {/* </InputGroupText> */}
                                            </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                        </Form>
                    {/* </Col> */}
                </Row>
                {/* <Row  className="mb-4">
                    <Col xs="12" md="6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium, 
                            condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, n
                        </p>
                    </Col>
                    <Col xs="12" md="6" className="mb-4">
                        <img src={chef} alt="chef-in-restaurant" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="12" md="6" className="mt-5">
                        <img src={people} alt="people-in-restaurant" />
                    </Col>
                    <Col xs="12" md="6" className="mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium, 
                            condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, n
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers aboutpage-container-bg-ash">
                <Row> 
                    <Col xs="12">
                        <p className="para-header">What We Do</p> 
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col xs="12" className="what-we-do">
                        <p> We Make Delicious &amp; Nutritious Food </p>
                    </Col>
                    <Col xs="6">
                        <Button className="order-and-book"> Order Food Now</Button>
                    </Col>
                    <Col xs="6">
                        <Button className="order-and-book"> Book A Table Now </Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers aboutpage-figures">
                <Row>
                    <Col xs="12" md="6" lg="3" className="restaurant-stats">
                        <p className="figures">20+</p>
                        <p> Tasty Dishes </p>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="restaurant-stats">
                        <p className="figures">100+</p>
                        <p> Daily Dishes Served </p>
                    </Col>
                    <Col xs="12" md="6" lg="3" className="restaurant-stats">
                        <p className="figures">5</p>
                        <p> Restaurants </p>
                    </Col>
                    <Col xs="12" md="6" className="restaurant-stats">
                        <p className="figures">1000+</p>
                        <p> Happy Customers </p>
                    </Col>
                </Row> */}
            </Container>
        </>
    )
}

export default Order