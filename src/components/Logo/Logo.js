import React from 'react'

import logo from '../../assets/images/28.1 burger-logo.png'
import classes from './Logo.module.css'

const Logo = () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Burger"/>
  </div>
)

export default Logo
