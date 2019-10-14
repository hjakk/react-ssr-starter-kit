import * as React from 'react'
import { Link } from 'react-router-dom'
import Modals from './containers/modals'
import Routes from './containers/routes'
import AboutPage from './pages/about'
import MainPage from './pages/main'
import SubroutesPage, { Route1Page, Route2Page } from './pages/subroutes'


// const isBrowser = typeof window !== 'undefined'

const routes = [
  { path: '/', component: MainPage, exact: true },
  { path: '/about', component: AboutPage },
  { path: '/subroutes', component: SubroutesPage,
    routes: [
      { path: '/subroutes/route1', component: Route1Page },
      { path: '/subroutes/route2', component: Route2Page },
      { redirect: '/subroutes', to: '/subroutes/route1' },
    ]
  }
]

function App(): React.ReactElement {
  return (
    <div>
      <ul>
        { routes.map((route) => {
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

      <Routes list={ routes } />
      <Modals />
    </div>
  )
}

export default App
