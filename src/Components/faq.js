import React, { useState } from 'react'
import { 
    Breadcrumb, BreadcrumbItem, Container, Row, Col,
    Collapse, Card, CardHeader, CardBody
} from 'reactstrap'

const Faq = () => {

    const [isOpen, setIsOpen] = useState(true)

    const toggleQA = () => {
        setIsOpen(!isOpen)
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
                            <BreadcrumbItem active> Order </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-bg-white">
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Frequently Asked Questions</p> 
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="12">
                        <Collapse isOpen={isOpen}>
                            <Card className="faq-content">
                                <CardHeader className="faq-header" onClick={toggleQA}>
                                    Do you have a physical restaurant to eat-in?
                                </CardHeader>
                                <CardBody className="faq-body">
                                    Yes, we do have a physical restaurant in 3 states within Nigeria
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpen}>
                            <Card className="faq-content">
                                <CardHeader className="faq-header" onClick={toggleQA}>
                                    Do you have a physical restaurant to eat-in?
                                </CardHeader>
                                <CardBody className="faq-body">
                                    Yes, we do have a physical restaurant in 3 states within Nigeria
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpen}>
                            <Card className="faq-content">
                                <CardHeader className="faq-header" onClick={toggleQA}>
                                    Do you have a physical restaurant to eat-in?
                                </CardHeader>
                                <CardBody className="faq-body">
                                    Yes, we do have a physical restaurant in 3 states within Nigeria
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpen}>
                            <Card className="faq-content">
                                <CardHeader className="faq-header" onClick={toggleQA}>
                                    Do you have a physical restaurant to eat-in?
                                </CardHeader>
                                <CardBody className="faq-body">
                                    Yes, we do have a physical restaurant in 3 states within Nigeria
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpen}>
                            <Card className="faq-content">
                                <CardHeader className="faq-header" onClick={toggleQA}>
                                    Do you have a physical restaurant to eat-in?
                                </CardHeader>
                                <CardBody className="faq-body">
                                    Yes, we do have a physical restaurant in 3 states within Nigeria
                                </CardBody>
                            </Card>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Faq