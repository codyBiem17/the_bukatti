import React from 'react'
import {NavLink} from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ArrowUp = ()=> {
    // const [visibility, setVisibility] = useState(false)

    const handleScroll = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        // setVisibility(true)
        // // window.pageYOffset > 10 ? setVisibility(true) : setVisibility(false)
    }

    // useEffect(() => {
    //     const handleToggleVisibility = () => {
    //         if (window.pageYOffset > 100) {
    //           setVisibility(true);
    //         } else {
    //           setVisibility(false);
    //         }
    //       };
        

    //     window.addEventListener("scroll", handleToggleVisibility);

    //     return () => window.removeEventListener("scroll", handleToggleVisibility);

    // }, [])


    return(
   
        <NavLink href="#" className="arrow-to-top" onClick={handleScroll}>
            <FontAwesomeIcon icon="arrow-up" />
        </NavLink>

    )
}

export default ArrowUp