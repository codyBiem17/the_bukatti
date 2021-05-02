import React from 'react'
import {ourServices} from '../Components'
import { 
    Breadcrumb, BreadcrumbItem, Button, Container, Row, Col,
    // NavLink 
} from 'reactstrap'

const Guides = () => {
    const listOfSteps =  ourServices.map( steps => {
        return (

            steps.id === 'order' || steps.id === 'reserved' ?
            
            <Row className="mx-auto guides" key={steps.src} id={steps.id}>
                <Col xs="9" md="5" lg="4" className="png-images mt-3 mx-auto">
                    <img src={steps.src} alt={steps.alt} />
                </Col>
                <Col xs="12" md="6" lg="5" className="mb-3">
                    <p className="heading"> {steps.header} </p>
                    <p>{steps.subheader} </p>
                   <p> {steps.info} </p>
                </Col>
                <hr className="mb-3" />
            </Row>  :

            <Row className="mx-auto guides" key={steps.src} id={steps.id}>
                <Col xs="12" md="6" lg="5" className="mt-3">
                    <p className="heading"> {steps.header} </p>
                    <p>{steps.subheader} </p>
                <p> {steps.info} </p>
                </Col>
                <Col xs="9" md="5" lg="4" className="png-images mb-3 mx-auto">
                    <img src={steps.src} alt={steps.alt} />
                </Col>
                <hr className="mb-3" />
            </Row>
        )
    })
    
    return (
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> How It Works </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers how_it_works">
                {listOfSteps}
            </Container>
            <Container fluid={true}  className="containers container-4">
                <Row>
                    <Col className="order-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button className="mt-2 order">Order Now</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Guides