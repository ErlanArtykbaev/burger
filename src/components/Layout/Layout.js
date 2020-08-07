import React from 'react'

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Aux from '../../hoc/Aux'

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  )
}

export default Layout
