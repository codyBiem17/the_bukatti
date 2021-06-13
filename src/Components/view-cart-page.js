import React, { useState } from 'react'
import {Container, Row, Col, Breadcrumb, BreadcrumbItem,
    Table
} from 'reactstrap'
import Jelof from '../assets/images/jollof_rice_dodo.jpg'
import PetCoke from '../assets/images/coke-pet-trans.png'
import { decode } from 'html-entities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ViewCart = () => {
    const [value, setValue] = useState(1)
    const [subtotalValue, setSubtotalValue] = useState(500)

    const plusIcon = () => {
        if(value < 25){
            setValue(prevState => prevState + 1)
            setSubtotalValue( subtotalValue * value)
        }
        else{
            alert('Daily food order can not be more than 25')
        }
    }

    const minusIcon = () => {
        if(value > 1){
            setValue(prevState => prevState - 1)
            setSubtotalValue( subtotalValue * value)
        }
        else{
            setValue(1)
            setSubtotalValue( subtotalValue * value)
        }
        
    }

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
                            <thead className="d-none">
                                <tr>
                                    <th>FoodItem</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>{subtotalValue}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>FoodItem</td>
                                    <td>
                                        <p>
                                            <span> Jollof Rice + Coke </span>
                                            <span className="table-foodItems">
                                                <img src={Jelof} alt="jollof-rice" />
                                                <img src={PetCoke} alt="pet-coke" />
                                            </span>
                                        </p>
                                        <p> JollofRice, Chicken and Pet Coke </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>
                                        {decode('&#8358;')} 500
                                    </td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td className="plus-or-minus">
                                        <span> {value} </span>
                                        <span>
                                            <FontAwesomeIcon icon="plus-circle" onClick={plusIcon} />
                                            <FontAwesomeIcon icon="minus-circle" onClick={minusIcon} />
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>
                                        {decode('&#8358;')} 500
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ViewCart