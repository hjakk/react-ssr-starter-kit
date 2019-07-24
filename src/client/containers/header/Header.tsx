import * as React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@project/ui'
import { css } from '../../libs'
import style from './style.styl'


const MENU = [
  { text: 'Main', path: '/' },
  { text: 'Buttons', path: '/buttons' },
  { text: 'Grid', path: '/grid' },
  { text: 'Dropdowns', path: '/dropdowns' },
]

function Header(): JSX.Element {
  return (
    <Grid.Col className={ style.header } auto>
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
    </Grid.Col>
  )
}

export default Header
