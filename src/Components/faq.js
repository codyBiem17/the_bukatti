import React from 'react'
import { faqArrayList, SingleFaq} from '../Components'
import { 
    Breadcrumb, BreadcrumbItem, Container, Row, Col,
} from 'reactstrap'
import QuestionImg from '../assets/images/question-mark.jpg'


const Faq = () => {
    return (
        <div className="faq-container">
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
                    <Col lg="4" className="d-none d-lg-block">
                        <img src={QuestionImg} alt="question-mark-icon" />
                    </Col>
                    <Col xs="12" lg="8">
                        {
                            faqArrayList.map( question => (
                                <SingleFaq key={question.id} faqHeader={question.faqHeader} faqBody={question.faqBody} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Faq