import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
  return(
    <ul className={classes.NavigationItems}>
      <NavigationItem
        href='/'
        active
        text="Burger builder"/>
      <NavigationItem
        text='Checkout'
        href='/'/>
    </ul>
  )
}

export default NavigationItems
