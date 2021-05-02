import React, {useRef, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { customers, foodMenu, ourServices } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import WaiterServing from '../assets/images/waiter-setting-table.jpg'
import { 
           Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, 
            Form, Input, InputGroup, InputGroupAddon, InputGroupText,
        } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decode } from 'html-entities'

const HomePage = () => {
    const [showBtn, setShowBtn] = useState(false)
    
    const ShowBtn = (e) => {
        const filter = e.currentTarget
        // const checkClick = foodItemDevRef.current.focus()
        // const currentId = e.currentTarget.id
        // return currentId ? setShowBtn(!showBtn) : null
        
        if(filter){
            if(showBtn){
                return null
            }
            else{
                setShowBtn(true)
            }
            // alert('gfjcfjgg')
            // console.log(filter)
        }
        // const id = foodMenu.filter( item => item.id === 2)
        // if(currentId){
        // // alert(currentId)
        //     setShowBtn('<Button> Order </Button>')

        // }
    }

    const servicesSection = ourServices.map( service => {
        return (
            <Col xs="10" md="5" key={service.src} className="mb-4 mx-auto py-3 image-border">
                <div>
                    <img src={service.src} alt={service.alt}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing...
                    </p>
                    <Button tag={Link} smooth to={`/how_it_works#${service.id}`} className="mt-2">Read More</Button> 
                </div>
            </Col>
        )
    })
    const foodDrinkCombo = 
        foodMenu.filter(foodOrder => foodOrder.foodType === 'food-combo-drink').map( filteredFoodType =>
            {
                return ( 
                    <Col onClick={ShowBtn} xs="12" key={filteredFoodType.id} id={filteredFoodType.id} className="food-item" >
                        <Row>
                            <Col xs="3">
                                <img src={filteredFoodType.foodImg.src} alt={filteredFoodType.foodImg.altText}/>
                                <p className="text-center mt-3"> {decode(filteredFoodType.plus)} </p>
                                <img src={filteredFoodType.drinkImg.src} alt={filteredFoodType.drinkImg.altText} />
                            </Col>
                            <Col xs="6">
                                <p> {filteredFoodType.foodItemName} </p>
                                <p> {filteredFoodType.foodItemMakeUp} </p>
                            </Col>
                            <Col xs="3"> 
                                <span className="amount"> {decode(filteredFoodType.amount)} </span>
                            </Col>
                        </Row>
                    </Col>
                )
            }
        )       
    
    const foodOnly = 
        foodMenu.filter(foodOrder => foodOrder.foodType === 'food-only').map( filteredFoodType =>
            {
                return ( 
                    <Col xs="12" key={filteredFoodType.id} className="food-item">
                        <Row>
                            <Col xs="3">
                                <img src={filteredFoodType.foodImg.src} alt={filteredFoodType.foodImg.altText}/>
                            </Col>
                            <Col xs="6">
                                <p> {filteredFoodType.foodItemName} </p>
                                <p> {filteredFoodType.foodItemMakeUp} </p>
                            </Col>
                            <Col xs="3"> <span className="amount"> {decode(filteredFoodType.amount)} </span></Col>
                        </Row>
                    </Col>
                )
            }
        )         
    
    const testimonies = customers.map( customer => {
        return (
            <Col xs="12" md="6" key={customer.id} className="mb-4">
                <Card>
                    <CardImg src={customer.src} top width="100%" alt={customer.altText} />
                    <CardBody>
                        <CardTitle> Greg </CardTitle>
                        <CardText>
                            {customer.comment} {decode(customer.emoji)}
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        )
    })
   

    return (
        <>
            <Container fluid={true} className="containers container-2" >
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Now You Are Here!</p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Welcome to Da_Bukatti...our tasty foods, way to your stomach</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor 
                            incididu
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </Col>
                    <Col xs="12" sm="6">
                        <img src={Waiter} alt="waiter-img"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers container-3" >
                <Row> 
                    <Col xs="12">
                        <p className="para-header">Our Services</p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Welcome to Da_Bukattee...our business is to serve you</p>
                    </Col>
                </Row>
                <Row> 
                    {servicesSection} 
                </Row>
            </Container>
            <Container fluid={true}  className="containers container-4">
                <Row>
                    <Col className="order-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button className="mt-2 order">Order Now</Button>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers container-5">
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
            </Container>
            <Container fluid={true} className="containers container-6">
                <Row>
                    <Col xs="12"> 
                        <p className="para-header"> Our Food Menu </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">Select desired food and place order</p>
                    </Col>
                </Row>
                <Row className="food-item-menu mx-auto">
                    {/* first column */}
                    <Col xs="12" className="food-combo-drink">
                        <Row className="mx-auto text-justify">
                            <Col xs="8" className="mt-4 mb-3">Food-Combo-Drink</Col>
                            <Col xs="4" className="mt-3 mb-4">
                                {
                                    showBtn ? <Button> Order </Button> : null   
                                }
                            </Col>
                        </Row>
                        <Row>
                            {/* first column child in first column div */}
                            <Col xs="12" md="6">
                                <Row>
                                    {foodDrinkCombo}
                                </Row>
                            </Col>
                            {/* second column child in first column div */}
                            <Col xs="12" md="6">
                                <Row>
                                    {foodDrinkCombo}
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    {/* second column */}
                    <Col xs="12" className="food-only mt-4">
                        <Row className="mx-auto text-center">
                            <Col xs="8" className="mt-4">Food-Only</Col>
                            <Col xs="4" className="my-4">
                                {
                                    showBtn ? <Button> Order </Button> : null   
                                }
                            </Col>
                        </Row>
                        <Row>
                            {foodOnly}
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}  className="containers container-7">
                <Row>
                    <Col xs="12">
                        <p>Subscribe for NewsLetter to get upcoming events and our special recipes</p>
                    </Col>
                    <Col xs="12" md="8" className="mx-auto">
                        <Form id="newsletter-form">
                            <Row>
                                <Col>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon={['far', 'envelope']} />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" placeholder="Enter your email" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="containers container-8">
                <Row> 
                    <Col xs="12">
                        <p className="para-header"> Testimonies </p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <p className="welcome-caption">What Our Customers say: </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"> Meet <span className="down-arrow"> &#8595;</span> </Col>
                    {testimonies}
                </Row>
            </Container>
        </>
    )
}

export default HomePage
