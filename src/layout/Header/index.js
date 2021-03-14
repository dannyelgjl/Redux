import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logoutService from '../../services/logout';
import './styles.css';

export default function Header() {
	const dispatch = useDispatch();
	const lengthCar = useSelector(state => state.cart.length);
	const { isAuthenticated } = useSelector(state => state.auth);

	const authLogoutButton = () => {
		isAuthenticated && dispatch(logoutService());
	}

	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/list" activeClassName="active" className="navbar-brand">
				Shopping-Car
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" activeClassName="active" className="nav-link">
							Listar
						</NavLink>
					</li>
					{isAuthenticated && (
						<li className="nav-item">
							<NavLink to="/add" activeClassName="active" className="nav-link">
								Adicionar
							</NavLink>
						</li>
					)}
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/login"  onClick={authLogoutButton} activeClassName="active" className="nav-item mt-2 mr-3">
					<i className="fa fa-user fa-2x" aria-hidden="true" />
				</NavLink>
				<NavLink to="/cart" activeClassName="active" className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">{lengthCar}</span>
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}
