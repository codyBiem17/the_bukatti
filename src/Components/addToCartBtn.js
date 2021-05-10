import React, { useState } from 'react'
import {Button} from'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


const AddToCartBtn = () =>{
    const [isClicked, setIsClicked] = useState(false)
    const [showBtnText, setShowBtn] = useState({text: 'Add to cart'})
    const [showMessage, setShowMessage] = useState('')

    const handleAddToCart = () => {
        setIsClicked(true)

        const checkIcon = <FontAwesomeIcon icon="check" />
        setShowBtn({text: 'Added', icon: checkIcon})
        setShowMessage('View Cart')
    }

    const style = {
        backgroundColor: '#198754',
        borderColor: '#198754',
        color: '#dbd9d9'
    }

    return (
        
       isClicked ? 
       <>
            <Button className="p-3 added-btn" style={style}>
                {showBtnText.text} {showBtnText.icon} 
            </Button>
            <span> <NavLink to="#" className="view-cart">{showMessage}</NavLink></span>
        </> : 
        <Button id="btn-cart" onClick={handleAddToCart} className="p-3">
            {showBtnText.text}
       </Button> 
    )
    // {/* {            
    //             isClicked && <span> <NavLink to="#">{showMessage}</NavLink></span>
    //         } */}

}

export default AddToCartBtn