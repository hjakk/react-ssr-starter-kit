import * as React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../../containers/routes'


function Menu({ list }: { list: any[] }): React.ReactElement {
  return (
    <ul>
      { list.map((route) => {
        if (!route.path) return null
        return (
          <li key={ route.path }>
            <Link to={ route.path }>
              goto: { route.path /* eslint-disable-line */ }
            </Link>
          </li>
        )
      })
      }
    </ul>
  )
}

function SubroutesPage({ routes }: { routes: any[] }): React.ReactElement {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
      <h2>Nested routes</h2>

      <Menu list={ routes } />
      <Routes list={ routes } />
    </div>
  )
}

export default SubroutesPage
export { default as Route1Page } from './route1'
export { default as Route2Page } from './route2'
