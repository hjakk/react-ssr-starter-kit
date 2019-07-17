import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid } from './components'
import Buttons from './pages/buttons/Buttons'
import GridPage from './pages/grid'
import Main from './pages/main/Main'


interface IRoutesObject {
  path?: string
  exact?: boolean
  component?: React.ComponentType
  render?: () => JSX.Element
}

interface IRoutesProps {
  routes?: IRoutesObject[]
}

const _routes: IRoutesObject[] = [
  { path: '/', exact: true, component: Main,
    // routes: [
    //   { path: '/', exact: true, component: Home }
    // ]
  },
  { path: '/buttons', component: Buttons },
  { path: '/grid', component: GridPage },
]

function Routes({ routes = _routes }: IRoutesProps): JSX.Element {
  return (
    <Grid>
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
    </Grid>
  )
}

export default Routes
