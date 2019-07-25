import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from '@project/ui'
import Buttons from './pages/buttons/Buttons'
import GridPage from './pages/grid'
import DropdownsPage from './pages/dropdowns'
import ExamplesPage from './pages/examples'
import Main from './pages/main/Main'


interface RoutesObject {
  path?: string
  exact?: boolean
  component?: React.ComponentType
  render?: () => JSX.Element
}

interface RoutesProps {
  routes?: RoutesObject[]
}

const _routes: RoutesObject[] = [
  { path: '/', exact: true, component: Main,
    // routes: [
    //   { path: '/', exact: true, component: Home }
    // ]
  },
  { path: '/buttons', component: Buttons },
  { path: '/grid', component: GridPage },
  { path: '/dropdowns', component: DropdownsPage },
]

if (window.location.hostname === 'localhost') _routes.push({ path: '/examples', component: ExamplesPage })

function Routes({ routes = _routes }: RoutesProps): JSX.Element {
  return (
    <Grid.Col>
      <Switch>
        { routes.map((route, i): JSX.Element => (
          <Route
            key={ i }
            path={ route.path }
            exact={ route.exact }
            render={
              route.render ?
                route.render
                : route.component ?
                  (): JSX.Element => <route.component />
                  : null
            }
          />
        ))
        }
      </Switch>
    </Grid.Col>
  )
}

export default Routes
