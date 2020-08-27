import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'lib/auth'

export const PublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => 
			isAuthenticated() ? (
				<Redirect to='/' />
			) : (
				<Component {...props} />
			)
		}
	/>
)

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => 
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to='/login' />
			)
		}
	/>
)