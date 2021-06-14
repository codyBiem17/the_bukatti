import React from 'react'
import { AddToCartBtn, mainFoodMenu } from '../Components'
import { decode } from 'html-entities'
import {
    Card, CardTitle, CardBody,CardImg, CardSubtitle, CardText,
    Row, Col
} from 'reactstrap'


const Lunch = () => {
    let foodCombo, foodOnly, Soups, Desserts, Drinks;
    
    foodCombo =  mainFoodMenu.filter(menu => menu.category === 'Lunch')
    .map(filteredLunchMeal => 
        {
            return (
                filteredLunchMeal.foodItem
                .filter(filterItem => filterItem.foodType === 'Food-Combo-Drink')
                .map(filteredFoodType => {
                    return(
                        <Row key={filteredFoodType.foodType}>
                            <Col xs="12" className="my-4">
                                {filteredFoodType.foodType}
                            </Col>
                            {
                                filteredFoodType.foodDetails.map(foodMenuDetails => {
                                    return (
                                        <Col xs="12" sm="6" xl="4">
                                            <Card className="mb-4 food-type food-combo" key={foodMenuDetails.id}>
                                                <Row className="p-3">
                                                    <Col xs="6">
                                                        <CardImg src={foodMenuDetails.foodImg.src} alt={foodMenuDetails.foodImg.altText} top width="100%" />
                                                    </Col>
                                                    <Col xs="1">
                                                        <span> {decode(foodMenuDetails.plus)} </span>
                                                    </Col>
                                                    <Col xs="4">
                                                        <CardImg src={foodMenuDetails.drinkImg.src} alt={foodMenuDetails.drinkImg.altText} top width="100%" />
                                                    </Col>
                                                </Row>
                                                <CardBody>
                                                    <CardTitle tag="h5">{foodMenuDetails.foodItemName}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{foodMenuDetails.foodItemMakeUp}</CardSubtitle>
                                                    <CardText>{decode(foodMenuDetails.amount)}</CardText>
                                                    <p className="text-justify">
                                                        <AddToCartBtn />
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                })
            )
        }
    )

    foodOnly =  mainFoodMenu.filter(menu => menu.category === 'Lunch')
    .map(filteredLunchMeal => 
        {
            return (
                filteredLunchMeal.foodItem
                .filter(filterItem => filterItem.foodType === 'Food-Only')
                .map(filteredFoodType => {
                    return(
                        <Row key={filteredFoodType.foodType}>
                            <Col xs="12" className="my-4">
                                {filteredFoodType.foodType}
                            </Col>
                            {
                                filteredFoodType.foodDetails.map(foodMenuDetails => {
                                    return (
                                        <Col xs="12" sm="6" xl="4">
                                            <Card className="mb-4 p-3 food-type" key={foodMenuDetails.id}>
                                                <CardImg src={foodMenuDetails.foodImg.src} alt={foodMenuDetails.foodImg.altText} top width="100%" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{foodMenuDetails.foodItemName}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{foodMenuDetails.foodItemMakeUp}</CardSubtitle>
                                                    <CardText>{decode(foodMenuDetails.amount)}</CardText>
                                                    <p className="text-justify">
                                                        <AddToCartBtn />
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                })
            )
        }
    )

    Desserts =  mainFoodMenu.filter(menu => menu.category === 'Lunch')
    .map(filteredLunchMeal => 
        {
            return (
                filteredLunchMeal.foodItem
                .filter(filterItem => filterItem.foodType === 'Desserts')
                .map(filteredFoodType => {
                    return(
                        <Row key={filteredFoodType.foodType}>
                            <Col xs="12" className="my-4">
                                {filteredFoodType.foodType}
                            </Col>
                            {
                                filteredFoodType.foodDetails.map(foodMenuDetails => {
                                    return (
                                        <Col xs="12" sm="6" xl="4">
                                            <Card className="mb-4 p-3 food-type" key={foodMenuDetails.id}>
                                                <CardImg src={foodMenuDetails.foodImg.src} alt={foodMenuDetails.foodImg.altText} top width="100%" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{foodMenuDetails.foodItemName}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{foodMenuDetails.foodItemMakeUp}</CardSubtitle>
                                                    <CardText>{decode(foodMenuDetails.amount)}</CardText>
                                                    <p className="text-justify">
                                                        <AddToCartBtn />
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                })
            )
        }
    )

    Soups =  mainFoodMenu.filter(menu => menu.category === 'Lunch')
    .map(filteredLunchMeal => 
        {
            return (
                filteredLunchMeal.foodItem
                .filter(filterItem => filterItem.foodType === 'Soups')
                .map(filteredFoodType => {
                    return(
                        <Row key={filteredFoodType.foodType}>
                            <Col xs="12" className="my-4">
                                {filteredFoodType.foodType}
                            </Col>
                            {
                                filteredFoodType.foodDetails.map(foodMenuDetails => {
                                    return (
                                        <Col xs="12" sm="6" xl="4">
                                            <Card className="mb-4 p-3 food-type" key={foodMenuDetails.id}>
                                                <CardImg src={foodMenuDetails.foodImg.src} alt={foodMenuDetails.foodImg.altText} top width="100%" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{foodMenuDetails.foodItemName}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{foodMenuDetails.foodItemMakeUp}</CardSubtitle>
                                                    <CardText>{decode(foodMenuDetails.amount)}</CardText>
                                                    <p className="text-justify">
                                                        <AddToCartBtn />
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                })
            )
        }
    )

    Drinks =  mainFoodMenu.filter(menu => menu.category === 'Lunch')
    .map(filteredLunchMeal => 
        {
            return (
                filteredLunchMeal.foodItem
                .filter(filterItem => filterItem.foodType === 'Drinks & Beverages')
                .map(filteredFoodType => {
                    return(
                        <Row key={filteredFoodType.foodType}>
                            <Col xs="12" className="my-4">
                                {filteredFoodType.foodType}
                            </Col>
                            {
                                filteredFoodType.foodDetails.map(foodMenuDetails => {
                                    return (
                                        <Col xs="12" sm="6" xl="4">
                                            <Card className="mb-4 p-3 food-type" key={foodMenuDetails.id}>
                                                <CardImg src={foodMenuDetails.drinkImg.src} alt={foodMenuDetails.drinkImg.altText} top width="100%" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{foodMenuDetails.foodItemName}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{foodMenuDetails.foodItemMakeUp}</CardSubtitle>
                                                    <CardText>{decode(foodMenuDetails.amount)}</CardText>
                                                    
                                                    <p className="text-justify">
                                                        <AddToCartBtn />
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    )
                })
            )
        }
    )

    return(
        <div className="Lunch-category">
            {foodCombo}
            {foodOnly}
            {Desserts}
            {Soups}
            {Drinks}
        </div>
    )
}

export default Lunch