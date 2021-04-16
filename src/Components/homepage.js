import React, { useEffect, useState } from 'react'
import { heroImages } from '../Components'
import Waiter from '../assets/images/waiter.jfif'
import { 
           Container, Row, Col, Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, UncontrolledCarousel
        } from 'reactstrap'


const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentImage, setCurrentImage] = useState(0)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
   

    return (
        <>
            <Container fluid={true} className="homepage-container">
                    {/* <Row>
                        <Navbar color="dark" dark expand="md">
                            <NavbarBrand href="/">da_bukattee</NavbarBrand>
                            <NavbarToggler />
                            <Collapse>
                            </Collapse>
                        </Navbar>
                    </Row> */}
                    <Row id="heroImg-wrapper">
                        <Col className="imageSlider" id="heroImg">
                            <UncontrolledCarousel items={heroImages} interval={3500} indicators={false} controls={false} />
                        </Col>
                    </Row>
            </Container>
            <Container className="container-2" fluid={true}>
                <Row>
                    <Col xs="12">
                        <img src={Waiter} />
                    </Col>
                    <Col xs="12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mattis risus. Etiam auctor vehicula ex quis finibus. Nullam augue nulla, pharetra at tempor non, commodo a sem. Nullam eget sapien nunc. Suspendisse malesuada, ligula quis vestibulum porta, nisi tortor finibus nulla, sit amet consequat enim lectus quis neque. Maecenas sit amet lectus at magna accumsan semper. Aliquam sollicitudin volutpat erat ac blandit. Cras molestie accumsan dapibus. Aliquam lobortis porttitor interdum. In iaculis, libero eget tempor imperdiet, ipsum est iaculis lacus, a pulvinar velit lacus vitae mauris. Pellentesque lacinia felis nulla, malesuada rutrum enim tristique id.

                        Nullam vel risus urna. Nullam accumsan eu augue placerat tempor. Fusce pulvinar et justo eget fermentum. Donec blandit luctus ante, at fermentum erat auctor sit amet. Curabitur vestibulum pretium tincidunt. Nam et hendrerit est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pretium magna quam, ac fermentum orci volutpat ac. Ut vel sapien enim. Aliquam eros nisl, euismod ut nisl vel, laoreet fermentum leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum elit egestas ligula hendrerit, ut porttitor libero cursus. Nam viverra 
                        ipsum et mi sollicitudin accumsan. Vestibulum sit amet diam a nibh ullamcorper gravida id id augue. Vestibulum semper est vulputate nibh dapibus, non dictum odio fermentum.
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage
