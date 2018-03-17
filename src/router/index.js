import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import DemoRedux from '../demo/DemoRedux'
import DemoRouteComponent from '../demo/DemoRouteComponent'
import Checkout from '../components/Checkout'
import CheckoutPage from '../components/CheckoutPage'

const routes = [
  {
    path: process.env.PUBLIC_URL + '/',
    exact: true,
    component: Home
  },
  {
    path: process.env.PUBLIC_URL + '/checkout/:list',
    component: CheckoutPage
  },
  {
    path: process.env.PUBLIC_URL + '/checkout/',
    component: CheckoutPage
  },
  {
    path: process.env.PUBLIC_URL + '/route-component/:number', // URL params
    component: DemoRouteComponent
  }
]

export default () => (
  <Fragment>
    {routes.map((route, i) => <Route key={i} {...route} />)}
  </Fragment>
)
