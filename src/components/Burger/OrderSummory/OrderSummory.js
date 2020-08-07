import React from 'react'

import Button from '../../UI/Button/Button'

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
    <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
    <p>Continue to checkout?</p>
    <Button
      btnType='Danger'
      clicked={props.purchaseCancled}>CANCEL</Button>
    <Button
      clicked={props.purchaseContinued}
      btnType='Success'>CONTINUE</Button>
    </>
  )
}

export default OrderSummory
