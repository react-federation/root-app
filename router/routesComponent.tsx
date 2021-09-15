import React from 'react'
import { Route, Switch } from 'react-router'
import routes from './routes'

const Router = () => {
  return (
    <Switch>
      {routes.map((routeProps, index) => {
        const key = `route-${routeProps.path}-${index}`

        return <Route key={key} {...routeProps} />
      })}
    </Switch>
  )
}

export default Router
