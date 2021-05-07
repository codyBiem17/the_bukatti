import React, { useState } from 'react'
import {Button} from'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'


const AddToCartBtn = ({isClicked, setIsClicked}) =>{
    const [showBtnText, setShowBtn] = useState({text: 'Added to cart'})
    const [showMessage, setShowMessage] = useState('')

    const handleAddToCart = (e) => {
        setIsClicked(true)

        const checkIcon = <FontAwesomeIcon icon="check" />
        setShowBtn({text: 'Added', icon: checkIcon})

        setShowMessage('View Cart')

    // }
    // const setBtn = () =>{
        
        
    }
    


    return (
        <>
            <Button id="btn-cart" onClick={handleAddToCart} className="p-3">
                { isClicked ? 
                    <span> {showBtnText.text} {showBtnText.icon} </span> : 
                    showBtnText.text
                }
            </Button>
            {
                isClicked && <span> <NavLink to="#">{showMessage}</NavLink></span>
            }
        </>
    )

}

export default AddToCartBtn