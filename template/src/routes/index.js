import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute, GuestRoute } from './utils'

// Pages
import HomePage from 'pages/home'
import AboutPage from 'pages/about'
import PrivatePage from 'pages/private'
import LoginPage from 'pages/login'
import NotFoundPage from 'pages/_404'

const Routes = () => {
  return (
    <Switch>
		<Route path="/" component={HomePage} exact />
		<PublicRoute path="/about" component={AboutPage} exact />
		<PrivateRoute path="/private" component={PrivatePage} exact />
		<GuestRoute path="/login" component={LoginPage} exact />
		<Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes