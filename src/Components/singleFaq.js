import React, { useState } from 'react'
import { 
    Card, CardHeader, CardBody, Row, Col
} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SingleFaq = (props) => {

    const [isOpen, setIsOpen] = useState(false) 

    
    const toggleQA = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Card className="mb-3 faq-content">
            <CardHeader id="faq-header" className="faq-header" onClick={toggleQA}>
                <Row>
                    <Col xs="10" md="11"> {props.faqHeader} </Col>
                    {
                        isOpen ? 
                        <Col xs="2" md="1" className="my-3 angle-up-down"> <FontAwesomeIcon icon='angle-down' /> </Col>
                        :
                        <Col xs="2" md="1" className="my-3 angle-up-down"> <FontAwesomeIcon icon='angle-up' /> </Col>
                    }
                </Row>
            </CardHeader>
            {
                isOpen && 
                <CardBody className="faq-body">
                    {props.faqBody}
                </CardBody> 
            } 
                    
        </Card>
    )
}   

export default SingleFaq
