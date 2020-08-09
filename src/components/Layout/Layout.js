import React, { useState } from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Aux'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)
  const sideDrawerMove = () => {
    setShowSideDrawer(!showSideDrawer)
  }
  return (
    <Aux>
      <Toolbar menuClick={sideDrawerMove} />
      <SideDrawer 
        open={showSideDrawer} 
        move={sideDrawerMove} />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout
