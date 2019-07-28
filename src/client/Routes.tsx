import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'react-project-ui'
import ExamplesPage from './pages/examples'
import MainPage from './pages/main'


interface RoutesObject {
  path?: string
  exact?: boolean
  component?: React.ComponentType
  render?: () => React.ReactElement
}

interface RoutesProps {
  routes?: RoutesObject[]
}

const _routes: RoutesObject[] = [
  { path: '/', exact: true, component: MainPage,
    // routes: [
    //   { path: '/', exact: true, component: Home }
    // ]
  },
]

if (window.location.hostname === 'localhost') _routes.push({ path: '/examples', component: ExamplesPage })

function Routes({ routes = _routes }: RoutesProps): React.ReactElement {
  return (
    <Grid.Col>
      <Switch>
        { routes.map((route, i): React.ReactElement => (
          <Route
            key={ i }
            path={ route.path }
            exact={ route.exact }
            render={
              route.render ?
                route.render
                : route.component ?
                  (): React.ReactElement => <route.component />
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
