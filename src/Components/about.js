import React from 'react'
import {useHistory} from 'react-router-dom'
import { 
    Breadcrumb, BreadcrumbItem, Button, Container, Row, Col,
} from 'reactstrap'
import chef from '../assets/images/black-chef-min.jpg'
import restaurant from '../assets/images/restaurant-min.jpg'

const About = () => {

    const history = useHistory();

    const handleOrder = () => {
        history.push('/order')
    }

    const handleBooking = () => {
        history.push('/reservation')
    }

    return (
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> About </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            
            <Container fluid={true} className="containers container-bg-white">
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Who We Are</p> 
                    </Col>
                </Row>
                <Row  className="mb-4">
                    <Col xs="12" md="6" className="mt-3">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium, 
                            condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, n
                        </p>
                    </Col>
                    <Col xs="12" md="6" className="mb-4 mt-3">
                        <img src={chef} alt="chef-in-restaurant" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="12" md="6" className="mt-5">
                        <img src={restaurant} alt="restaurant" />
                    </Col>
                    <Col xs="12" md="6" className="mt-5">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium, 
                            condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, n
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-bg-ash">
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
                        <Button onClick={handleOrder} className="order-and-book"> Order Food Now</Button>
                    </Col>
                    <Col xs="6">
                        <Button onClick={handleBooking}  className="order-and-book"> Book A Table Now </Button>
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
                </Row>
            </Container>
        </>
    )
}
export default About