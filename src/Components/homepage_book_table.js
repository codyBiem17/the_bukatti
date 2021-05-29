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
    const [formDiv, setFormDiv] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        // if(isChecked === false && e.target.name === ''){
        //     alert('Agree by checking the box of Fill form details')
        // }
        // else{
            // setModal(!modal)
            setDivSlideIn(!divSlideIn)
            setFormDiv(!formDiv)

        //     console.log(value)
        // }
    }

    const handleChange = (e) => {
        e.target.type === "checkbox" ? 
        setIsChecked(!isChecked) 
        : 
        setValue({ ...value, [e.target.name]: e.target.value})  
    }


    return(
        <Row className="reserved-table-section">
            {
                formDiv ?
                <>
                    <Col xs="12" sm="6" className="mb-4">
                        <Form id="form-section" onSubmit={handleSubmit}>
                            <Row form>
                                <Col xs="12">
                                    <h4>
                                        Reserve A Table
                                    </h4>
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
                                    {/* <FormText>
                                        Enter Firstname and Lastname
                                    </FormText> */}
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
                </>
                    :
                <Col className="form-hide-and-show">
                    <Row>
                        <Col xs="12" sm="6" className="mb-4 form-hide-and-show">
                            <Form id="form-section" onSubmit={handleSubmit}>
                                <Row form>
                                    <Col xs="12">
                                        <h4>
                                            Reserve A Table
                                        </h4>
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
                                        {/* <FormText>
                                            Enter Firstname and Lastname
                                        </FormText> */}
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
            }
            

            {/* modal container */}
            {
                divSlideIn &&

                <Col xs="11" className="divSlide mx-auto p-3">
                    <Row>
                        <Col xs="12">
                            <p>
                                Hello {value.fullname}, thank you for successfully making a table reservation request
                            </p>
                            <p>
                                You will receive a confirmation receipt of your Reservation within the next 24 hours
                            </p>
                        </Col>
                        <Col xs="12">
                            <Row>
                                <Col xs="12">
                                        Want to Reschedule or Cancel?
                                </Col>
                                    <Col xs="12" className="my-3">
                                        <Button type="button" className="modify-reservation reschedule">Reschedule Reservation</Button>
                                </Col>
                                <Col xs="12">
                                        <Button type="button" className="modify-reservation cancel">Cancel Reservation</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            }
            {/* <Col xs="12">
                <Modal isOpen={modal} toggle={toggleModal}>
                    <ModalBody>
                        <p>
                            Hello {value.fullname}, thank you for successfully making a table reservation request
                        </p>
                        <p>
                            You will receive a confirmation receipt of your Reservation within the next 24 hours
                        </p>
                    </ModalBody>
                   
                   <ModalFooter>
                    <Row>
                        <Col xs="12">
                                Want to Reschedule or Cancel?
                        </Col>
                            <Col xs="12" className="my-3">
                                <Button type="button" className="modify-reservation">Reschedule Reservation</Button>
                        </Col>
                        <Col xs="12">
                                <Button type="button" className="modify-reservation cancel">Cancel Reservation</Button>
                        </Col>
                    </Row>
                   </ModalFooter>
                </Modal>
            </Col> */}
        </Row>
    )
}

export default HomePageBookTable