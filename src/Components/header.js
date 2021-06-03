import React, { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { heroImages } from '../Components'
import { 
        Button, Container, Row, Col, 
        Navbar, NavbarBrand, NavbarToggler,
        Nav, NavItem, NavLink, Collapse, 
        UncontrolledCarousel,
        } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const mediaMatch = window.matchMedia('(min-width: 992px)')

    
    const signupBtn = () => {
        if(collapsed){
            setCollapsed(false)
        }
    }
   
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
 
    const handleScroll = () => {
        const pageYOffset = window.pageYOffset

        if(pageYOffset > 200 ){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })
   

    return (
        <>
            <Container fluid={true} className="d-none d-lg-block container-topbar nav-container">
                <Row>
                    <Col lg="8">
                        <p>
                            Phone no: +234-8088376911 or Email us: eat_here@bukattee.com
                        </p>
                    </Col>
                    <Col lg="4" className="topbar-socials">
                        <span> Mon - Fri / 8am - 9pm / </span>
                        <span className="social-icons">
                            <NavLink href="https://wa.me/send?phone=2348088376911&amp;text=Hi there!, I love your bukattee app"> 
                                <FontAwesomeIcon icon={['fab', 'whatsapp']} /> 
                            </NavLink>
                            <NavLink href="https://www.linkedin.com/in/bellomaryam/"> <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </NavLink>
                            <NavLink href="https://twitter.com/codyBiem"> <FontAwesomeIcon icon={['fab', 'twitter']} /> </NavLink>
                        </span>
                    </Col>
                </Row>
            </Container>
            
            <Container 
                fluid={true}  
                className={ 
                    scrolled && mediaMatch.matches ? 'sticky' : 
                    scrolled && mediaMatch.matches === false ? 'navbar-container' :
                    'navbar-container'
                }
            >
                <Row>
                    <Col>
                        <Navbar color="dark" dark expand="md">
                            <NavbarBrand href="/">da_bukatti</NavbarBrand>
                            <NavbarToggler onClick={toggleNavbar} />
                            <Collapse isOpen={collapsed} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink  href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  href="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  href="/order">Order</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  href="/reservation">Reservation</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink  href="/faq">Faq</NavLink>
                                    </NavItem>
                                     <NavItem>
                                        <NavLink  href="/auth" id="signin">Sign in</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Button type="button" onClick={signupBtn} tag={Link} smooth to="/#newsletter-section" id="signup" >
                                            Sign Up
                                        </Button>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>

            <Container fluid={true}  className="homepage-container carousel-container">
                <Row id="heroImg-wrapper">
                    <Col xs="12" className="imageSlider" id="heroImg">
                        <UncontrolledCarousel items={heroImages} interval={4000} indicators={false} controls={false} />
                    </Col>
                    <Col xs="12" className="wavyPattern"></Col>
                </Row>
            </Container> 
        </>
    )
}

export default Header
