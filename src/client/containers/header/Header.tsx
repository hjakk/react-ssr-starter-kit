import * as React from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'


const MENU = [
  { text: 'Main', path: '/' },
  { text: 'About', path: '/about' },
]

function Header(): JSX.Element {
  return (
    <div className={ style.header }>
      <p>Header</p>

      <ul className={ style.headerMenu }>
        { MENU.map((x): unknown => (
          <li key={ x.path }>
            <Link to={ x.path }>{ x.text }</Link>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Header
