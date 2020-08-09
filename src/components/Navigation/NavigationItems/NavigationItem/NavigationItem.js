import React from 'react'

import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
  return(
    <li 
      className={classes.NavigationItem} >
        <a 
          className={classes.active ? classes.active : null}
          href={props.href}>{props.text}</a>
    </li>
  )
}

export default NavigationItem
