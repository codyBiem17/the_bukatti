import React, { useEffect, useState } from 'react'
import { locations } from '../Components'
import {
    Container, Row, Col, Breadcrumb, BreadcrumbItem, Button,
    Label, Input, Form, FormGroup, Modal, ModalBody, Table
} from 'reactstrap'
// import Jelof from '../assets/images/jollof_rice_dodo.jpg'
// import PetCoke from '../assets/images/coke-pet-trans.png'
import { decode } from 'html-entities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const ViewCart = (props) => {
    const pathname = props.location.state.cartProps

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, [pathname]);
    

    const [value, setValue] = useState(1)
    const [subtotalValue, setSubtotalValue] = useState(500)
    const [total, setTotal] = useState(500)
    const [deliveryFee, setDeliveryFee] = useState(0)
    const [isDelete, setIsDelete] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')
  
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
            newSubtotal = (500 * nextVal)
            setValue(nextVal)
            setSubtotalValue(newSubtotal)
            setTotal( newSubtotal + deliveryFee )    

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

    const toggleCheckout = (e) => {
        e.preventDefault()
        if(fullname === "" || phone === "" || location === ""){
            alert("Please enter details of the form")
        }
        else{
            // alert("Your food is on the way")
            setIsOpen(!isOpen)
        }
    }

    const handleFinalCheckout = (e) => {
        e.preventDefault()
        setSuccessMsg('Yaaay!!! Food order successful. Your food is on the way')
    }

    const handleChange = (e) => {
        setOrderDetails({...orderDetails, [e.target.name]: e.target.value})
     
        if(e.target.name === "location"){
            const deliveryCharge = locations.filter(data => data.location === e.target.value)
            setDeliveryFee(deliveryCharge[0].deliveryFee)
            let oldTotal = subtotalValue
            setTotal(oldTotal + deliveryCharge[0].deliveryFee)
        }
        
    }

    const handleDelete = () => {
        setIsDelete(false)
        setIsEmpty(true)
    }


    const recipientLocation = locations.map((filterLocation, index) => {
        return(
            <option key={index} value={filterLocation.location}> {filterLocation.location} </option>
        )
    })

    const cartItems = props.location.state.cartProps.props.isAdded
    const cartItemId = props.location.state.cartProps.props.id
    const myCartItems = cartItems.filter(filterCartItem => filterCartItem.id === cartItemId )
    .map(cartItem => {
        return (
            <Table key={cartItem.id}>
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
                    <td className="trash-icon" onClick={handleDelete}> 
                        {
                            isDelete &&
                            <FontAwesomeIcon style={{"color": "red"}} icon={["far", "trash-alt"]} />
                        }
                    </td>
                    <td>
                        <p>{cartItem.foodItemName}</p>
                        <p> Expect: </p> 
                        <p>({cartItem.foodItemMakeUp}) </p>
                    </td>
                    <td className="foodItemImg">
                        {
                            cartItem.hasOwnProperty('foodImg') && cartItem.hasOwnProperty('drinkImg') ?
                            <span>
                                <img src={cartItem.foodImg.src} alt={cartItem.foodImg.altText} />
                                <img src={cartItem.drinkImg.src} alt={cartItem.drinkImg.altText} />
                            </span>
                            :
                            cartItem.hasOwnProperty('foodImg') && !cartItem.hasOwnProperty('drinkImg') ?
                            <span>
                                <img src={cartItem.foodImg.src} alt={cartItem.foodImg.altText} />
                            </span>
                            :
                            null
                        }
                        {
                            cartItem.hasOwnProperty('drinkImg') ?
                            <img src={cartItem.drinkImg.src} alt={cartItem.drinkImg.altText} />
                            :
                            null
                        }
                    </td>
                    <td>
                        {decode('&#8358;')} 500
                    </td>
                    <td className="plus-or-minus">
                        <span> <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} /> </span>
                        <span> {value} </span>
                        <span>  <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} /> </span>
                    </td>
                    <td>{decode('&#8358;')} {subtotalValue}</td>
                </tbody>

                <tbody className="d-md-none hide-at-md">
                    <tr>
                        <th scope="row">
                            <span>
                                <FontAwesomeIcon style={{"color": "red"}} icon={["far", "trash-alt"]} />
                            </span>
                            FoodItem
                        </th>
                        <td>
                            <p>{cartItem.foodItemName}</p>
                            <p> Expect: </p> 
                            <p>({cartItem.foodItemMakeUp}) </p>
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
                            <span> <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} /> </span>
                            <span> {value} </span>
                            <span>  <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} /> </span>
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

            <Container fluid={true} className={isDelete ? "containers container-bg-white" : "remove-container-item"}>
                <Row>
                    <Col xs="12">
                        {myCartItems}
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs="12">
                        <Form onSubmit={toggleCheckout}>
                            <Row> 
                                <Col xs="12">
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
                                            {recipientLocation}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                
                                <Col xs="11" xl="6" className="order-summary my-4 mx-auto">
                                    <Table borderless>
                                        <tbody>
                                            <tr className="mt-2">
                                                <td>
                                                    Food Order Details for {fullname}
                                                </td>
                                            </tr>
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
                                    <Button type="submit" className="mt-2 payment-btn">
                                        Proceed To Checkout 
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

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

            {
                isEmpty &&
                <Container className="containers container-bg-white empty-cart">
                    <Row>
                        <Col xs="12">
                            No food item in your cart
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default ViewCart