import React, {useEffect, useState} from 'react'
import {heroImages} from '../Components'
import {Container, Row, Col, Navbar, NavbarBrand, NavbarToggler,
    Nav, NavItem, NavLink, Collapse} from 'reactstrap'


const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentImage, setCurrentImage] = useState(0)

    // console.log(heroImages.length)
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }


    const imageSetter = () => {
        if(currentImage < heroImages.length - 1){
            setCurrentImage(prevImage => prevImage + 1)
            // setCurrentImage(currentImage + 1)
        }
        else{
            setCurrentImage(0)
        }
        return currentImage;
    }
    setInterval(imageSetter, 5000)


    


    return (
        <Container className="homepage-container">
            {/* <Row>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">da_bukattee</NavbarBrand>
                    <NavbarToggler />
                    <Collapse>
                    </Collapse>
                </Navbar>
            </Row> */}
            <Row id="heroImg-wrapper" style={{"color": "red"}}>
                {/* <Col className="this_homepage" id="heroImg-caption"></Col> */}
                <Col className="this_homepage" id="heroImg">
                    <img src={heroImages[currentImage].image} alt="heror-images" />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
