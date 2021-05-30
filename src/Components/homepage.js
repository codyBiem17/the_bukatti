import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useHistory } from 'react-router-dom'
import 
{
    AddToCartBtn, customers, foodMenu, HomePageBookTable, ourServices 
} from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decode } from 'html-entities'

import { 
    Button, Card, CardBody, CardImg, CardText, CardTitle, Container, Row, Col, 
     Form, Input, InputGroup, InputGroupAddon, InputGroupText,
 } from 'reactstrap'



const HomePage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/order')
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
                    <Col xs="12" key={filteredFoodType.id} id={filteredFoodType.id} className="food-item" >
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
                            <Col xs="12" className="my-4 text-center"> 
                                <AddToCartBtn />
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
                            <Col xs="12" className="my-4 text-center"> 
                                <AddToCartBtn />
                            </Col>
                        </Row>
                    </Col>
                )
            }
        )         
    
    const testimonies = customers.map( customer => {
        return (
            <Col xs="12" md="6" key={customer.id} className="mb-4">
                <Card className="user-testimony">
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

            <Container  className="containers container-4">
                <Row>
                    <Col className="order-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        {/* <Link to='/order'> */}
                            <Button type="button" onClick={handleClick} className="mt-2 order">
                                Order Now
                            </Button>
                        {/* </Link> */}
                        {/* <Button tag={link} to='/order' className="mt-2 order">Order Now</Button> */}
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-5">
                <HomePageBookTable />
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
                        <Row className="mx-auto text-center">
                            <Col xs="12" className="mt-4 mb-3">Food-Combo-Drink</Col>
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
                    <Col xs="12" className="food-only mt-5">
                        <Row className="mx-auto text-center">
                            <Col xs="12" className="mt-4">Food-Only</Col>
                        </Row>
                        <Row>
                            {foodOnly}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container  className="containers container-7" id="newsletter-section">
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
