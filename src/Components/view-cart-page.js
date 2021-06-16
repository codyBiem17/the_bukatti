import React, { useState } from 'react'
import { locations } from '../Components'
import {
    Container, Row, Col, Breadcrumb, BreadcrumbItem, Button,
    Label, Input, Form, FormGroup, Table
} from 'reactstrap'
import Jelof from '../assets/images/jollof_rice_dodo.jpg'
import PetCoke from '../assets/images/coke-pet-trans.png'
import { decode } from 'html-entities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ViewCart = () => {
    const [value, setValue] = useState(1)
    const [subtotalValue, setSubtotalValue] = useState(500)
    const [total, setTotal] = useState(500)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const [orderDetails, setOrderDetails] = useState({
        fullname: "",
        phone: "",
        location: ""
    })

    const {fullname, phone, location} = orderDetails
    
    let nextVal, newSubtotal
    const plusIcon = () => {
        if(value < 25){
            nextVal = value + 1
            newSubtotal = 500 * nextVal
            setValue(nextVal)
            setSubtotalValue(newSubtotal)

            // const delivery = locations.filter(filterLocation => 
            //     filterLocation.location === location).map(bm => {
            //         return(
            //             setDeliveryFee(bm.deliveryFee)
            //         )
            //     })
        setTotal( newSubtotal )    

        }
        else{
            alert('Daily food order can not be more than 25')
        }
    }

    const minusIcon = () => {
        if(value > 1){
            let prevVal = value - 1
            setValue(prevVal)
            setSubtotalValue(500 * prevVal)
        }
        else{
            setValue(1)
            setSubtotalValue(500)
        }   
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(fullname === "" || phone === "" || location === ""){
            alert("Please enter details of the form")
        }
        else{
            setDisabled(false)
        }
    }

    const handleChange = (e) => {
        setOrderDetails({...orderDetails, [e.target.name]: e.target.value})
        if(fullname !== "" && phone !== "" && location !== ""){
            setDisabled(false)
        }
        locations.filter(filterLocation => 
            filterLocation.location === location).map(bm => {
                return(
                    setDeliveryFee(bm.deliveryFee)
                )
            })
    }

    

    const recipientLocation = locations.map((filterLocation, index) => {
        return(
            <option key={index} value={filterLocation.location}> {filterLocation.location} </option>
        )
    })

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
                <Row>
                    <Col xs="12">
                        <Table>
                            <thead className="hide-show-th-tb">
                                <tr>
                                    <th></th>
                                    <th>FoodItem</th>
                                    <th className="foodItemImg">FoodItem Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="hide-show-th-tb">
                                <td> 
                                    <FontAwesomeIcon style={{"color": "red"}} icon={["far", "trash-alt"]} />
                                </td>
                                <td>
                                    <p>Jollof Rice + Coke</p>
                                    <p> Expect: </p> 
                                    <p>(JollofRice, Chicken and Pet Coke) </p>
                                </td>
                                <td className="foodItemImg">
                                    <img src={Jelof} alt="jollof-rice" />
                                    <img src={PetCoke} alt="pet-coke" />
                                </td>
                                <td>
                                    {decode('&#8358;')} 500
                                </td>
                                <td className="plus-or-minus">
                                    <span> {value} </span>
                                    <span>
                                        <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} />
                                        <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} />
                                    </span>
                                </td>
                                <td>{decode('&#8358;')} {subtotalValue}</td>
                            </tbody>

                            <tbody className="d-md-none hide-at-md">
                                <tr>
                                    <th scope="row">FoodItem</th>
                                    <td>
                                        <p>Jollof Rice + Coke</p>
                                        <p> Expect: </p> 
                                        <p>(JollofRice, Chicken and Pet Coke) </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>
                                        {decode('&#8358;')} 500
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Quantity</th>
                                    <td className="plus-or-minus">
                                        <span> {value} </span>
                                        <span>
                                            <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} />
                                            <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Subtotal</th>
                                    <td>
                                        {decode('&#8358;')} {subtotalValue}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="recipient">Recipient's name</Label>
                                <Input 
                                    type="text" 
                                    value={fullname} 
                                    name="fullname" 
                                    id="recipient" 
                                    onChange={handleChange}
                                 />
                            </FormGroup>
                            <FormGroup>
                                <Label for="phone">Recipient's Phone no.</Label>
                                <Input 
                                    type="number" 
                                    value={phone} 
                                    name="phone" 
                                    id="phone"
                                    onChange={handleChange} 
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="location">Select Delivery location</Label>
                                <Input type="select" value={location} name="location" id="location" onChange={handleChange}>
                                    {/* <option value="VI">VI</option>
                                    <option value="Ikorodu">Ikorodu</option>
                                    <option value="Yaba">Yaba</option>
                                    <option value="Lekki">Lekki</option> */}
                                    {recipientLocation}
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col xs="11" className="order-summary my-4 mx-auto">
                        <Table borderless>
                            <tbody>
                                <p className="mt-2">Food Order Details for xyz</p>
                                <tr>
                                    <th scope="row">Food Item</th>
                                    <td>{subtotalValue}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Delivery Fee</th>
                                    <td> {deliveryFee} </td>
                                </tr> 
                                <tr>  
                                    <th scope="row">Total</th>
                                    <td> {total} </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="12">
                        <Button disabled={disabled}> Checkout </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ViewCart