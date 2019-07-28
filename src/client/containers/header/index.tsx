import * as React from 'react'
// import { Link } from 'react-router-dom'
import { Grid } from 'react-project-ui'
import { css } from '../../libs'
import style from './style.styl'


function Header(): JSX.Element {
  return (
    <Grid.Col className={ style.header } auto>
      <Grid className={ css.center }>

      </Grid>
    </Grid.Col>
  )
}

export default Header
