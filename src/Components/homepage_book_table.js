import React from 'react'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'

import { 
    Button, Row, Col, 
    Form, Input, InputGroup, InputGroupAddon, InputGroupText,
 } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomePageBookTable = () => {
    return(
        <Row className="reserved-table-section">
            <Col xs="12" sm="6" className="mb-4">
                <Form id="form-section">
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
                                <Input type="text" placeholder="Username" />
                            </InputGroup>
                        </Col>
                        <Col xs="12" sm="6" className="mb-4">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon={['far', 'envelope']} />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" placeholder="Email" />
                            </InputGroup>
                        </Col>
                        <Col xs="12" sm="6" className="mb-4">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <FontAwesomeIcon icon="mobile-alt" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input placeholder="Phone no" />
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
                                <Input type="number" placeholder="Nos of Guests" />
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
                                    <option>9 A M TO 12PM</option>
                                    <option>9 A M TO 12PM</option>
                                    <option>9 A M TO 12PM</option>
                                    <option>9 A M TO 12PM</option>
                                </Input>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button className="mt-2 booking">Reserve A Table Now</Button>
                </Form>
            </Col>
            <Col xs="12" sm="6">
                <img src={WaiterServing} alt="waiter-serving" />
            </Col>
        </Row>
    )
}

export default HomePageBookTable