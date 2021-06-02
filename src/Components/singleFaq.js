import React, { useState } from 'react'
import { 
    Button, Card, CardHeader, CardBody, Row, Col
} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SingleFaq = (props) => {

    const [isOpen, setIsOpen] = useState(false) 

    
    const toggleQA = () => {
        // if(e.target.id){
            setIsOpen(!isOpen)
        // }
        // setIsOpen(!isOpen)
    }

    return (
        <Card className="mb-3 faq-content">
            <CardHeader id="faq-header" className="faq-header" onClick={toggleQA}>
                <Row>
                    <Col xs="10"> {props.faqHeader} </Col>
                    {
                        isOpen ? 
                        <Button xs="2" className="my-3 angle-up-down"> <FontAwesomeIcon icon='angle-down' /> </Button>
                        :
                        <Button xs="2" className="my-3 angle-up-down"> <FontAwesomeIcon icon='angle-up' /> </Button>
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
