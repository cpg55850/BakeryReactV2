import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	const DesktopLinks = (
		<NavList>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='../about'>About</Link>
			</li>
			<li>
				<Link to='../menu'>Menu</Link>
			</li>
			<li>
				<Link to='../contact'>Contact</Link>
			</li>
			<li>
				<Link to='../login'>Login</Link>
			</li>
			<li>
				<Link to='../register'>Register</Link>
			</li>
		</NavList>
	);

	return <>{DesktopLinks}</>;
};

export default Navbar;

export const NavList = styled.ul`
	background-color: #304050;
	font-family: 'Roboto';
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	color: white;
	margin: 0;

	li {
		transition: 0.2s;
		font-size: 0.9rem;
		cursor: pointer;
		text-align: center;
		justify-content: center;
		display: flex;

		&:hover {
			background-color: #203040;
		}

		a {
			text-decoration: none;
			color: white;
			font-size: 1.2rem;
			padding: 1rem;
		}
	}
`;
