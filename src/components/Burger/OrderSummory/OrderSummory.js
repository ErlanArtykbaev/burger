import React from 'react'

const OrderSummory = (props) => {

  const ingredientSummory = Object.keys(props.ingredients)
    .map(igKey => {
      return(
        <li key={igKey}>
          <span>{igKey}</span> : {props.ingredients[igKey]}
        </li>
      )
    })
  return(
    <>
    <h3>Your order</h3>
    <p>A super burger with: </p>
    <ul>
      {ingredientSummory}
    </ul>
    <p>Continue to checkout?</p>
    
    </>
  )
}

export default OrderSummory
