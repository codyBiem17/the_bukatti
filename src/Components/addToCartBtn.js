import React, { useState } from 'react'
import {Button} from'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddToCartBtn = ({isClicked, setIsClicked}) =>{
    // const [showBtnText, setShowBtn] = useState({text: 'Added to cart', icon: ''})

    const handleAddToCart = (e) => {

        // e.currentTarget.id ? setIsClicked(true) : null

    //     const checkIcon = <FontAwesomeIcon icon="check" />
    //     setShowBtn({text: 'Added', icon: checkIcon})
    // }
    // const setBtn = () =>{
        
        
    }


    return (
        <Button id="btn-cart" onClick={handleAddToCart} className="p-3">
            { isClicked ? 'clicked' : 'click me'}
        </Button>
    )

}

export default AddToCartBtn