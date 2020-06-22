import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import DesktopLinks from './DesktopLinks';

import './Navbar.css';

const Navbar = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive((prevState) => !prevState);
	};

	return (
		<nav className='navbar'>
			<DesktopLinks handleClick={handleClick} />
			{isActive && <NavbarLinks handleClick={handleClick} />}
		</nav>
	);
};

export default Navbar;
