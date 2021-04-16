import React, { useEffect, useState } from 'react'
import { heroImages } from '../Components'
import { 
            Carousel, CarouselItem, CarouselCaption, CarouselIndicators,
            CarouselControl, Container, 
            Row, Col, Navbar, NavbarBrand, NavbarToggler,
            Nav, NavItem, NavLink, Collapse, UncontrolledCarousel
        } from 'reactstrap'


const HomePage = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [currentImage, setCurrentImage] = useState(0)
    const [animation, setAnimation] = useState(false)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
    const next = () => {
        if (animation){
        const nextImage = currentImage === heroImages.length - 1 ? 0 : currentImage + 1
        setCurrentImage(nextImage)
        }
    }
    const prev = () => {
        if(animation){
            const prevImage = currentImage === 0 ? heroImages.length - 1 : currentImage - 1
            setCurrentImage(prevImage)
        }
    }
    const goToIndex = (newIndex) => {
        if (animation) return;
        setCurrentImage(newIndex);
    }
    
    const imageSlides = heroImages.map( heroImg => {
        return (
        <CarouselItem
            onExiting={() => setAnimation(true)}
            onExited={() => setAnimation(false)}
            key={heroImg.src}
        >
            <img src={heroImg.src} alt={heroImg.altText} />
            <CarouselCaption captionText={heroImg.caption} captionHeader={heroImg.caption} />
        </CarouselItem>
        );
    })


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
                
                <Col className="imageSlider" id="heroImg">
                    <Carousel
                        activeIndex={currentImage}
                        next={next}
                        prev={prev}
                    >
                        <CarouselIndicators items={heroImages} activeIndex={currentImage} onClickHandler={goToIndex} />
                        {imageSlides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={prev} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage
