import React, { useState } from 'react'
import {HomePageBookTable} from '../Components'
import { 
    Breadcrumb, BreadcrumbItem, Button, Container, Row, Col,
    Form, FormGroup, FormText, Input, Label,
    Modal, ModalBody, ModalHeader, Table
} from 'reactstrap'



const Reservation = () => {
    const [isRescheduleOpen, setIsRescheduleOpen] = useState(false)
    const [isCancelOpen, setIsCancelOpen] = useState(false)
    const [isClicked, setIsClicked] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
    const [modalFields, setModalFields] = useState({
        fullname: "",
        ticketNo: "",
        oldDate: "",
        newDate: "",
        date: "",
        reason: ""
    })

    const {fullname, ticketNo, oldDate, newDate, date, reason} = modalFields

    const handleReschedule = (e) => {
        e.preventDefault()
        if(fullname === '' || ticketNo === '' || oldDate === '' || newDate === ''){
            alert('All fields must be field')
        }
        else {
            alert(`Hello ${fullname} you have rescheduled your reservation. Check your email` + 
            `for confirmation`)
            setModalFields({
                fullname: "",
                oldDate: "",
                newDate: "",
                ticketNo: ""
            })
        }
    }

    const handleCancel = (e) => {
        e.preventDefault()
        if(date === "" || reason === ""){
            alert('All fields must be field')
        }
        else{
            alert('Your reservation has been canceled')
            setModalFields({
                date: "",
                reason: ""
            })
        }
    }

    const toggleCheckout = (e) => {
        e.preventDefault()    
        setIsOpen(!isOpen)
        
    }

    const handleFinalCheckout = (e) => {
        e.preventDefault()
        setSuccessMsg('Thank you for booking a table with us.' + 
        'Check your email for a summary of your booking')
    }

    
        
    // const modalTimeout = () => {
    //     if(isRescheduleOpen || isCancelOpen){
    //         alert("session expired")
    //         setIsRescheduleOpen(false)
    //     }
    // }
    // setTimeout(modalTimeout, 30000)
    // clearTimeout(modalTimeout)


    const handleChange = (e) => {
       setModalFields({ ...modalFields, [e.target.name]: e.target.value})  
    }

    const toggleRescheduleModal = () => {
        setIsRescheduleOpen(!isRescheduleOpen)
        setIsClicked(true)
    }

    const toggleCancelModal = () => {
        setIsCancelOpen(!isCancelOpen)
        setIsClicked(true)
    }

    const buttonClose = () => {
        setIsClicked(false)
        setIsRescheduleOpen(false)
        setIsCancelOpen(false)
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
                            <BreadcrumbItem active> Reservation </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-bg-white">
                <HomePageBookTable />
            </Container>

            <Container fluid={true} className="containers container-bg-ash">
                <Row id="payment" className="text-center">
                    <Col xs="12">
                        <p>Payment validates booking. Make payment to confirm your reservation booking</p>
                    </Col>
                    <Col xs="12" className="payment-section">
                        <Table>
                            <thead>
                                <tr>
                                    <th> No of guests</th>
                                    <th> Price(NGN) </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td> 5, 000 </td>
                                </tr><tr>
                                    <td>5</td>
                                    <td> 12, 300 </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td> 19, 500 </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td> 24, 000 </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button type="button" onClick={toggleCheckout} className="mt-2 payment-btn">
                            Make Payment Now
                        </Button>
                    </Col>
                </Row>

                <Modal isOpen={isOpen} toggle={toggleCheckout} className="checkout">
                    <ModalBody>
                        <Form onClick={handleFinalCheckout}>
                            <p className="success-msg">{successMsg}</p>
                            <FormGroup>
                                <Label for="card-number">Card Number</Label>
                                <Input disabled type="number" value="2244243242" id="card-number" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="card-expiry">Card Expiry</Label>
                                <Input disabled type="text" value="06 / 12" id="card-expiry" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvv">CVV</Label>
                                <Input disabled type="number" value="243" id="cvv" />
                            </FormGroup>

                            <Button className="checkout">Checkout</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Row className="mt-4">
                    <Col xs="12" className="reservation-buttons mt-5">
                        <Row>
                            <Col xs="12" className="text-center">
                                    Want to Reschedule or Cancel?
                            </Col>
                            <Col xs="12" lg="6" className="my-3 mx-auto">
                                <Button type="button" onClick={toggleRescheduleModal} className="modify-reservation reschedule">Reschedule Reservation</Button>
                            </Col>
                            <Col xs="12" lg="5" className="my-3 mx-auto">
                                <Button type="button" onClick={toggleCancelModal} className="modify-reservation cancel">Cancel Reservation</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>


                <Modal isOpen={isRescheduleOpen} toggle={toggleRescheduleModal} className="reschedule-modal">
                    <ModalHeader className="modal-header-text">
                        Reschedule
                        {
                            isClicked && 
                            <Button close onClick={buttonClose} className="close-modal" />
                        }
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleReschedule}>
                            <FormText color="muted">
                                Please fill in the form with details entered during initial booking
                            </FormText>
                            <FormGroup className="my-3">
                                <Label for="fullname">FullName</Label>
                                <Input type="text" value={fullname} id="fullname" name="fullname" onChange={handleChange} placeholder="Enter full name"/>
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="ticketNo">Ticket No.</Label>
                                <Input type="number" value={ticketNo} id="ticketNo" name="ticketNo" onChange={handleChange} placeholder="Enter ticket ID" /> 
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="oldDate">Current Reservation Date</Label>
                                <Input type="date" value={oldDate} id="oldDate" name="oldDate" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="newDate">New Reservation Date</Label>
                                <Input type="date" value={newDate} id="newDate" name="newDate" onChange={handleChange} />
                            </FormGroup>
                            <Button className="submit-reschedule">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>


                <Modal isOpen={isCancelOpen} toggle={toggleCancelModal} className="cancel-modal">
                    <ModalHeader className="modal-header-text">
                        Cancel
                        {
                            isClicked && 
                            <Button close onClick={buttonClose} className="close-modal" />
                        }
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleCancel}>
                            <FormText color="muted">
                                Please fill in the form with details entered during initial booking
                            </FormText>
                            <FormGroup className="my-3">
                                <Label for="fullname">FullName</Label>
                                <Input type="text" value={fullname} id="fullname" name="fullname" onChange={handleChange} placeholder="Enter full name"/>
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="ticketNo">Ticket No.</Label>
                                <Input type="number" value={ticketNo} id="ticketNo" name="ticketNo" onChange={handleChange} placeholder="Enter ticket ID" /> 
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="date">Reservation Date</Label>
                                <Input type="date" value={date} id="date" name="date" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <Label for="reason">Why do you want to cancel your reservation?</Label>
                                <Input type="textarea" maxLength="20" value={reason} id="reason" name="reason" onChange={handleChange} />
                            </FormGroup>
                           
                            <Button className="submit-cancel">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>



            </Container>
        </>
    )
}
export default Reservation