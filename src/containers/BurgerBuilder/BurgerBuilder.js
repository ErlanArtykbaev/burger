import React, {Component} from 'react'

import axios from '../../axios-orders'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummory from '../../components/Burger/OrderSummory/OrderSummory'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

class BurgerBuilder extends Component{
  state = { 
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    const updateCount = oldCount + 1
    const updateIngredients = {
      ...this.state.ingredients
    }

    updateIngredients[type] = updateCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition
    this.setState({totalPrice: newPrice, ingredients: updateIngredients })
    this.updatePurchaseState(updateIngredients)
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]
    if(oldCount <= 0){
      return
    }
    const updateCount = oldCount - 1
    const updateIngredients = {
      ...this.state.ingredients
    }

    updateIngredients[type] = updateCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction
    this.setState({totalPrice: newPrice, ingredients: updateIngredients })
    this.updatePurchaseState(updateIngredients)
  }

  purchaseHandler = () => {
    this.setState({purchasing: !this.state.purchasing})
  }

  purchaseContinueHandler = () => {
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      costumer: {
        name: 'erl',
        address: {
          street: 'ahun',
          zipCode: '82881',
          country: 'kr'
        },
        email: 'test@test.mail',
        deliveryMethod: 'fastest'
      }
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({loading: false, purchasing: false})
      })
      .catch(err => {
        this.setState({loading: false, purchasing: false})
      })
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummory 
            purchaseCancled={this.purchaseHandler}
            price={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            ingredients={this.state.ingredients} />

      if(this.state.loading){
        orderSummary = <Spinner />
      }

    return(
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler} >
          {orderSummary}
        </Modal>
        <Burger
          ingredients={this.state.ingredients} />
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice} />
      </Aux>
    )
  }
}

export default BurgerBuilder
