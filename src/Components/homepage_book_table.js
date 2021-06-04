import React, { useState } from 'react'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'

import { 
    Button, Row, Col, 
    Form, FormGroup, Input, InputGroup,
    InputGroupAddon, InputGroupText, Label
 } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomePageBookTable = () => {
    const [value, setValue] = useState({
        fullname: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        time: ''
    })
    const {fullname, email, phone, date, guests, time} = value
    const [isChecked, setIsChecked] = useState(false)
    const [divSlideIn, setDivSlideIn ] = useState(false)
    const [isClicked, setIsClicked] = useState(true)
    const [seats, setSeats] = useState(10)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isChecked === false && e.target.name === ''){
            alert('Agree by checking the box of Fill form details')
        }
        else{
            setDivSlideIn(true)
            setIsClicked(true)
        }
    }

    const handleChange = (e) => {
        e.target.type === "checkbox" ? 
        setIsChecked(!isChecked) 
        : 
        setValue({ ...value, [e.target.name]: e.target.value})  
    }

    const buttonClose = (e) => {
        setDivSlideIn(false)
        setIsClicked(false)
        setSeats(prevSeat => prevSeat - 1)
        setValue({ ...value, [e.target.name]: ""})
    }


    return(
        <Row className="reserved-table-section">
            <Col xs="12" 
                className={
                    divSlideIn ? "form-hide" : 
                    isClicked === false && divSlideIn === false ? "form-show"
                    :
                    null
                }>
                <Row>
                    <Col xs="12" sm="6">
                    <Form id="form-section" onSubmit={handleSubmit}>
                        <Row form>
                            <Col xs="12">
                                <h4> Reserve A Table </h4>
                                <p> 
                                    Available seats:
                                    <span id="no-of-seats">
                                        {seats} 
                                    </span>
                                </p>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['far', 'user']} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" value={fullname} name="fullname" onChange={handleChange} placeholder="FullName" />
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['far', 'envelope']} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="email" value={email} name="email" onChange={handleChange}  placeholder="Email" />
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon="mobile-alt" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="number" value={phone} name="phone" onChange={handleChange}
                                    placeholder="Phone no"
                                    maxLength="11"
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['far', 'calendar-alt']} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="date" value={date} name="date" onChange={handleChange} placeholder="Check-in-Date" />
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon="users" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="select" value={guests} name="guests" onChange={handleChange} placeholder="No of Guests"> 
                                        <option value="choose">No of guests </option>
                                        <option value="2">2</option>
                                        <option value="5">5</option>
                                        <option value="8">8</option>
                                        <option value="10">10</option>
                                    </Input>
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6" className="mb-4">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <FontAwesomeIcon icon={['far', 'clock']} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="select" value={time} name="time" onChange={handleChange} placeholder="Time"> 
                                        <option value="time">Choose a time</option>
                                        <option value="9AM TO 11AM">9AM TO 11AM</option>
                                        <option value="11:30AM TO 12:30PM">11:30AM TO 12:30PM</option>
                                        <option value="3PM TO 5PM">3PM TO 5PM</option>
                                        <option value="6PM TO 8PM">6PM TO 8PM</option>
                                    </Input>
                                </InputGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input type="checkbox" checked={isChecked} onChange={handleChange} name="reserve" className="my-2" />
                            <Label for="reserve" check className="reserve-label"> 
                                Send reservation details to my email
                            </Label>
                        </FormGroup>
                        <Button className="my-3 booking">Reserve A Table Now</Button>
                    </Form>
                </Col>
                <Col xs="12" sm="6" className="d-none d-md-block">
                    <img src={WaiterServing} alt="waiter-serving" />
                </Col> 
                </Row>
            </Col>
            {
                divSlideIn &&

                <Col xs="11" md="8" className="divSlide mx-auto p-3">
                    <Row>
                        {
                            isClicked && 
                            <Col xs="12">
                                <Button close onClick={buttonClose} />
                            </Col>
                        }
                       
                        <Col xs="12">
                            <p>
                                Hello {value.fullname}, thank you for successfully making a table reservation request
                            </p>
                            <p>
                                You will receive a confirmation receipt of your Reservation within the next 24 hours
                            </p>
                        </Col>
                        <Col xs="12" className="reservation-buttons">
                            <Row>
                                <Col xs="12">
                                        Want to Reschedule or Cancel?
                                </Col>
                                <Col xs="12" lg="6" className="my-3">
                                    <Button type="button" className="modify-reservation reschedule">Reschedule Reservation</Button>
                                </Col>
                                <Col xs="12" lg="5" className="my-3">
                                    <Button type="button" className="modify-reservation cancel">Cancel Reservation</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            }
        </Row>
    )
}

export default HomePageBookTable