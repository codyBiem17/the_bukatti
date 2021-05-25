import React, { useState } from 'react'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'

import { 
    Button, Row, Col, 
    Form, FormText, FormGroup, Input, InputGroup,
    InputGroupAddon, InputGroupText, Label
 } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomePageBookTable = () => {
    const [value, setValue] = useState({
        fullname: '',
        email: '',
        phone: '',
        guests: '',
        time: ''
    })
    const {fullname, email, time, guests, phone} = value
    const [isChecked, setIsChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isChecked === true){
            alert('hooorraayy')
            console.log(value)
        }
        else{
            alert('Agree by checking the box')
        }
    }

    const handleChange = (e) => {
        e.target.type === "checkbox" ? 
        setIsChecked(!isChecked) 
        : 
        setValue({ ...value, [e.target.name]: e.target.value})  
    }

    return(
        <Row className="reserved-table-section">
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
                            <FormText>
                                Enter Firstname and Lastname
                            </FormText>
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
                                <Input type="date" placeholder="Check-in-Date" />
                            </InputGroup>
                        </Col>
                        <Col xs="12" sm="6" className="mb-4">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon="users" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" value={guests} name="guests" onChange={handleChange} placeholder="No_ of Guests"> 
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
            <Col xs="12" sm="6">
                <img src={WaiterServing} alt="waiter-serving" />
            </Col>
        </Row>
    )
}

export default HomePageBookTable