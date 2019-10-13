import * as React from 'react'
import Router from 'react-router'
import { Switch, Route, Redirect } from 'react-router-dom'


interface RouteProps extends Router.RouteProps {
  component?: any
  routes?: RouteProps[]
  redirect?: string
  to?: string
}

interface RoutesProps {
  list: RouteProps[]
}

function Routes({ list }: RoutesProps): React.ReactElement {
  return (
    <Switch>
      { list.map((route, i): React.ReactElement => {
        if (route.redirect) return (
          <Redirect
            from={ route.redirect }
            to={ route.to as string }
            key={ i }
          />
        )

        return route.routes ?
          <Route
            path={ route.path }
            exact={ route.exact }
            render={ (props): React.ReactElement => <route.component { ...props } routes={ route.routes } /> }
            key={ i }
          />
          :
          <Route
            path={ route.path }
            exact={ route.exact }
            component={ route.component }
            key={ i }
          />
      })
      }
    </Switch>
  )
}

export default Routes
