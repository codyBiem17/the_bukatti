import React, { useState } from 'react'
import {Button} from'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'



const AddToCartBtn = (props) => {
    const [isClicked, setIsClicked] = useState(false)
    const [showBtnText, setShowBtn] = useState({text: 'Add to cart'})
    const [showMessage, setShowMessage] = useState('')

    const handleAddToCart = () => {
        setIsClicked(true)

        const checkIcon = <FontAwesomeIcon icon="check" />
        setShowBtn({text: 'Added', icon: checkIcon})
        setShowMessage('View Cart')

        setTimeout(()=>{
            setShowBtn({text: 'Add to cart'})
        }, 4000)


      
        const filterAddedItem = props.isAdded
        const addToCart = filterAddedItem.filter(filterById => filterById.id === props.id)
        // const getItem = JSON.parse(localStorage.getItem('food')) || []
        // getItem.push(addToCart[0])
        // console.log(showThis[0])
        const emptyCart = []
        emptyCart.push(addToCart[0])

        localStorage.setItem('food', JSON.stringify(addToCart[0]))
        console.log(JSON.parse(localStorage.getItem('food')))
    }


    const style = {
        backgroundColor: '#198754',
        borderColor: '#198754',
        color: '#dbd9d9'
    }

    return (
        
       isClicked ? 
       <>
            <Button className="p-3 added-btn" style={style} >
                {showBtnText.text} {showBtnText.icon} 
            </Button> &nbsp; &nbsp;
            <span> 
                <NavLink
                    to="/view-cart-page"
                    className="view-cart"
                >
                    {showMessage}
                </NavLink>
            </span>
        </> : 
        <Button id="btn-cart" onClick={handleAddToCart} className="p-3">
            {showBtnText.text}
       </Button> 
    )

}

export default AddToCartBtn