import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Add from './Add';
import List from './List';
import Cart from './Cart';
import Login from './Login';
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useSelector(state => state.auth);

	return (
		<Route {...rest} render={props => (
			isAuthenticated ? (<Component {...props}/>) : (<Redirect to={{pathname: '/', state: { from: props.location }}} />)
		)} />
	);
};

export default () => (
	<Switch>
		<Route path="/login" component={Login} />
		<Route path="/list" component={List} />
		<PrivateRoute path="/add" component={Add} />
		<Route path="/cart" component={Cart} />
		<Redirect path="/" to="/list" />
	</Switch>
);
