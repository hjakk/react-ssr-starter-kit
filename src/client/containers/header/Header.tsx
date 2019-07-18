import * as React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '../../components'
import { css } from '../../libs'
import style from './style.styl'


const MENU = [
  { text: 'Main', path: '/' },
  { text: 'Buttons', path: '/buttons' },
  { text: 'Grid', path: '/grid' },
]

function Header(): JSX.Element {
  return (
    <Grid className={ style.header }>
      <Grid className={ css.center }>
        Header

        <ul className={ style.headerMenu }>
          { MENU.map((x): unknown => (
            <li key={ x.path }>
              <Link to={ x.path }>{ x.text }</Link>
            </li>
          ))
          }
        </ul>
      </Grid>
    </Grid>
  )
}

export default Header
