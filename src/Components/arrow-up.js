import React, { useEffect, useState } from 'react'
import {Button} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArrowUp = ()=> {
    const [scrollToTop, setScrollToTop] = useState(false)

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {

        const scrolled = () =>{
            const pageYOffset = window.pageYOffset
            if(pageYOffset > 2000) {
                setScrollToTop(true)
            }
            else{
                setScrollToTop(false)
            }
        }
        window.addEventListener('scroll', scrolled)
        return () => window.removeEventListener("scroll", scrolled)
    })


    return(
        <>
            {
                scrollToTop && 
                <Button onClick={handleScroll} className="floating-arrow">
                    <FontAwesomeIcon icon="arrow-up" />
                </Button>
            }
        </>
    )
}

export default ArrowUp