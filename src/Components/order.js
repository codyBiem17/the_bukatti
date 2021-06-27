import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Breakfast, Lunch, Dinner } from '../Components'
import { 
    Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Container, Row, Col,
    Input, InputGroup, InputGroupAddon, Label,
    NavLink 
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Order = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      }, [pathname]);

    const [value, setValue] = useState('Breakfast')
    const [visibleFoodMenu, setVisibleFoodMenu] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setVisibleFoodMenu(true)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return(
        <>
            <Container fluid={true} className="breadcrumbs">
                <Row>
                    <Col xs="12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <a href="/"> Home </a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> Order </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true} className="containers container-bg-white">
                <Row> 
                    <Col xs="12">
                        <p className="">Order Now and Get It Delivered before you say Jack Robinson</p> 
                    </Col>
                </Row>
                <Row  className="mb-4">
                    <Col xs="12">
                        <p> 
                            <span>Need help making order?</span> <br />
                            <span>
                                Click 
                                <NavLink className="dialer" href="tel: 08088376911" style={{"color": "#D66D75"}}> <FontAwesomeIcon icon="phone-alt" /> </NavLink> 
                                to talk to our representative
                            </span>
                        </p>
                    </Col>
                    <Col xs="12"> 
                        <p> OR </p>
                        <p> Place order online below</p> 
                    </Col>
                    <Form xs="12" sm="6" onSubmit={handleSubmit}>
                        <FormGroup row className="mx-auto">
                            <Label for="categories" xs="12">
                                Select Food Category
                            </Label>
                            <Col xs="12">
                                <InputGroup>
                                    <Input type="select" value={value} onChange={handleChange} id="categories" placeholder="Category"> 
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                        {/* <option>Drinks &amp; Smoothies </option> */}
                                    </Input>
                                    <InputGroupAddon addonType="append">
                                        <Button type="submit" id="search-button">
                                            Search
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
                
                {
                    visibleFoodMenu &&
                    (
                        value === 'Breakfast' ?
                        
                        <Row>
                            <Col xs="12">
                                <Breakfast />
                            </Col>
                        </Row>

                        : 

                        value === 'Lunch' ? 

                        <Row>
                            <Col xs="12">
                                <Lunch />
                            </Col>
                        </Row>

                        : 

                        <Row>
                            <Col xs="12">
                                <Dinner />
                            </Col>
                        </Row>
                    )
                }
            </Container>            
        </>
    )
}

export default Order