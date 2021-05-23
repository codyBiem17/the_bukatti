import React from 'react'
import {HomePageBookTable} from '../Components'
// import {useHistory} from 'react-router-dom'
import { 
    Breadcrumb, BreadcrumbItem, Container, Row, Col,
} from 'reactstrap'


const Reservation = () => {

    return (
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> Reservation </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-5">
                <HomePageBookTable />
            </Container>
        </>
    )
}
export default Reservation