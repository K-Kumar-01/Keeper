import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authenticate, removeCookie } from './helper/auth';
function Header() {
	const history = useHistory();

	const [auth, setAuth] = useState(authenticate());
	useEffect(() => {
		console.log(auth);
	});
	const logoutUser = () => {
		removeCookie();
		setAuth(false);
		history.push('/login');
	};
	return (
		<header>
			<Link to="/" className="main-page-link">
				Keeper App
			</Link>
			<span>
				{!auth && (
					<Link to="/login" style={{ textDecoration: 'none' }} className="header-link">
						Login
					</Link>
				)}
				{auth && (
					<button className="btn btn-outline-dark" onClick={logoutUser}>
						Logout
					</button>
				)}
			</span>
		</header>
	);
}

export default Header;
