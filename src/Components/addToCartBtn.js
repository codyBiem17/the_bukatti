import React, { useState } from 'react'
import {Button} from'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddToCartBtn = ({isClicked, setIsClicked}) =>{
    const [showBtnText, setShowBtn] = useState({text: 'Added to cart', icon: ''})

    const handleAddToCart = () => {
        setIsClicked(true)

        const checkIcon = <FontAwesomeIcon icon="check" />
        setShowBtn({text: 'Added', icon: checkIcon})
    }
    // const setBtn = () =>{
        
        
    // }


    return (
        <Button onClick={handleAddToCart} className="p-3">
            { isClicked ? ( showBtnText.text + showBtnText.icon) : showBtnText.text }
            {/* The certificate with thumbprint 63e789c3adf4c54277055b25d36c36b65fd46c00 was not found. */}
        </Button>
    )

}

export default AddToCartBtn