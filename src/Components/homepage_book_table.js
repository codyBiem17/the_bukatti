import React, { useState } from 'react'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'

import { 
    Button, Row, Col, 
    Form, FormText, FormGroup, Input, InputGroup,
    InputGroupAddon, InputGroupText, Label
 } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomePageBookTable = () => {
    // const [value, setValue] = useState({
    //     fullname: '',
    //     email: '',
    //     time: ''
    // })
    const [isChecked, setIsChecked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(isChecked === true){
            alert('hooorraayy')
        }
        else{
            alert('Agree by checking the box')
        }
    }

    const handleChange = () => {
        setIsChecked(!isChecked)      
    }

    // const handleCheck = () => {
    //     setIsChecked(!isChecked)
    // }

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
                                <Input type="text" placeholder="FullName" />
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
                                <Input type="email"  placeholder="Email" />
                            </InputGroup>
                        </Col>
                        <Col xs="12" sm="6" className="mb-4">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon="mobile-alt" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input  type="number" placeholder="Phone no" />
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
                                <Input type="number" placeholder="No_ of Guests" />
                            </InputGroup>
                        </Col>
                        <Col xs="12" sm="6" className="mb-4">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={['far', 'clock']} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="select" placeholder="Time"> 
                                    <option value="9 A M TO 12PM">9 A M TO 12PM</option>
                                    <option value="9 A M TO 12PM">9 A M TO 12PM</option>
                                    <option value="9 A M TO 12PM">9 A M TO 12PM</option>
                                    <option value="9 A M TO 12PM">9 A M TO 12PM</option>
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